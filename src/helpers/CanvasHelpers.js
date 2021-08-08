import {
  Tree0,
  Tree1,
  Tree2,
  Tree3,
  Wall_S,
  Wall_R,
  Wall_L,
  Gold,
  Silver,
  Money,
  Ring,
  Path1Hole,
  Path3Holes,
  PathCroc,
  PathSand,
  PathTar,
  Obs1Log,
  Obs2LogA,
  Obs2LogC,
  Obs3Log,
  ObsFire,
  ObsSnake,
} from '../images';
import {
  UNDERGROUND_SCORPION,
  UNDERGROUND_WALL_R,
  UNDERGROUND_WALL_L,
  TREASURE_GOLD,
  TREASURE_SILVER,
  TREASURE_MONEY,
  TREASURE_RING,
  OBSTACLE_NONE,
  OBSTACLE_2_A_LOGS,
  OBSTACLE_2_C_LOGS,
  OBSTACLE_R_LOG,
  OBSTACLE_3_R_LOGS,
  OBSTACLE_3_S_LOGS,
  OBSTACLE_FIRE,
  OBSTACLE_SNAKE,
  PIT_1_HOLE,
  PIT_3_HOLES,
  PIT_CROC,
  PIT_QUICK_VINE,
  PIT_SHIFT_QUICK,
  PIT_SHIFT_TAR,
  PIT_TAR_VINE,
  PIT_TREASURE,
  OBSTACLE_S_LOG,
} from '../state/constants';

export const drawToCanvas = (img, canvas) =>
  canvas
    .getContext('2d')
    .drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
export const treePatterns = [Tree0, Tree1, Tree2, Tree3];

export const underworldPatterns = {
  [UNDERGROUND_SCORPION]: Wall_S,
  [UNDERGROUND_WALL_R]: Wall_R,
  [UNDERGROUND_WALL_L]: Wall_L,
};

export const pathObjectPatterns = {
  [TREASURE_GOLD]: Gold,
  [TREASURE_SILVER]: Silver,
  [TREASURE_MONEY]: Money,
  [TREASURE_RING]: Ring,
  [OBSTACLE_NONE]: null,
  [OBSTACLE_R_LOG]: Obs1Log,
  [OBSTACLE_S_LOG]: Obs1Log,
  [OBSTACLE_2_A_LOGS]: Obs2LogA,
  [OBSTACLE_2_C_LOGS]: Obs2LogC,
  [OBSTACLE_3_R_LOGS]: Obs3Log,
  [OBSTACLE_3_S_LOGS]: Obs3Log,
  [OBSTACLE_FIRE]: ObsFire,
  [OBSTACLE_SNAKE]: ObsSnake,
};

export const pitTypePatterns = {
  [PIT_1_HOLE]: Path1Hole,
  [PIT_3_HOLES]: Path3Holes,
  [PIT_CROC]: PathCroc,
  [PIT_QUICK_VINE]: PathSand,
  [PIT_SHIFT_QUICK]: PathSand,
  [PIT_SHIFT_TAR]: PathTar,
  [PIT_TAR_VINE]: PathTar,
  [PIT_TREASURE]: PathTar,
};
