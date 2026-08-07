import { zones } from "../../content/zones.js";
import { shuffledItemsForZone } from "../../content/wordLists.js";
import { getZoneStatus, zoneProgressFraction } from "../../game/progression.js";
import {
  buildDailyPitStop,
  buildReviewLap,
  isDailyPitStopDoneToday,
  reviewLapAvailableCount,
} from "../../game/dailyChallenge.js";
import { goTo } from "../../state/appState.js";
import { goToExerciseItem } from "../navigation.js";
import { raceTrackHtml } from "../components/raceTrackVisual.js";
import { CARS, currentCarEmoji } from "../../game/rewards.js";

export function renderRaceMapScreen(root, appStateSnapshot) {
  const { progress } = appStateSnapshot;
  const pitStopDone = isDailyPitStopDoneToday(progress);
  const reviewCount = reviewLapAvailableCount(progress);

  root.innerHTML = `
    <button class="gear-btn" id="gear-btn" aria-label="Settings">⚙️</button>
    <div class="stars-count">⭐ ${progress.totalStars}</div>
    <div class="screen">
      <h1>🏁 Speech Sounds Raceway</h1>
      <p>Pick a track to practice!</p>

      <div class="side-quests">
        <button id="daily-pitstop-btn" ${pitStopDone ? "disabled" : ""}>
          ${pitStopDone ? "✅ Pit Stop Done Today" : "🏆 Daily Pit Stop"}
        </button>
        <button class="secondary" id="review-lap-btn" ${reviewCount === 0 ? "disabled" : ""}>
          🔁 Review Lap
        </button>
      </div>

      <div class="track-list">
        ${zones.map((z) => zoneNodeHtml(z, progress)).join("")}
      </div>
    </div>
  `;

  root.querySelector("#gear-btn").addEventListener("click", () => goTo("settings"));

  if (!pitStopDone) {
    root.querySelector("#daily-pitstop-btn").addEventListener("click", () => {
      const dailyItems = buildDailyPitStop(progress);
      goToExerciseItem({ sessionType: "dailyPitStop", items: dailyItems, itemIndex: 0 });
    });
  }

  if (reviewCount > 0) {
    root.querySelector("#review-lap-btn").addEventListener("click", () => {
      const reviewItems = buildReviewLap(progress);
      goToExerciseItem({ sessionType: "review", items: reviewItems, itemIndex: 0 });
    });
  }

  zones.forEach((z) => {
    const status = getZoneStatus(progress, z.id);
    if (status === "locked") return;
    const node = root.querySelector(`[data-zone-id="${z.id}"]`);
    node?.addEventListener("click", () =>
      goToExerciseItem({ zoneId: z.id, items: shuffledItemsForZone(z.id), itemIndex: 0 })
    );
  });
}

function zoneNodeHtml(zone, progress) {
  const status = getZoneStatus(progress, zone.id);
  const fraction = zoneProgressFraction(progress, zone.id);
  // A completed zone shows off the specific car it rewarded; one still in
  // progress shows whichever car he's most recently unlocked overall.
  const carEmoji =
    status === "complete" && CARS[zone.unlockReward]?.vehicle
      ? CARS[zone.unlockReward].emoji
      : currentCarEmoji(progress.unlockedCars);

  return `
    <div class="zone-node ${status} ${status === "unlocked" ? "current" : ""}" data-zone-id="${zone.id}">
      <div class="zone-icon">${status === "locked" ? "🔒" : zone.icon}</div>
      <div class="zone-info">
        <div><strong>${zone.name}</strong></div>
        ${
          status === "locked"
            ? `<div>Locked</div>`
            : `<div>${status === "complete" ? "Complete! 🏆" : ""}</div>${raceTrackHtml(fraction, { compact: true, carEmoji })}`
        }
      </div>
    </div>
  `;
}
