import { formatEther } from '@ethersproject/units';
import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import { ERC20Token } from '../../types';
import { Loading, Token } from '../../components';
import { useWalletEffects } from './Wallet.effects';

export const Wallet: FC<{ walletAddress: string }> = ({ walletAddress }) => {
  const { etherBalance, guardians, tokens, isLoading } =
    useWalletEffects(walletAddress);

  if (isLoading) {
    return <Loading text='Searching Tokens for Wallet...' />;
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }} my={3}>
      {etherBalance && (
        <Box>
          <Typography variant='h4'>Wallet Balance</Typography>
          <Typography variant='h3' fontWeight='600'>
            {formatEther(etherBalance)} ETH
          </Typography>
        </Box>
      )}
      {guardians && (
        <Box>
          <Typography variant='h4'>Number of guardians</Typography>
          <Typography variant='h3' fontWeight='600'>
            {guardians?.toNumber()}
          </Typography>
        </Box>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h3' mb={2}>
          ERC20 tokens
        </Typography>
        {tokens?.length &&
          tokens.map((token: ERC20Token, index: number) => {
            return (
              <Box
                key={`token-${token.tokenInfo.name}-${token.tokenInfo.symbol}-${token.rawBalance}-${index}`}
              >
                <Token {...token} />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};
