import {observable, action} from 'mobx';
import {SCREEN_DATA_001} from './constants';
import {
  wrapAroundScreenIndex,
  right_random,
  left_random,
} from '../helpers/PitfallAlgo';

export interface StoreProps {
  stageData: number;
  screenIndex: number;
}

export const initialStore: StoreProps = {
  stageData: SCREEN_DATA_001,
  screenIndex: 1,
};

export const store: StoreProps = observable({...initialStore});

export const nextLevel = action(
  (state: StoreProps, newScreenIndex: number): void => {
    const nextFn: (value: number) => number =
      newScreenIndex > 0 ? right_random : left_random;
    state.stageData = nextFn(state.stageData);
    state.screenIndex = wrapAroundScreenIndex(
      state.screenIndex + newScreenIndex
    );
  }
);
