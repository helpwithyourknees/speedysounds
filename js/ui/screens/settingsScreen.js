import { state, setState, goTo } from "../../state/appState.js";
import { save, clearAll } from "../../state/persistence.js";

export function renderSettingsScreen(root, appStateSnapshot) {
  root.innerHTML = `
    <div class="screen">
      <div class="card">
        <h2>⚙️ Settings</h2>

        <div class="setting-row">
          <span>Sound effects</span>
          <input type="checkbox" id="sfx-toggle" ${appStateSnapshot.settings.soundEffectsEnabled ? "checked" : ""} />
        </div>

        <div class="setting-row" style="flex-direction:column; align-items:flex-start; gap:6px;">
          <div style="display:flex; justify-content:space-between; width:100%;">
            <span>Camera mirror during practice</span>
            <input type="checkbox" id="mirror-toggle" ${appStateSnapshot.settings.mirrorEnabled ? "checked" : ""} />
          </div>
          <small style="color:#777;">Lets him watch his own mouth while practicing - video stays on this device only, nothing is recorded or sent anywhere.</small>
        </div>

        <div class="setting-row">
          <span>Start over completely</span>
          <button class="secondary" id="reset-progress">Reset all progress</button>
        </div>

        <button class="ghost" id="back-to-map">Back to the Raceway</button>
      </div>
    </div>
  `;

  root.querySelector("#sfx-toggle").addEventListener("change", (e) => {
    const settings = { ...state.settings, soundEffectsEnabled: e.target.checked };
    setState({ settings });
    save({ version: 1, progress: state.progress, settings });
  });

  root.querySelector("#mirror-toggle").addEventListener("change", (e) => {
    const settings = { ...state.settings, mirrorEnabled: e.target.checked };
    setState({ settings });
    save({ version: 1, progress: state.progress, settings });
  });

  root.querySelector("#reset-progress").addEventListener("click", () => {
    const ok = confirm("This clears all stars and unlocked cars. Are you sure?");
    if (!ok) return;
    clearAll();
    location.reload();
  });

  root.querySelector("#back-to-map").addEventListener("click", () => goTo("raceMap"));
}
