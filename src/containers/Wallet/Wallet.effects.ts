import { useEtherBalance } from '@usedapp/core';
import { useGuardiansCount } from '../../hooks';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ethKey } from '../../constants';
import { ERC20Token } from '../../types';

export const useWalletEffects = (address: string) => {
  const etherBalance = useEtherBalance(address);
  const guardians = useGuardiansCount(address);
  const [tokens, setTokens] = useState<ERC20Token[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getTransactions = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=${ethKey}`
      );
      setTokens(res.data.tokens);
      setIsLoading(false);
    };
    getTransactions();
  }, []);

  return {
    etherBalance,
    guardians,
    tokens,
    isLoading,
  };
};
