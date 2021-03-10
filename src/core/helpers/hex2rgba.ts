const hex2rgba = (hex: string, alpha = 1) => {
  const [r, g, b] = (hex.match(/\w\w/g) as RegExpMatchArray).map((x) =>
    parseInt(x, 16)
  );
  return `rgba(${r},${g},${b},${alpha})`;
};

export default hex2rgba;
