import React from 'react';
import {formatDec, formatHex, formatBin} from '../helpers/NumberFormatter';
import {getScreenDataByIndex} from '../helpers/PitfallAlgo';
import './NumberDisplay.css';

export interface NumberDisplayProps {
  screenIndex: number;
}

export const NumberDisplay = ({
  screenIndex,
}: NumberDisplayProps): JSX.Element => {
  const stageData = getScreenDataByIndex(screenIndex);
  return (
    <div>
      <p data-testid="scr" className="screen-title">
        Screen # {formatDec(screenIndex)}
      </p>
      <p data-testid="dec">Decimal: {formatDec(stageData)}</p>
      <p data-testid="hex">Hexadecimal: {formatHex(stageData)}</p>
      <p data-testid="bin">Binary: {formatBin(stageData)}</p>
    </div>
  );
};
