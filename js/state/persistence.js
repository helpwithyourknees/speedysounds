const STORAGE_KEY = "speedySounds.v1";
const CURRENT_VERSION = 1;

function defaultData() {
  return {
    version: CURRENT_VERSION,
    progress: {
      currentZoneId: "starter-straightaway",
      zones: {}, // zoneId -> { status: 'locked'|'unlocked'|'complete', itemsDone: [itemId,...] }
      attemptsLog: [], // { itemId, result, source, ts }
      totalStars: 0,
      unlockedCars: [],
      dailyPitStop: null, // { date: 'YYYY-MM-DD', completed: bool }
      placementSeen: {}, // sound -> true, once he's seen the "how to make it" lesson
    },
    settings: { soundEffectsEnabled: true, mirrorEnabled: false },
  };
}

// No migrations exist yet; this is where a version bump would add one.
function migrate(data) {
  if (!data.version || data.version < CURRENT_VERSION) {
    return { ...defaultData(), ...data, version: CURRENT_VERSION };
  }
  return data;
}

export function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData();
    return migrate(JSON.parse(raw));
  } catch (err) {
    console.warn("Speedy Sounds: failed to load saved progress, starting fresh.", err);
    return defaultData();
  }
}

export function save(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn("Speedy Sounds: failed to save progress.", err);
  }
}

export function clearAll() {
  localStorage.removeItem(STORAGE_KEY);
}
