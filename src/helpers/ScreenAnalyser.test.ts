import {
  getPathObject,
  getPitType,
  getTreePattern,
  getUnderworld,
  getVine,
} from './ScreenAnalyser';
import {
  PIT_SHIFT_QUICK,
  PIT_TREASURE,
  UNDERGROUND_WALL_L,
  UNDERGROUND_WALL_R,
  UNDERGROUND_SCORPION,
  OBSTACLE_SNAKE,
  OBSTACLE_FIRE,
  TREASURE_SILVER,
} from '../state/constants';

test('getUnderworld should get the correct wall', () => {
  expect(getUnderworld(0b00000110)).toBe(UNDERGROUND_WALL_L);
  expect(getUnderworld(0b11000100)).toBe(UNDERGROUND_WALL_R);
  expect(getUnderworld(0b00011001)).toBe(UNDERGROUND_SCORPION);
});

test('getPitType should get the correct scene', () => {
  expect(getPitType(0b00111000)).toBe(PIT_SHIFT_QUICK);
  expect(getPitType(0b00101000)).toBe(PIT_TREASURE);
});

test('getPathObject should get the correct object', () => {
  expect(getPathObject(0b01000111)).toBe(OBSTACLE_SNAKE);
  expect(getPathObject(0b10001110)).toBe(OBSTACLE_FIRE);
  expect(getPathObject(0b11101101)).toBe(TREASURE_SILVER);
});

test('getTreePattern should get the correct tree pattern', () => {
  expect(getTreePattern(0b11000000)).toBe(3);
  expect(getTreePattern(0b10000000)).toBe(2);
});

test('getVine should return correct results', () => {
  expect(getVine(0b11100010)).toBe(true);
  expect(getVine(0b10100000)).toBe(false);
  expect(getVine(0b00100111)).toBe(true);
  expect(getVine(0b10100001)).toBe(false);
});
