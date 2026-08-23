import type { RaidInstanceEntry, DungeonInstanceEntry } from './types';
import { CONSTANTS } from './constants';

export const getSeasonalDungeons = (): number[] => {
  return CONSTANTS.currentDungeonIDs;
};

export const getMoPDungeons = (): number[] => {
  return [246, 316, 313, 312, 311, 303, 302, 324, 321];
};

export const getSourceName = (instanceID: number, encounterID: number): string => {
  if (instanceID === -1) {
    return (encounterDB['-1'] as DungeonInstanceEntry).Retail[encounterID] ?? '';
  }
  return (encounterDB[instanceID] as RaidInstanceEntry).bosses[encounterID] ?? '';
};

export const getInstanceName = (instanceID: number): string => {
  if (instanceID === -1) return '';
  return (encounterDB[instanceID] as RaidInstanceEntry).name ?? '';
};

export const instanceDB: Record<string, string> = {
  '0': 'Test Instance',
  '-31': 'PVP Season 1 (Conquest)',
  '-30': 'PVP Season 1 (Honor)',
  '-1': 'Dungeons',
  '1320': 'The Venomous Abyss',
  '1317': 'The Tidebound Grotto',
  '1312': 'World Bosses',
  '1314': 'Dreamrift',
  '1307': 'The Voidspire',
  '1308': "March on Quel'Danas",
  '1273': 'Nerub-ar Palace',
  '1296': 'Liberation of Undermine',
  '-4': 'Crafted',
  '-12': 'Reputation',
  '-14': 'Timewalking',
  // Classic specific
  '369': 'Siege of Orgrimmer',
  '362': 'Throne of Thunder',
  '330': 'Heart of Fear',
  '317': "Mogu'shan Vaults",
  '320': 'Terrace of Endless Spring',
  '-5': 'Justice',
  '-6': 'Valor',
  '-8': 'Elemental Rune Twilight',
};

export const craftedDB: Record<number, string> = {
  1: 'Tailoring',
  2: 'Leatherworking',
  3: 'Blacksmithing',
  4: 'Engineering',
  5: 'Inscription',
  6: 'Alchemy',
  7: 'Jewelcrafting',
};

export const reputationDB: Record<number, string> = {
  1: 'Klaxxi',
  2: 'Golden Lotus',
  3: 'Shado-Pan',
  4: 'August Celestials',
};

export const timewalkingDB: Record<number, string> = {
  1: 'Vanilla',
  2: 'Burning Crusade',
  3: 'Wrath of the Lich King',
  4: 'Cataclysm',
  5: 'Mists of Pandaria',
  6: 'Warlords of Draenor',
  7: 'Legion',
};

