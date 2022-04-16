export const formatNumber = (value: number | string) => {
  return Number(value).toPrecision(6).replace(/0+$/, '');
};
