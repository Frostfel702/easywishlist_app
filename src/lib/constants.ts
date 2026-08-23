import type { ItemQuality, TierName } from './types';

interface AppConstants {
  dpsValue: number;
  allyStatWeight: number;
  allyDPSPerPoint: number; // Unused
  difficulties: {
    LFR: 0;
    LFRMax: 1;
    normal: 2;
    normalMax: 3;
    heroic: 4;
    heroicMax: 5;
    mythic: 6;
    mythicMax: 7;
  };
  socketSlots: string[];
  seasonalItemConversion: number;
  currentRaidIDs: number[];
  currentDungeonIDs: number[];
  fullItemLevels: number[];
  itemLevelCaps: Record<TierName, number>;
  bossNPCIDs: Record<number, number>; // Unused
  dungeonZoneIDs: Record<number, number>; // Unused
  seasonID: number;
  specs: string[];
  classicSpecs: string[];
  qualityColors: Record<ItemQuality, string>;
}

export const CONSTANTS: AppConstants = {
  dpsValue: 1, // In dungeon settings
  allyStatWeight: 0.43,
  allyDPSPerPoint: (0.43 / 2000) * 30000, // Unused
  difficulties: {
    LFR: 0,
    LFRMax: 1,
    normal: 2,
    normalMax: 3,
    heroic: 4,
    heroicMax: 5,
    mythic: 6,
    mythicMax: 7,
  },
  socketSlots: ['Head', 'Neck', 'Wrist', 'Finger', 'Waist'],
  seasonalItemConversion: 12, // 6 = S2, 7 = S3, 8 = ??, 9 = S4. This value is used to determine if an item can be catalyzed.
  currentRaidIDs: [1320, 1317], // This should be an array even with one raid. This value is used in various array specific functions.
  currentDungeonIDs: [1313, 1309, 1030, 1202, 1304, 1041, 1311, 1322],
  fullItemLevels: [
    200, 203, 206, 210, 214, 217, 220, 224, 227, 230, 233, 237, 240, 243, 246, 250, 253, 256, 259,
    263, 266, 269, 272, 276, 279, 282, 285, 289, 292, 295, 298, 302, 305, 308, 311, 315, 318, 321, 324, 328, 331, 334,
  ],
  itemLevelCaps: {
    Explorer: 269,
    Adventurer: 282,
    Veteran: 295,
    Champion: 308,
    Hero: 321,
    Myth: 334,
    'Runed Crafted': 318,
    'Gilded Crafted': 331,
  },
  bossNPCIDs: {
    // Unused
    2639: 225821, // Vexie and the Geargrinders
    2640: 229177, // Cauldron of Carnage
    2641: 228652, // Rik Reverb
    2642: 230322, // Stix Bunkjunker
    2653: 230583, // Sprocketmonger Lockenstock
    2644: 228458, // One Armed Bandit
    2645: 229953, // Mug'Zee
    2646: 237194, // Chrome King Gallywix
  },
  dungeonZoneIDs: {
    // Unused
    1210: 14882, // Darkflame Cleft
    1272: 15103, // Cinderbrew Meadery
    1268: 14938, // The Rookery
    1267: 14954, // Priory
    1012: 8064, // The Motherlode
    1178: 10225, // Workshop
    1298: 15452, // Operation Floodgate
    1187: 12841, // Theater of Pain
  },
  seasonID: 34,
  specs: [
    'Holy Paladin',
    'Restoration Druid',
    'Preservation Evoker',
    'Discipline Priest',
    'Holy Priest',
    'Restoration Shaman',
    'Mistweaver Monk',
  ],
  classicSpecs: [
    'Restoration Druid Classic',
    'Holy Paladin Classic',
    'Discipline Priest Classic',
    'Holy Priest Classic',
    'Restoration Shaman Classic',
    'Mistweaver Monk Classic',
  ],
  qualityColors: {
    3: '#328CE3',
    4: '#a73fee',
    5: '#ff8000', // Legendary
    6: '#e6cc80', // Artifact
  },
};

// Currently unused. Might use later.
export const SEASONALCONSTS = {};
