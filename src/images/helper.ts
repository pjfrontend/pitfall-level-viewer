export const getPNGimage = (b64: string) => {
  const img = new Image();
  img.src = `data:image/png;base64,${b64}`;
  return img;
};
