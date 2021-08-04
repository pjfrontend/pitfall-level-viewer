export const MASK_1_BIT = 0b1;
export const MASK_2_BIT = 0b11;
export const MASK_3_BIT = 0b111;
export const MASK_1_BYTE = 0xff;

export const TREASURE_MONEY = 'Money bag';
export const TREASURE_SILVER = 'Silver brick';
export const TREASURE_GOLD = 'Gold brick';
export const TREASURE_RING = 'Diamond ring';

export const PIT_1_HOLE = 'Hole with ladder';
export const PIT_3_HOLES =
  'Hole with ladder surrounded by 2 holes without ladders';
export const PIT_TAR_VINE = 'Tar pit with vine';
export const PIT_QUICK_VINE = 'Quicksand with vine';
export const PIT_CROC = 'Crocodile pit'; // plus a vine if bit-1 is 1
export const PIT_TREASURE = 'Shifting tar pit with treasure';
export const PIT_SHIFT_TAR = 'Shifting tar pit with vine';
export const PIT_SHIFT_QUICK = 'Shifting quicksand';

export const UNDERGROUND_SCORPION = 'Scorpion';
export const UNDERGROUND_WALL_R = 'Wall on the right';
export const UNDERGROUND_WALL_L = 'Wall on the left';

export const OBSTACLE_R_LOG = '1 rolling log';
export const OBSTACLE_2_C_LOGS = '2 rolling logs close together';
export const OBSTACLE_2_A_LOGS = '2 rolling logs spaced apart';
export const OBSTACLE_3_R_LOGS = '3 rolling logs';
export const OBSTACLE_S_LOG = '1 stationary log';
export const OBSTACLE_3_S_LOGS = '3 stationary logs';
export const OBSTACLE_FIRE = 'Fire';
export const OBSTACLE_SNAKE = 'Rattlesnake';
export const OBSTACLE_NONE = 'No obstacles';

export const SCREEN_DATA_001 = 0xc4;
export const SCREEN_DATA_255 = 0xe2;

export const PIT_TYPES = [
  PIT_1_HOLE,
  PIT_3_HOLES,
  PIT_TAR_VINE,
  PIT_QUICK_VINE,
  PIT_CROC,
  PIT_TREASURE,
  PIT_SHIFT_TAR,
  PIT_SHIFT_QUICK,
];

export const PATH_OBJECTS = [
  OBSTACLE_R_LOG,
  OBSTACLE_2_C_LOGS,
  OBSTACLE_2_A_LOGS,
  OBSTACLE_3_R_LOGS,
  OBSTACLE_S_LOG,
  OBSTACLE_3_S_LOGS,
  OBSTACLE_FIRE,
  OBSTACLE_SNAKE,
];

export const TREASURES = [
  TREASURE_MONEY,
  TREASURE_SILVER,
  TREASURE_GOLD,
  TREASURE_RING,
];
