const pad = (value: string, length: number): string => {
  let str = value;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
};

export const formatHex = (value: number): string => {
  return pad(value.toString(16).toUpperCase(), 2);
};

export const formatBin = (value: number): string => {
  return pad(value.toString(2), 8);
};

export const formatDec = (value: number): string => {
  return pad(value.toString(), 3);
};
