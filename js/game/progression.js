import { zones, getZone, nextZone } from "../content/zones.js";
import { itemsForZone } from "../content/wordLists.js";

const MAX_ATTEMPTS_LOG = 500;

// Ensures every zone has a status entry. Starter zone and the optional bonus
// road are unlocked from the start; everything else is locked until its
// prerequisite zone completes.
export function ensureZonesInitialized(progress) {
  for (const zone of zones) {
    if (!progress.zones[zone.id]) {
      const unlockedByDefault = zone.requires === null;
      progress.zones[zone.id] = {
        status: unlockedByDefault ? "unlocked" : "locked",
        itemsDone: [],
      };
    }
  }
  return progress;
}

export function getZoneStatus(progress, zoneId) {
  return progress.zones[zoneId]?.status ?? "locked";
}

export function isZoneComplete(progress, zoneId) {
  const items = itemsForZone(zoneId).map((i) => i.id);
  const done = new Set(progress.zones[zoneId]?.itemsDone ?? []);
  return items.length > 0 && items.every((id) => done.has(id));
}

// Called once per exercise item, whichever way it resolves (a "good" verdict,
// or the no-trap 3-attempt auto-advance). Effort-based: showing up and trying
// counts toward zone completion even without a "good" verdict, so a bad mic
// day or an off day never locks him out of progress.
export function markItemDone(progress, itemId, { awardStar }) {
  const item = findItemZone(itemId);
  if (!item) return { zoneJustCompleted: null, reward: null };
  const zoneState = progress.zones[item.zoneId];
  if (!zoneState.itemsDone.includes(itemId)) {
    zoneState.itemsDone.push(itemId);
  }
  if (awardStar) {
    progress.totalStars = (progress.totalStars ?? 0) + 1;
  }

  let zoneJustCompleted = null;
  let reward = null;
  if (zoneState.status !== "complete" && isZoneComplete(progress, item.zoneId)) {
    zoneState.status = "complete";
    zoneJustCompleted = item.zoneId;
    reward = unlockNextZone(progress, item.zoneId);
  }

  return { zoneJustCompleted, reward };
}

function unlockNextZone(progress, completedZoneId) {
  const zone = getZone(completedZoneId);
  if (zone?.unlockReward && !progress.unlockedCars.includes(zone.unlockReward)) {
    progress.unlockedCars.push(zone.unlockReward);
  }
  const upcoming = nextZone(completedZoneId);
  if (upcoming && !upcoming.optional) {
    const state = progress.zones[upcoming.id];
    if (state && state.status === "locked") state.status = "unlocked";
  }
  return zone?.unlockReward ?? null;
}

function findItemZone(itemId) {
  for (const zone of zones) {
    const items = itemsForZone(zone.id);
    if (items.some((i) => i.id === itemId)) return { zoneId: zone.id };
  }
  return null;
}

export function logAttempt(progress, entry) {
  progress.attemptsLog.push({ ...entry, ts: Date.now() });
  if (progress.attemptsLog.length > MAX_ATTEMPTS_LOG) {
    progress.attemptsLog.splice(0, progress.attemptsLog.length - MAX_ATTEMPTS_LOG);
  }
}

export function zoneProgressFraction(progress, zoneId) {
  const items = itemsForZone(zoneId);
  if (!items.length) return 0;
  const done = new Set(progress.zones[zoneId]?.itemsDone ?? []);
  return items.filter((i) => done.has(i.id)).length / items.length;
}
