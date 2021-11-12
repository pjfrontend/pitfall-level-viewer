import React from 'react';
import {
  getPitType,
  getPathObject,
  getUnderworld,
  getVine,
  getTreePattern,
} from '../helpers/ScreenAnalyser';

export interface StageDataPanelProps {
  stageData?: number;
}

export const StageDataPanel = ({
  stageData,
}: StageDataPanelProps): JSX.Element => {
  return (
    <div>
      <p data-testid="pit-type">Pit Type: {getPitType(stageData)}</p>
      <p data-testid="path-obj">Path Objects: {getPathObject(stageData)}</p>
      <p data-testid="underworld">Underworld: {getUnderworld(stageData)}</p>
      <p data-testid="is-vine">Vine: {`${getVine(stageData)}`}</p>
      <p data-testid="tree-pat">Tree Pattern: {getTreePattern(stageData)}</p>
    </div>
  );
};
