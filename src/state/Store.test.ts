import {initialStore, StoreProps, nextLevel} from './Store';
import {SCREEN_DATA_001, SCREEN_DATA_255} from './constants';

describe('Store', () => {
  let store: StoreProps;
  beforeEach(() => {
    store = {...initialStore};
  });

  it('goes left', () => {
    expect(store.screenIndex).toBe(1);
    expect(store.stageData).toBe(SCREEN_DATA_001);
    nextLevel(store, -1);
    expect(store.screenIndex).toBe(255);
    expect(store.stageData).toBe(SCREEN_DATA_255);
  });

  it('goes right', () => {
    expect(store.screenIndex).toBe(1);
    expect(store.stageData).toBe(SCREEN_DATA_001);
    nextLevel(store, 1);
    expect(store.screenIndex).toBe(2);
    expect(store.stageData).toBe(137);
  });
});
