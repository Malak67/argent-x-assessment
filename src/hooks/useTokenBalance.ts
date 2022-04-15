import { useCall } from '@usedapp/core';
import { Falsy } from '@usedapp/core/dist/esm/src/model/types';
import ERC20TokenAbi from '../blockchain/ERC20TokenContract.json';
import { contractAddress } from '../constants';
import { utils, Contract, BigNumber } from 'ethers';
import { ERC20TokenContract } from '../blockchain/gen/types';

export const useTokenBalance = (
  address: string | Falsy
): BigNumber | undefined => {
  const tokenAddress: string | Falsy = contractAddress || null;
  const ERC20Interface = new utils.Interface(ERC20TokenAbi);

  const { value } =
    useCall(
      address &&
        tokenAddress && {
          contract: new Contract(
            tokenAddress,
            ERC20Interface
          ) as ERC20TokenContract,
          method: 'balanceOf',
          args: [address],
        }
    ) ?? {};
  return value?.[0];
};
