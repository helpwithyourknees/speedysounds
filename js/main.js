import { setState, subscribe, goTo } from "./state/appState.js";
import { load } from "./state/persistence.js";
import { ensureZonesInitialized } from "./game/progression.js";
import { renderScreen } from "./ui/router.js";

const root = document.getElementById("app");

subscribe((s) => renderScreen(root, s));

const saved = load();
ensureZonesInitialized(saved.progress);
setState({
  progress: saved.progress,
  settings: saved.settings,
});

goTo("raceMap");
