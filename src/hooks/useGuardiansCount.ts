import { useCall } from '@usedapp/core';
import { Falsy } from '@usedapp/core/dist/esm/src/model/types';
import ArgentContractAbi from '../blockchain/ArgentContract.json';
import { contractAddress } from '../constants';
import { utils, Contract } from 'ethers';
import { ArgentContract } from '../blockchain/gen/types';

export const useGuardiansCount = (
  account: string | Falsy
): number | undefined => {
  const tokenAddress: string | Falsy = contractAddress || null;
  const argentInterface = new utils.Interface(ArgentContractAbi);

  const { value: returnedArgs } =
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

  return returnedArgs?.[0]?.toNumber();
};
