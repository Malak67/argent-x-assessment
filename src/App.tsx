import React, { FC, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { useGuardiansCount } from './hooks';
import axios from 'axios';
import { defaultAccount, ethKey } from './constants';

const App: FC = () => {
  const etherBalance = useEtherBalance(defaultAccount);
  const guardians = useGuardiansCount(defaultAccount);

  useEffect(() => {
    const getTransactions = async () => {
      const res = await axios.get(
        `https://api.ethplorer.io/getAddressInfo/${defaultAccount}?apiKey=${ethKey}`
      );
      console.log('Tokens: ', res);
    };
    getTransactions();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          {etherBalance && (
            <p>Ether balance: {formatEther(etherBalance)} ETH</p>
          )}
        </div>
        <div>{guardians && <p>Guardians: {guardians?.toNumber()}</p>}</div>
      </header>
    </div>
  );
};

export default App;
