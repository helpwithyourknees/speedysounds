// Minimal reactive state container: a single object + subscriber list.
// Screens call `setState({...})` to merge changes and trigger a re-render.

const listeners = new Set();

export const state = {
  screen: "loading", // loading | raceMap | exercise | celebration | settings | placementLesson
  screenParams: {},
  progress: null, // filled in from persistence
  settings: { soundEffectsEnabled: true, mirrorEnabled: false },
};

export function setState(patch) {
  Object.assign(state, patch);
  for (const fn of listeners) fn(state);
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function goTo(screen, params = {}) {
  setState({ screen, screenParams: params });
}
