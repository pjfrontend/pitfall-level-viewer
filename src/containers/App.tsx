import React from 'react';
import './App.css';
import {StageDataPanel} from '../components/StageDataPanel';
import {NumberDisplay} from '../components/NumberDisplay';
import {AtariButton} from '../components/AtariButton';
import {StoreProps, nextLevel} from '../state/Store';
import {observer} from 'mobx-react';

export const App = ({store}: {store: StoreProps}): JSX.Element => {
  const goLeft = () => nextLevel(store, -1);
  const goRight = () => nextLevel(store, 1);

  const NumberDisplayView = observer(() => (
    <NumberDisplay screenIndex={store.screenIndex} />
  ));
  const ButtonView = observer(() => (
    <div className={'buttons-wrapper'}>
      <AtariButton label="< Left" onClick={() => goLeft()} />
      <AtariButton label="> Right" onClick={() => goRight()} />
    </div>
  ));
  const StageDataView = observer(() => (
    <StageDataPanel stageData={store.stageData} />
  ));

  return (
    <div className="App">
      <NumberDisplayView />
      <ButtonView />
      <StageDataView />
    </div>
  );
};
