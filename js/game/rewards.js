// `vehicle: true` entries are real cars/vehicles eligible to be shown
// driving on the race track; the decorative ones (flames, trophy) only ever
// appear as garage collectibles.
export const CARS = {
  "red-racer": { name: "Red Racer", emoji: "🚗", vehicle: true },
  "blue-bolt": { name: "Blue Bolt", emoji: "🚙", vehicle: true },
  "turbo-spoiler": { name: "Turbo Spoiler", emoji: "🏎️", vehicle: true },
  "flame-decals": { name: "Flame Decals", emoji: "🔥", vehicle: false },
  "gold-trophy-car": { name: "Gold Trophy Car", emoji: "🏆", vehicle: false },
  "rally-car": { name: "Rally Car", emoji: "🚓", vehicle: true },
  "jungle-buggy": { name: "Jungle Buggy", emoji: "🛻", vehicle: true },
  "choo-choo-train": { name: "Choo-Choo Train", emoji: "🚂", vehicle: true },
  "taxi-cab": { name: "Taxi Cab", emoji: "🚕", vehicle: true },
  "mini-van": { name: "Mini Van", emoji: "🚐", vehicle: true },
  "motorcycle": { name: "Motorcycle", emoji: "🏍️", vehicle: true },
  "monster-tractor": { name: "Monster Tractor", emoji: "🚜", vehicle: true },
  "school-bus": { name: "School Bus", emoji: "🚌", vehicle: true },
  "rescue-ambulance": { name: "Rescue Ambulance", emoji: "🚑", vehicle: true },
  "scooter": { name: "Scooter", emoji: "🛵", vehicle: true },
  "fire-truck": { name: "Fire Truck", emoji: "🚒", vehicle: true },
  "helicopter": { name: "Helicopter", emoji: "🚁", vehicle: true },
  "ufo-cruiser": { name: "UFO Cruiser", emoji: "🛸", vehicle: true },
  "bike-cruiser": { name: "Bike Cruiser", emoji: "🚲", vehicle: true },
  "silver-tram": { name: "Silver Tram", emoji: "🚋", vehicle: true },
  "star-scooter": { name: "Star Scooter", emoji: "🛴", vehicle: true },
  "adventure-canoe": { name: "Adventure Canoe", emoji: "🛶", vehicle: true },
  "speedboat": { name: "Speedboat", emoji: "🚤", vehicle: true },
  "sail-boat": { name: "Sail Boat", emoji: "⛵", vehicle: true },
  "sky-tram": { name: "Sky Tram", emoji: "🚡", vehicle: true },
  "auto-rickshaw": { name: "Auto Rickshaw", emoji: "🛺", vehicle: true },
  "rocket-ship": { name: "Rocket Ship", emoji: "🚀", vehicle: true },
  "satellite-cruiser": { name: "Satellite Cruiser", emoji: "🛰️", vehicle: true },
  "skateboard": { name: "Skateboard", emoji: "🛹", vehicle: true },
  "snow-skis": { name: "Snow Skis", emoji: "🎿", vehicle: true },
  "roller-skates": { name: "Roller Skates", emoji: "🛼", vehicle: true },
  "snowboard": { name: "Snowboard", emoji: "🏂", vehicle: true },
  "hot-air-balloon": { name: "Hot Air Balloon", emoji: "🎈", vehicle: true },
  "car-ferry": { name: "Car Ferry", emoji: "⛴️", vehicle: true },
  "parachute": { name: "Parachute", emoji: "🪂", vehicle: true },
  "pirate-ship": { name: "Pirate Ship", emoji: "🚢", vehicle: true },
  "monorail": { name: "Monorail", emoji: "🚝", vehicle: true },
  "grand-ferris-wheel": { name: "Grand Ferris Wheel", emoji: "🎡", vehicle: true },
};

export function allCarIds() {
  return Object.keys(CARS);
}

// Shows off whatever he most recently unlocked, instead of always the same
// car icon on the track - reinforces that the collection is actually his.
export function currentCarEmoji(unlockedCarIds) {
  if (!unlockedCarIds?.length) return "🏎️";
  for (let i = unlockedCarIds.length - 1; i >= 0; i--) {
    const car = CARS[unlockedCarIds[i]];
    if (car?.vehicle) return car.emoji;
  }
  return "🏎️";
}
