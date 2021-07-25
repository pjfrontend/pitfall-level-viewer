import React, {useState} from 'react';
import {
  left_random,
  right_random,
  wrapAroundScreenIndex,
} from '../helpers/PitfallAlgo';
import './App.css';
import {StageDataPanel} from '../components/StageDataPanel';
import {NumberDisplay} from '../components/NumberDisplay';
import {AtariButton} from '../components/AtariButton';

export const App = (): JSX.Element => {
  const [stageData, setStageData] = useState(0xc4);
  const [screenIndex, setScreenIndex] = useState(1);

  const nextLevel = (
    newScreenIndex: number,
    nextFn: (value: number) => number
  ): void => {
    setStageData(nextFn(stageData));
    setScreenIndex(wrapAroundScreenIndex(newScreenIndex));
  };
  const goLeft = () => nextLevel(screenIndex - 1, left_random);
  const goRight = () => nextLevel(screenIndex + 1, right_random);

  return (
    <div className="App">
      <NumberDisplay screenIndex={screenIndex} />
      <div className={'buttons-wrapper'}>
        <AtariButton label="< Left" onClick={() => goLeft()} />
        <AtariButton label="> Right" onClick={() => goRight()} />
      </div>
      <StageDataPanel stageData={stageData} />
    </div>
  );
};
