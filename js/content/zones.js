// Every zone is unlocked from the start - no need to complete one to reach
// another. `requires` is kept (always null now) for backward compatibility
// with saved progress and the completion-tracking code, not for gating.
export const zones = [
  {
    id: "starter-straightaway",
    name: "Starter Straightaway",
    icon: "🏁",
    requires: null,
    unlockReward: "red-racer",
  },
  {
    id: "sibilant-speedway",
    name: "Alex's Speedway",
    icon: "🛣️",
    requires: null,
    unlockReward: "blue-bolt",
  },
  {
    id: "blend-bridge",
    name: "Blend Bridge",
    icon: "🌉",
    requires: null,
    unlockReward: "turbo-spoiler",
  },
  {
    id: "sentence-summit",
    name: "Sentence Summit",
    icon: "⛰️",
    requires: null,
    unlockReward: "flame-decals",
  },
  {
    id: "twister-turnpike-boss",
    name: "Twister Turnpike (Boss!)",
    icon: "🏆",
    requires: null,
    unlockReward: "gold-trophy-car",
    isBoss: true,
  },
  {
    id: "bonus-road",
    name: "Bonus Road (R sounds)",
    icon: "🎁",
    requires: null,
    unlockReward: "rally-car",
  },
  {
    id: "jungle-junction",
    name: "Jungle Junction (J sounds)",
    icon: "🌴",
    requires: null,
    unlockReward: "jungle-buggy",
  },
  {
    id: "cheetah-chase",
    name: "Cheetah Chase (CH sounds)",
    icon: "🐆",
    requires: null,
    unlockReward: "choo-choo-train",
  },
  {
    id: "speedy-s-sprint",
    name: "Speedy S Sprint",
    icon: "🏎️",
    requires: null,
    unlockReward: "taxi-cab",
  },
  {
    id: "zebra-zone",
    name: "Zebra Zone",
    icon: "🦓",
    requires: null,
    unlockReward: "mini-van",
  },
  {
    id: "rally-rabbit-road",
    name: "Rally Rabbit Road",
    icon: "🐇",
    requires: null,
    unlockReward: "motorcycle",
  },
  {
    id: "jungle-jamboree",
    name: "Jungle Jamboree",
    icon: "🌺",
    requires: null,
    unlockReward: "monster-tractor",
  },
  {
    id: "chatterbox-chase",
    name: "Chatterbox Chase",
    icon: "🐯",
    requires: null,
    unlockReward: "school-bus",
  },
  {
    id: "mixed-up-motorway",
    name: "Mixed-Up Motorway",
    icon: "🚦",
    requires: null,
    unlockReward: "rescue-ambulance",
  },
  {
    id: "silly-sentence-speedway",
    name: "Silly Sentence Speedway",
    icon: "😄",
    requires: null,
    unlockReward: "scooter",
  },
  {
    id: "twister-town",
    name: "Twister Town",
    icon: "🌀",
    requires: null,
    unlockReward: "fire-truck",
    isBoss: true,
  },
  {
    id: "pit-crew-practice",
    name: "Pit Crew Practice",
    icon: "🔧",
    requires: null,
    unlockReward: "helicopter",
  },
  {
    id: "championship-circuit",
    name: "Championship Circuit",
    icon: "🏆",
    requires: null,
    unlockReward: "ufo-cruiser",
    isBoss: true,
  },
  {
    id: "sunshine-sprint",
    name: "Sunshine Sprint",
    icon: "☀️",
    requires: null,
    unlockReward: "bike-cruiser",
  },
  {
    id: "silver-circuit",
    name: "Silver Circuit",
    icon: "🥈",
    requires: null,
    unlockReward: "silver-tram",
  },
  {
    id: "stardust-street",
    name: "Stardust Street",
    icon: "✨",
    requires: null,
    unlockReward: "star-scooter",
  },
  {
    id: "super-blend-boulevard",
    name: "Super Blend Boulevard",
    icon: "🛤️",
    requires: null,
    unlockReward: "adventure-canoe",
  },
  {
    id: "buzzing-boulevard",
    name: "Buzzing Boulevard",
    icon: "🐝",
    requires: null,
    unlockReward: "speedboat",
  },
  {
    id: "shiny-ship-harbor",
    name: "Shiny Ship Harbor (SH sounds)",
    icon: "🚢",
    requires: null,
    unlockReward: "sail-boat",
  },
  {
    id: "sibilant-circuit",
    name: "Sibilant Circuit",
    icon: "🔄",
    requires: null,
    unlockReward: "sky-tram",
  },
  {
    id: "sentence-central",
    name: "Sentence Central",
    icon: "🏙️",
    requires: null,
    unlockReward: "auto-rickshaw",
  },
  {
    id: "tongue-twister-trail",
    name: "Tongue Twister Trail",
    icon: "🎪",
    requires: null,
    unlockReward: "rocket-ship",
    isBoss: true,
  },
  {
    id: "grand-prix-finale",
    name: "Grand Prix Finale",
    icon: "🎇",
    requires: null,
    unlockReward: "satellite-cruiser",
    isBoss: true,
  },
];

export function getZone(zoneId) {
  return zones.find((z) => z.id === zoneId);
}

// No zone requires another anymore, so this never actually finds anything -
// kept only so celebrationScreen's "what's next" logic degrades gracefully
// instead of needing a special case.
export function nextZone(zoneId) {
  return zones.find((z) => z.requires === zoneId) ?? null;
}
