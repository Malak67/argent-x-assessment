import { useEtherBalance } from '@usedapp/core';
import { useGuardiansCount } from '../../hooks';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ethKey } from '../../constants';
import { ERC20Token } from '../../types';

const getTransactions = async (address: string) => {
  const res = await axios.get(
    `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=${ethKey}`
  );
  return res.data
};

export const useWalletEffects = (address: string) => {
  const etherBalance = useEtherBalance(address);
  const guardians = useGuardiansCount(address);
  const [tokens, setTokens] = useState<ERC20Token[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getTransactions(address)
    .then((data) => setTokens(data.tokens))
    .catch((err) => console.error(err))
    .finally(() => setIsLoading(false))
  }, []);

  return {
    etherBalance,
    guardians,
    tokens,
    isLoading,
  };
};
