import React from 'react';
import { Box, Typography } from '@mui/material';
import { ERC20Token } from '../../types';
import { utils } from 'ethers';
import { formatNumber } from '../../utils';

export const Token = ({ token }: { token: ERC20Token }) => {
  const { rawBalance, tokenInfo } = token;
  return (
    <Box sx={{ display: 'flex' }}>
      {tokenInfo?.symbol && (
        <Typography variant='h4' fontWeight='600' style={{ width: '150px' }}>
          {tokenInfo.symbol}
        </Typography>
      )}
      {rawBalance && (
        <Typography variant='h4' fontWeight='500'>
          {formatNumber(utils.formatUnits(rawBalance, tokenInfo.decimals))}
        </Typography>
      )}
    </Box>
  );
};
