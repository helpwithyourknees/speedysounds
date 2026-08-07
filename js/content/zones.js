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
    requires: "starter-straightaway",
    unlockReward: "blue-bolt",
  },
  {
    id: "blend-bridge",
    name: "Blend Bridge",
    icon: "🌉",
    requires: "sibilant-speedway",
    unlockReward: "turbo-spoiler",
  },
  {
    id: "sentence-summit",
    name: "Sentence Summit",
    icon: "⛰️",
    requires: "blend-bridge",
    unlockReward: "flame-decals",
  },
  {
    id: "twister-turnpike-boss",
    name: "Twister Turnpike (Boss!)",
    icon: "🏆",
    requires: "sentence-summit",
    unlockReward: "gold-trophy-car",
    isBoss: true,
  },
  {
    id: "bonus-road",
    name: "Bonus Road (R sounds)",
    icon: "🎁",
    requires: null,
    optional: true,
    unlockReward: "rally-car",
  },
  {
    id: "jungle-junction",
    name: "Jungle Junction (J sounds)",
    icon: "🌴",
    requires: null,
    optional: true,
    unlockReward: "jungle-buggy",
  },
  {
    id: "cheetah-chase",
    name: "Cheetah Chase (CH sounds)",
    icon: "🐆",
    requires: null,
    optional: true,
    unlockReward: "choo-choo-train",
  },
  {
    id: "speedy-s-sprint",
    name: "Speedy S Sprint",
    icon: "🏎️",
    requires: "twister-turnpike-boss",
    unlockReward: "taxi-cab",
  },
  {
    id: "zebra-zone",
    name: "Zebra Zone",
    icon: "🦓",
    requires: "speedy-s-sprint",
    unlockReward: "mini-van",
  },
  {
    id: "rally-rabbit-road",
    name: "Rally Rabbit Road",
    icon: "🐇",
    requires: "zebra-zone",
    unlockReward: "motorcycle",
  },
  {
    id: "jungle-jamboree",
    name: "Jungle Jamboree",
    icon: "🌺",
    requires: "rally-rabbit-road",
    unlockReward: "monster-tractor",
  },
  {
    id: "chatterbox-chase",
    name: "Chatterbox Chase",
    icon: "🐯",
    requires: "jungle-jamboree",
    unlockReward: "school-bus",
  },
  {
    id: "mixed-up-motorway",
    name: "Mixed-Up Motorway",
    icon: "🚦",
    requires: "chatterbox-chase",
    unlockReward: "rescue-ambulance",
  },
  {
    id: "silly-sentence-speedway",
    name: "Silly Sentence Speedway",
    icon: "😄",
    requires: "mixed-up-motorway",
    unlockReward: "scooter",
  },
  {
    id: "twister-town",
    name: "Twister Town",
    icon: "🌀",
    requires: "silly-sentence-speedway",
    unlockReward: "fire-truck",
    isBoss: true,
  },
  {
    id: "pit-crew-practice",
    name: "Pit Crew Practice",
    icon: "🔧",
    requires: "twister-town",
    unlockReward: "helicopter",
  },
  {
    id: "championship-circuit",
    name: "Championship Circuit",
    icon: "🏆",
    requires: "pit-crew-practice",
    unlockReward: "ufo-cruiser",
    isBoss: true,
  },
];

export function getZone(zoneId) {
  return zones.find((z) => z.id === zoneId);
}

// Finds whichever zone explicitly requires this one, rather than assuming
// array-adjacency - required so the optional bonus zones (which sit
// interleaved in this list and require nothing) don't break the chain
// between sequential zones around them.
export function nextZone(zoneId) {
  return zones.find((z) => z.requires === zoneId) ?? null;
}
