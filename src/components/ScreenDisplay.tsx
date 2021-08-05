import React, { useRef, useEffect } from 'react';
import { getScreenDataByIndex } from '../helpers/PitfallAlgo';
import { ScreenBG, Tree0, Tree1, Tree2, Tree3, Wall_S, Wall_R, Wall_L } from '../images';
import { NumberDisplayProps } from './NumberDisplay';
import { getTreePattern, getUnderworld } from '../helpers/ScreenAnalyser';
import { UNDERGROUND_SCORPION, UNDERGROUND_WALL_R, UNDERGROUND_WALL_L } from '../state/constants';

// @ts-ignore
const drawToCanvas = (img: HTMLImageElement, canvas) =>
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
const treePatterns = [Tree0, Tree1, Tree2, Tree3];
const underworldPatterns: { [id: string]: HTMLImageElement; } = {
  [UNDERGROUND_SCORPION]: Wall_S,
  [UNDERGROUND_WALL_R]: Wall_R,
  [UNDERGROUND_WALL_L]: Wall_L,
}

// @ts-ignore
export const ScreenDisplay = ({ screenIndex }: NumberDisplayProps) => {
  const stageData = getScreenDataByIndex(screenIndex);
  const treeIndex = getTreePattern(stageData);
  const underworldType = getUnderworld(stageData);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // @ts-ignore
    const context = canvas.getContext('2d');
    // @ts-ignore
    drawToCanvas(ScreenBG, canvas);
    drawToCanvas(treePatterns[treeIndex], canvas);
    drawToCanvas(underworldPatterns[underworldType], canvas);
  }, [screenIndex]);

  return (
    <canvas ref={canvasRef} width="800px" height="600px">
      Your browser does not support the HTML5 canvas tag.
    </canvas>
  );
};
