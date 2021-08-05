import React, {useRef, useEffect} from 'react';
import {formatDec, formatHex, formatBin} from '../helpers/NumberFormatter';
import {getScreenDataByIndex} from '../helpers/PitfallAlgo';
import {ScreenBG} from '../state/images';

// @ts-ignore
export const ScreenDisplay = props => {
  // const stageData = getScreenDataByIndex(screenIndex);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // @ts-ignore
    const context = canvas.getContext('2d');
    //Our first draw
    context.fillStyle = '#f00';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(ScreenBG, 0, 0);
  }, []);

  return (
    <canvas ref={canvasRef} {...props}>
      Your browser does not support the HTML5 canvas tag.
    </canvas>
  );
};
