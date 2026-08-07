// Replaces a flat progress bar with a car that visibly drives down a track
// as `fraction` (0-1) increases - a more thematic, motivating stand-in for
// "3 of 6 done" during an exercise session.
export function raceTrackHtml(fraction, { compact = false, carEmoji = "🏎️" } = {}) {
  const clamped = Math.max(0, Math.min(1, fraction));
  const leftPct = 4 + clamped * 88; // keep the car icon within the track's visible bounds
  return `
    <div class="race-track-visual ${compact ? "compact" : ""}">
      <div class="finish-flag">🏁</div>
      <div class="race-car-icon" style="left:${leftPct}%">${carEmoji}</div>
    </div>
  `;
}
