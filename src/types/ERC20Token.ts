export type ERC20TokenInfo = {
  address: string;
  decimals: string;
  holdersCount: number;
  name: string;
  symbol: string;
  website: string;
  totalSupply: string;
};

export type ERC20Token = {
  balance: number;
  totalIn: number;
  totalOut: number;
  rawBalance: string;
  tokenInfo: ERC20TokenInfo;
};
