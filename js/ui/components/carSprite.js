import { CARS, allCarIds } from "../../game/rewards.js";

export function carChipHtml(carId, unlocked) {
  const car = CARS[carId];
  return `
    <div class="car-chip ${unlocked ? "unlocked" : ""}" title="${car.name}">
      <div>${unlocked ? car.emoji : "🔒"}</div>
    </div>
  `;
}

export function carGridHtml(unlockedCarIds) {
  const unlockedSet = new Set(unlockedCarIds);
  return `
    <div class="car-grid">
      ${allCarIds().map((id) => carChipHtml(id, unlockedSet.has(id))).join("")}
    </div>
  `;
}
