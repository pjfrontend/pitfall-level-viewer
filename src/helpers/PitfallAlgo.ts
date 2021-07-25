import {MASK_1_BYTE, SCREEN_DATA_001} from './constants';

export const left_random = (value: number): number => {
  let r = value & MASK_1_BYTE;
  const t = (r >> 6) ^ (r >> 5) ^ (r >> 4) ^ r;
  r >>= 1;
  r |= t << 7;
  return r & MASK_1_BYTE;
};

export const right_random = (value: number): number => {
  let r = value & MASK_1_BYTE;
  const t = (r >> 7) ^ (r >> 5) ^ (r >> 4) ^ (r >> 3);
  r <<= 1;
  r |= t & 1;
  return r & MASK_1_BYTE;
};

export const wrapAroundScreenIndex = (value: number): number => {
  if (value < 1) {
    return 255;
  } else if (value > 255) {
    return 1;
  }
  return value;
};

export const getScreenDataByIndex = (value: number): number => {
  const formattedIndex = wrapAroundScreenIndex(value);
  let index = 1;
  let data = SCREEN_DATA_001;
  while (index < formattedIndex) {
    data = right_random(data);
    index += 1;
  }
  return data;
};
