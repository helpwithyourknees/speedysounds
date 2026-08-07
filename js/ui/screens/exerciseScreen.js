import * as camera from "../../audio/camera.js";
import { speak, isSupported as ttsSupported } from "../../audio/tts.js";
import { itemsForZone } from "../../content/wordLists.js";
import { getZone as getZoneMeta } from "../../content/zones.js";
import { markItemDone } from "../../game/progression.js";
import { todayKey } from "../../game/dailyChallenge.js";
import { currentCarEmoji } from "../../game/rewards.js";
import { save } from "../../state/persistence.js";
import { state, goTo } from "../../state/appState.js";
import { goToExerciseItem } from "../navigation.js";
import { raceTrackHtml } from "../components/raceTrackVisual.js";
import { flashCardHtml } from "../components/flashCard.js";

// One button does it all: "Next Card" both scores this word as correct
// (adds a star) and advances - no separate correctness check. A grown-up
// is already the one deciding when to move on, so that click IS the "yes,
// he got it" signal.
export function renderExerciseScreen(root, appStateSnapshot) {
  const { zoneId, itemIndex, sessionType, items: suppliedItems } = appStateSnapshot.screenParams;
  const isSpecialSession = !!sessionType;
  // `items` always comes through screenParams (shuffled at zone-entry by
  // raceMapScreen, or built by the daily/review session builders) so the
  // same fixed order is used for every item transition within a playthrough.
  const items = suppliedItems ?? itemsForZone(zoneId);
  const zoneMeta = isSpecialSession ? null : getZoneMeta(zoneId);
  const currentParams = isSpecialSession
    ? { sessionType, items, itemIndex }
    : { zoneId, items, itemIndex };

  let hasAutoPlayed = false;

  if (!items || itemIndex >= items.length) {
    // Shouldn't normally happen (we advance to celebration/map on the last
    // item), but guard against a stale deep-link or an empty special session.
    goTo("raceMap");
    return () => {};
  }

  const item = items[itemIndex];
  const canModel = ttsSupported() && item.stage !== "isolated";

  function screenTitle() {
    if (isSpecialSession) {
      return sessionType === "dailyPitStop" ? "🏆 Daily Pit Stop" : "🔁 Review Lap";
    }
    return `${zoneMeta.icon} ${zoneMeta.name}`;
  }

  function render() {
    const fraction = itemIndex / items.length;
    const carEmoji = currentCarEmoji(appStateSnapshot.progress.unlockedCars);
    root.innerHTML = `
      <div class="stars-count">⭐ ${appStateSnapshot.progress.totalStars}</div>
      <div class="screen">
        <h2>${screenTitle()}</h2>
        ${raceTrackHtml(fraction, { carEmoji })}
        ${flashCardHtml(item, itemIndex, items.length)}
        <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center;">
          ${canModel ? `<button class="secondary" id="hear-it-btn">🔊 Hear it first</button>` : ""}
          <button class="ghost" id="how-to-btn">❓ How do I make this sound?</button>
        </div>
        ${state.settings.mirrorEnabled ? `<video id="mirror-video" class="mirror-preview" autoplay playsinline muted></video>` : ""}
        <button class="next-card-btn" id="next-card-btn">➡️ Next Card</button>
        <button class="ghost" id="back-to-map">Back to map</button>
      </div>
    `;
    wire();
    attachMirrorIfReady();

    if (canModel && !hasAutoPlayed) {
      hasAutoPlayed = true;
      speak(item.text);
    }
  }

  function attachMirrorIfReady() {
    if (!state.settings.mirrorEnabled) return;
    const videoEl = root.querySelector("#mirror-video");
    const stream = camera.getMediaStream();
    if (videoEl && stream) videoEl.srcObject = stream;
  }

  async function startMirrorIfEnabled() {
    if (!state.settings.mirrorEnabled) return;
    try {
      await camera.startCameraPreview();
      attachMirrorIfReady();
    } catch (err) {
      console.warn("Speedy Sounds: camera access failed.", err);
    }
  }

  function wire() {
    root.querySelector("#hear-it-btn")?.addEventListener("click", () => speak(item.text));
    root.querySelector("#how-to-btn").addEventListener("click", () => {
      goTo("placementLesson", { sound: item.sound, next: currentParams });
    });
    root.querySelector("#next-card-btn").addEventListener("click", () => goToNextCard());
    root.querySelector("#back-to-map").addEventListener("click", () => goTo("raceMap"));
  }

  function goToNextCard() {
    const { zoneJustCompleted, reward } = markItemDone(state.progress, item.id, {
      awardStar: true,
    });
    camera.stopCameraPreview();

    const isLastItem = itemIndex + 1 >= items.length;

    let dailyBonus = false;
    if (sessionType === "dailyPitStop" && isLastItem) {
      state.progress.dailyPitStop = { date: todayKey(), completed: true };
      state.progress.totalStars = (state.progress.totalStars ?? 0) + 1;
      dailyBonus = true;
    }

    persist();

    if (zoneJustCompleted) {
      goTo("celebration", { zoneId: zoneJustCompleted, reward });
    } else if (!isLastItem) {
      goToExerciseItem(
        isSpecialSession
          ? { sessionType, items, itemIndex: itemIndex + 1 }
          : { zoneId, items, itemIndex: itemIndex + 1 }
      );
    } else if (isSpecialSession) {
      goTo("celebration", { sessionType, dailyBonus });
    } else {
      goTo("raceMap");
    }
  }

  function persist() {
    save({ version: 1, progress: state.progress, settings: state.settings });
  }

  render();
  startMirrorIfEnabled();

  return function cleanup() {
    camera.stopCameraPreview();
  };
}
