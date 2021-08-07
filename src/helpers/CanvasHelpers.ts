import {Tree0, Tree1, Tree2, Tree3, Wall_S, Wall_R, Wall_L} from '../images';
import {
  UNDERGROUND_SCORPION,
  UNDERGROUND_WALL_R,
  UNDERGROUND_WALL_L,
} from '../state/constants';

// @ts-ignore
export const drawToCanvas = (img: HTMLImageElement, canvas) =>
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

export const underworldPatterns: {[id: string]: HTMLImageElement} = {
  [UNDERGROUND_SCORPION]: Wall_S,
  [UNDERGROUND_WALL_R]: Wall_R,
  [UNDERGROUND_WALL_L]: Wall_L,
};
