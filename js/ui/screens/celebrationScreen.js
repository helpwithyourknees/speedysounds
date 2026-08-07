import { CARS } from "../../game/rewards.js";
import { carGridHtml } from "../components/carSprite.js";
import { goTo } from "../../state/appState.js";
import { getZone, nextZone } from "../../content/zones.js";

export function renderCelebrationScreen(root, appStateSnapshot) {
  const { zoneId, reward, sessionType, dailyBonus } = appStateSnapshot.screenParams;

  if (sessionType) {
    root.innerHTML = `
      <div class="screen">
        <div class="card">
          <div class="confetti-emoji">🎉</div>
          <h1>${sessionType === "dailyPitStop" ? "Pit Stop Complete!" : "Nice Review Lap!"}</h1>
          <p>${
            sessionType === "dailyPitStop"
              ? "Great daily practice! Come back tomorrow for a new one."
              : "Great extra practice on words you've already learned!"
          }</p>
          ${dailyBonus ? `<p>⭐ Bonus star earned!</p>` : ""}
          <button id="back-to-map">Back to the Raceway</button>
        </div>
      </div>
    `;
    root.querySelector("#back-to-map").addEventListener("click", () => goTo("raceMap"));
    return;
  }

  const zone = getZone(zoneId);
  const upcoming = nextZone(zoneId);
  const car = reward ? CARS[reward] : null;

  root.innerHTML = `
    <div class="screen">
      <div class="card">
        <div class="confetti-emoji">🎉🏁🎉</div>
        <h1>${zone.name} Complete!</h1>
        ${
          car
            ? `<p>You unlocked a new car!</p><div class="big-emoji">${car.emoji}</div><p><strong>${car.name}</strong></p>`
            : `<p>Great job finishing this track!</p>`
        }
        ${
          upcoming && !upcoming.optional
            ? `<p>Next up: <strong>${upcoming.name}</strong></p>`
            : ""
        }
        <h3>Your Garage</h3>
        ${carGridHtml(appStateSnapshot.progress.unlockedCars)}
        <button id="back-to-map">Back to the Raceway</button>
      </div>
    </div>
  `;

  root.querySelector("#back-to-map").addEventListener("click", () => goTo("raceMap"));
}
