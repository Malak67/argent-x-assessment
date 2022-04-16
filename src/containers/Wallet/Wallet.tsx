import React from 'react';
import { formatEther } from '@ethersproject/units';
import { Box, Typography } from '@mui/material';
import { ERC20Token } from '../../types';
import { Loading, Token } from '../../components';
import { useWalletEffects } from './Wallet.effects';

export const Wallet = ({ walletAddress }: { walletAddress: string }) => {
  const { etherBalance, guardians, tokens, isLoading } =
    useWalletEffects(walletAddress);

  if (isLoading) {
    return <Loading text='Searching Tokens for Wallet...' />;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }} my={3}>
      {etherBalance && (
        <Box>
          <Typography variant='h4'>Wallet Balance</Typography>
          <Typography variant='h3' fontWeight='600'>
            {formatEther(etherBalance)} ETH
          </Typography>
        </Box>
      )}
      <Box>
        <Typography variant='h4'>Number of guardians</Typography>
        <Typography variant='h3' fontWeight='600'>
          {guardians || 0}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h4' mb={1}>
          ERC20 tokens
        </Typography>
        {tokens?.map(
          (token: ERC20Token, index: number) =>
            token.rawBalance &&
            token.tokenInfo.symbol &&
            token.tokenInfo.decimals && (
              <Box
                key={`token-${token.tokenInfo.name}-${token.tokenInfo.symbol}-${token.rawBalance}-${index}`}
              >
                <Token
                  rawBalance={token.rawBalance}
                  symbol={token.tokenInfo.symbol}
                  decimals={token.tokenInfo.decimals}
                />
              </Box>
            )
        )}
      </Box>
    </Box>
  );
};
