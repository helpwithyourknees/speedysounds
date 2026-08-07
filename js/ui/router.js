import { renderRaceMapScreen } from "./screens/raceMapScreen.js";
import { renderExerciseScreen } from "./screens/exerciseScreen.js";
import { renderCelebrationScreen } from "./screens/celebrationScreen.js";
import { renderSettingsScreen } from "./screens/settingsScreen.js";
import { renderPlacementLessonScreen } from "./screens/placementLessonScreen.js";

let currentCleanup = null;

export function renderScreen(root, appStateSnapshot) {
  if (currentCleanup) {
    currentCleanup();
    currentCleanup = null;
  }

  let cleanup;
  switch (appStateSnapshot.screen) {
    case "raceMap":
      cleanup = renderRaceMapScreen(root, appStateSnapshot);
      break;
    case "exercise":
      cleanup = renderExerciseScreen(root, appStateSnapshot);
      break;
    case "celebration":
      cleanup = renderCelebrationScreen(root, appStateSnapshot);
      break;
    case "settings":
      cleanup = renderSettingsScreen(root, appStateSnapshot);
      break;
    case "placementLesson":
      cleanup = renderPlacementLessonScreen(root, appStateSnapshot);
      break;
    default:
      root.innerHTML = `<div class="screen"><p>Loading...</p></div>`;
  }
  currentCleanup = typeof cleanup === "function" ? cleanup : null;
}
