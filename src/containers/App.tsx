import React, {useState} from 'react';
import {
  left_random,
  right_random,
  wrapAroundScreenIndex,
} from '../helpers/PitfallAlgo';
import './App.css';
import {StageDataPanel} from '../components/StageDataPanel';
import {NumberDisplay} from '../components/NumberDisplay';

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
      <p>
        <button onClick={() => goLeft()}>left</button>
        <button onClick={() => goRight()}>right</button>
      </p>
      <StageDataPanel stageData={stageData} />
    </div>
  );
};
