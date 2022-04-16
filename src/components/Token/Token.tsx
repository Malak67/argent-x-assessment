import React from 'react';
import { Box, Typography } from '@mui/material';
import { ERC20Token, ERC20TokenInfo } from '../../types';
import { formatBigNumber } from '../../utils';

export const Token = ({
  symbol,
  rawBalance,
  decimals,
}: Pick<ERC20Token, 'rawBalance'> &
  Pick<ERC20TokenInfo, 'symbol' | 'decimals'>) => (
  <Box sx={{ display: 'flex' }}>
    <Typography variant='h4' fontWeight='600' style={{ width: '150px' }}>
      {symbol}
    </Typography>
    <Typography variant='h4' fontWeight='500'>
      {formatBigNumber(rawBalance, decimals)}
    </Typography>
  </Box>
);
