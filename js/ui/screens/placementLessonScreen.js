import { placementLessons } from "../../content/placementLessons.js";
import { state, goTo } from "../../state/appState.js";
import { save } from "../../state/persistence.js";

export function renderPlacementLessonScreen(root, appStateSnapshot) {
  const { sound, next } = appStateSnapshot.screenParams;
  const lesson = placementLessons[sound];

  root.innerHTML = `
    <div class="screen">
      <div class="card">
        <div class="big-emoji">${lesson.icon}</div>
        <h2>${lesson.title}</h2>
        <ol class="placement-steps">
          ${lesson.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
        <button id="lesson-done">Got it, let's try!</button>
      </div>
    </div>
  `;

  root.querySelector("#lesson-done").addEventListener("click", () => {
    state.progress.placementSeen = { ...(state.progress.placementSeen ?? {}), [sound]: true };
    save({ version: 1, progress: state.progress, settings: state.settings });
    goTo("exercise", next);
  });
}
