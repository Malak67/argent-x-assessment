import { utils } from 'ethers';

export const formatBigNumber = (
  value: number | string,
  decimals: number | string = 18,
  precision = 2
): string => {
  return Number(utils.formatUnits(value, decimals)).toFixed(precision);
};
