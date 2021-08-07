// TODO: convert this back to TypeScript?
import React, { useRef, useEffect } from 'react';
import { getScreenDataByIndex } from '../helpers/PitfallAlgo';
import { ScreenBG, Vine } from '../images';
import {
  getTreePattern,
  getUnderworld,
  getVine,
} from '../helpers/ScreenAnalyser';
import {
  drawToCanvas,
  treePatterns,
  underworldPatterns,
} from '../helpers/CanvasHelpers';
import './ScreenDisplay.css';

export const ScreenDisplay = ({ screenIndex }) => {
  const stageData = getScreenDataByIndex(screenIndex);
  const treeIndex = getTreePattern(stageData);
  const underworldType = getUnderworld(stageData);
  const isVine = getVine(stageData);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // const context = canvas.getContext('2d');
    drawToCanvas(ScreenBG, canvas);
    drawToCanvas(treePatterns[treeIndex], canvas);
    drawToCanvas(underworldPatterns[underworldType], canvas);
    if (isVine) {
      drawToCanvas(Vine, canvas);
    }
  }, [screenIndex]);

  return (
    <canvas ref={canvasRef}>
      Your browser does not support the HTML5 canvas tag.
    </canvas>
  );
};
