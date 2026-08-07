import { itemsForZone } from "../content/wordLists.js";
import { state, goTo } from "../state/appState.js";

// Every entry point into the exercise screen (race map, daily pit stop,
// review lap, and advancing to the next item within a session) should go
// through here, so a placement lesson can be inserted the first time a
// session reaches a sound he hasn't been taught yet - including mid-zone,
// since some zones mix /s/ and /z/ words.
export function goToExerciseItem(params) {
  const items = params.items ?? itemsForZone(params.zoneId);
  const item = items?.[params.itemIndex];

  if (item && !state.progress.placementSeen?.[item.sound]) {
    goTo("placementLesson", { sound: item.sound, next: params });
    return;
  }
  goTo("exercise", params);
}