export const retailInstanceDB: Record<number | '-1', RaidInstanceEntry | DungeonInstanceEntry> = {
  /* --------------------------------- Raids ---------------------------------- */
  1307: {
    name: 'The Voidspire',
    bossOrder: [2733, 2734, 2736, 2735, 2737, 2738],
    bosses: {
      2733: 'Imperator Averzian',
      2734: 'Vorasius',
      2736: 'Fallen-King Salhadaar',
      2735: 'Vaelgor & Ezzorak',
      2737: 'Lightblinded Vanguard',
      2738: 'Crown of the Cosmos',
    },
  },
  1314: {
    name: 'Dreamrift',
    bossOrder: [2795],
    bosses: {
      2795: 'Chimaerus',
    },
  },
  1308: {
    name: "March on Quel'Danas",
    bossOrder: [2739, 2740],
    bosses: {
      2739: "Belo'ren, Child of Al'ar",
      2740: 'Midnight Falls',
    },
  },
  1273: {
    name: "Nerub'ar Palace",
    bossOrder: [2607, 2611, 2599, 2609, 2612, 2601, 2608, 2602, -54],
    bosses: {
      2607: 'Ulgrax the Devourer',
      2611: 'Bloodbound Horror',
      2599: 'Sikran, Captain of the Sureki',
      2609: "Rasha'nan",
      2612: "Broodtwister Ovi'nax",
      2601: "Nexus-Princess Ky'veza",
      2608: 'The Silken Court',
      2602: 'Queen Ansurek',
    },
  },
  1296: {
    name: 'Liberation of Undermine',
    bossOrder: [2639, 2640, 2641, 2642, 2653, 2644, 2645, 2646, 999],
    bosses: {
      2639: 'Vexie and the Geargrinders',
      2640: 'Cauldron of Carnage',
      2641: 'Rik Reverb',
      2642: 'Stix Bunkjunker',
      2653: 'Sprocketmonger Lockenstock',
      2644: 'One Armed Bandit',
      2645: "Mug'zee",
      2646: 'Chrome King Gallywix',
      999: 'BoE Trash Drops & Catalyst',
    },
  },
  1302: {
    name: 'Manaforge Omega',
    bossOrder: [2684, 2686, 2685, 2687, 2688, 2747, 2690, 2691, 999],
    bosses: {
      2684: 'Plexus Sentinel',
      2686: 'Loomithar',
      2685: 'Soulbinder Naazindhri',
      2687: 'Forgeweaver Araz',
      2688: 'Soul Hunters',
      2747: 'Fractillus',
      2690: 'Nexus King',
      2691: 'Dimensius the All-Devouring',
      999: 'BoE Trash Drops & Catalyst',
    },
  },
  1317: {
    name: 'The Tidebound Grotto',
    bossOrder: [2888, 2874, 2894, 2882, 2871, 2887, 2883, 2895],
    bosses: {
      2888: 'Nek\'zali the Soulcoiler',
      2874: 'Entombed Sentinels',
      2894: 'The Lost Explorers',
      2882: 'Vashnik the Malignant',
      2871: 'Sszorak',
      2887: 'The Twin Fangs',
      2883: 'The Coiled Altar',
      2895: 'Ula\'tek',
    },
  },
  1320: {
    name: 'The Venomous Abyss',
    bossOrder: [2850],
    bosses: {
      2850: 'Viperis',
    },
  },
  /* -------------------------------- Dungeons -------------------------------- */
  '-1': {
    Retail: {
      bossOrder: [],
      bossOrderMythicPlus: [1313, 1309, 1030, 1202, 1304, 1041, 1311, 1322],
      1313: "Voidscar Arena",
      1309: "The Blinding Vale",
      1030: "Temple of Sethraliss",
      1202: "Ruby Life Pools",
      1304: "Murder Row",
      1041: "Kings' Rest",
      1311: "Den of Nalorakk",
      1322: "Altar of Fangs"
    },
    Classic: {
      bossOrder: [],
      bossOrderMythicPlus: [246, 316, 313, 312, 311, 303, 302, 324, 321],
      246: 'Scholomance',
      316: 'Scarlet Monastery',
      313: 'Temple of the Jade Serpent',
      312: 'Shadowpan Monastery',
      311: 'Scarlet Halls',
      303: 'Gate of the Setting Sun',
      302: 'Stormstout Brewery',
      324: 'Siege of Niuzao Temple',
      321: "Mogu'shan Palace",
    },
  },
};

const classicInstanceDB: Record<number, RaidInstanceEntry> = {
  317: {
    name: 'Mogushan Vaults',
    bossOrder: [679, 689, 682, 687, 726, 677],
    bosses: {
      679: 'The Stone Guard',
      689: 'Feng the Accursed',
      682: "Gara'jal the Spiritbinder",
      687: 'Spirit Kings',
      726: 'Elegon',
      677: 'Will of the Emperor',
    },
  },
  330: {
    name: 'Heart of Fear',
    bossOrder: [745, 744, 713, 741, 737, 743],
    bosses: {
      745: "Imperial Vizier Zor'lok",
      744: "Blade Lord Ta'yak",
      713: 'Garalon',
      741: "Wind Lord Mel'jarak",
      737: "Amber-Shaper Un'sok",
      743: "Grand Empress Shek'zeer",
    },
  },
  320: {
    name: 'Terrace of Endless Spring',
    bossOrder: [683, 742, 729, 709],
    bosses: {
      683: 'Protectors of the Endless',
      742: 'Tsulong',
      729: 'Lei Shi',
      709: 'Sha of Fear',
    },
  },
  362: {
    name: 'Throne of Thunder',
    bossOrder: [816, 817, 818, 819, 820, 821, 824, 825, 827, 828, 829, 831, 832],
    bosses: {
      816: 'Council of Elders',
      817: 'Iron Qon',
      818: 'Durumu the Forgotten',
      819: 'Horridon',
      820: 'Primordius',
      821: 'Megaera',
      824: 'Dark Animus',
      825: 'Tortos',
      827: "Jin'rokh the Breaker",
      828: 'Ji-Kun',
      829: 'Twin Empyreans',
      831: 'Ra-den',
      832: 'Lei Shen',
    },
  },
};

export const encounterDB: Record<number | '-1', RaidInstanceEntry | DungeonInstanceEntry> = {
  ...classicInstanceDB,
  ...retailInstanceDB,
};
