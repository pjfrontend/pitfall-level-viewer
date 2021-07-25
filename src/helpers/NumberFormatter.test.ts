import {formatBin, formatDec, formatHex} from './NumberFormatter';

test('formatHex should display a padded hexadecimal string', () => {
  expect(formatHex(128)).toBe('80');
  expect(formatHex(255)).toBe('FF');
});

test('formatBin should display a padded binary string', () => {
  expect(formatBin(5)).toBe('00000101');
  expect(formatBin(255)).toBe('11111111');
});

test('formatDec should display a padded decimal string', () => {
  expect(formatDec(5)).toBe('005');
  expect(formatDec(255)).toBe('255');
});
