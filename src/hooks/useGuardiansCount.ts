import { useCall } from '@usedapp/core';
import { Falsy } from '@usedapp/core/dist/esm/src/model/types';
import ArgentContractAbi from '../blockchain/ArgentContract.json';
import { contractAddress } from '../constants';
import { utils, Contract, BigNumber } from 'ethers';
import { ArgentContract } from '../blockchain/gen/types';

export const useGuardiansCount = (
  account: string | Falsy
): BigNumber | undefined => {
  const tokenAddress: string | Falsy = contractAddress || null;
  const argentInterface = new utils.Interface(ArgentContractAbi);

  const { value: value } =
    useCall(
      account &&
        tokenAddress && {
          contract: new Contract(
            tokenAddress,
            argentInterface
          ) as ArgentContract,
          method: 'guardianCount',
          args: [account],
        }
    ) ?? {};

  return value?.[0];
};
