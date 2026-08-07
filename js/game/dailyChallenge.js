// "Daily Pit Stop" (a short daily mini-challenge mixing a couple of new
// words with already-mastered ones) and "Review Lap" (practice a handful of
// already-done words on demand). Revisiting mastered words - not just always
// marching forward - is what actually makes a skill stick (spaced review),
// rather than just clearing levels once and never touching them again.

import { exercises } from "../content/wordLists.js";
import { zones } from "../content/zones.js";
import { getZoneStatus } from "./progression.js";

// A tiny seeded PRNG so "today's" pit stop is the same set all day (stable
// across reloads/reopens) but different from day to day - no server needed.
function seededRandom(seedStr) {
  let h = 0;
  for (let i = 0; i < seedStr.length; i++) {
    h = (Math.imul(31, h) + seedStr.charCodeAt(i)) | 0;
  }
  let state = h >>> 0;
  return function next() {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function seededShuffle(arr, rand) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function isDailyPitStopDoneToday(progress) {
  return progress.dailyPitStop?.date === todayKey() && !!progress.dailyPitStop?.completed;
}

function allDoneIds(progress) {
  return new Set(Object.values(progress.zones).flatMap((z) => z.itemsDone ?? []));
}

function itemsInUnlockedZones(progress) {
  const unlockedZoneIds = new Set(
    zones.filter((z) => getZoneStatus(progress, z.id) !== "locked").map((z) => z.id)
  );
  return exercises.filter((e) => unlockedZoneIds.has(e.zoneId));
}

export function buildDailyPitStop(progress) {
  const doneIds = allDoneIds(progress);
  const available = itemsInUnlockedZones(progress);
  const mastered = available.filter((e) => doneIds.has(e.id));
  const fresh = available.filter((e) => !doneIds.has(e.id));

  const rand = seededRandom(todayKey());
  const reviewPick = seededShuffle(mastered, rand).slice(0, 3);
  const freshPick = seededShuffle(fresh, rand).slice(0, 2);
  const combined = seededShuffle([...reviewPick, ...freshPick], rand);

  return combined.length ? combined : seededShuffle(available, rand).slice(0, 5);
}

export function buildReviewLap(progress, count = 5) {
  const doneIds = [...allDoneIds(progress)];
  const doneItems = exercises.filter((e) => doneIds.includes(e.id));
  if (!doneItems.length) return [];
  const rand = seededRandom(`review-${Date.now()}`);
  return seededShuffle(doneItems, rand).slice(0, Math.min(count, doneItems.length));
}

export function reviewLapAvailableCount(progress) {
  return allDoneIds(progress).size;
}
