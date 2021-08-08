import {
  MASK_1_BIT,
  MASK_2_BIT,
  MASK_3_BIT,
  PIT_1_HOLE,
  PIT_3_HOLES,
  PIT_TAR_VINE,
  PIT_QUICK_VINE,
  PIT_TREASURE,
  PIT_CROC,
  UNDERGROUND_SCORPION,
  UNDERGROUND_WALL_R,
  UNDERGROUND_WALL_L,
  OBSTACLE_NONE,
  PIT_TYPES,
  TREASURES,
  PATH_OBJECTS,
} from '../state/constants';

export const getPitType = (value: number): string => {
  const wallMask = (value >> 3) & MASK_3_BIT;
  return PIT_TYPES[wallMask];
};

export const isTreasureScene = (value: number): boolean => {
  return getPitType(value) === PIT_TREASURE;
};

export const isPathObject = (value: number): boolean => {
  const pit = getPitType(value);
  return pit !== PIT_CROC;
};

export const isWall = (value: number): boolean => {
  const pit = getPitType(value);
  return pit === PIT_1_HOLE || pit === PIT_3_HOLES;
};

export const getUnderworld = (value: number): string => {
  if (!isWall(value)) {
    return UNDERGROUND_SCORPION;
  }
  return (value >> 7) & MASK_1_BIT ? UNDERGROUND_WALL_R : UNDERGROUND_WALL_L;
};

export const getPathObject = (value: number): string => {
  const wallMask = value & MASK_3_BIT;

  if (!isPathObject(value)) {
    return OBSTACLE_NONE;
  }

  if (isTreasureScene(value)) {
    return TREASURES[wallMask % TREASURES.length];
  }

  return PATH_OBJECTS[wallMask];
};

export const getTreePattern = (value: number): number => {
  return (value >> 6) & MASK_2_BIT;
};

export const getVine = (value: number): boolean => {
  const pit = getPitType(value);
  if (pit === PIT_TAR_VINE || pit === PIT_QUICK_VINE) {
    return true;
  }
  if (pit === PIT_CROC) {
    return !!((value >> 1) & MASK_1_BIT);
  }

  return false;
};
