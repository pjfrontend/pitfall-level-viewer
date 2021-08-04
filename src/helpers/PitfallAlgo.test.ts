import {
  left_random,
  right_random,
  getScreenDataByIndex,
  wrapAroundScreenIndex,
} from './PitfallAlgo';
import {SCREEN_DATA_001, SCREEN_DATA_255} from '../state/constants';

test('Going left should return the correct result', () => {
  expect(left_random(SCREEN_DATA_001)).toBe(SCREEN_DATA_255);
});

test('Going right should return the correct result', () => {
  expect(right_random(SCREEN_DATA_255)).toBe(SCREEN_DATA_001);
});

test('Zero should only return zero', () => {
  expect(left_random(0)).toBe(0);
  expect(right_random(0)).toBe(0);
});

test('Should wrap around a given index', () => {
  expect(wrapAroundScreenIndex(1)).toBe(1);
  expect(wrapAroundScreenIndex(256)).toBe(1);
  expect(wrapAroundScreenIndex(0)).toBe(255);
});

test('Should get the correct data from a given index', () => {
  expect(getScreenDataByIndex(1)).toBe(SCREEN_DATA_001);
  expect(getScreenDataByIndex(255)).toBe(SCREEN_DATA_255);
  expect(getScreenDataByIndex(128)).toBe(0b01000101);
  expect(getScreenDataByIndex(138)).toBe(0b10101001);
});
