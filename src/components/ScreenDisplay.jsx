// TODO: convert this back to TypeScript?
import React, {useRef, useEffect} from 'react';
import {getScreenDataByIndex} from '../helpers/PitfallAlgo';
import {ScreenBG, Vine} from '../images';
import {
  getTreePattern,
  getUnderworld,
  getVine,
  getPathObject,
} from '../helpers/ScreenAnalyser';
import {
  drawToCanvas,
  treePatterns,
  underworldPatterns,
  pathObjectPatterns,
} from '../helpers/CanvasHelpers';
import './ScreenDisplay.css';

export const ScreenDisplay = ({screenIndex}) => {
  const stageData = getScreenDataByIndex(screenIndex);
  const treeIndex = getTreePattern(stageData);
  const underworldType = getUnderworld(stageData);
  const isVine = getVine(stageData);
  const objType = getPathObject(stageData);
  const objImage = pathObjectPatterns[objType];

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    drawToCanvas(ScreenBG, canvas);
    drawToCanvas(treePatterns[treeIndex], canvas);
    drawToCanvas(underworldPatterns[underworldType], canvas);
    drawToCanvas(underworldPatterns[underworldType], canvas);
    if (objImage) {
      drawToCanvas(objImage, canvas);
    }
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
