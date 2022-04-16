import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import { ERC20Token } from '../../types';
import { utils } from 'ethers';
import { formatNumber } from '../../utils';

export const Token: FC<ERC20Token> = ({ rawBalance, tokenInfo }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {tokenInfo?.symbol && (
        <Typography variant='h4' fontWeight='600' style={{ width: '150px'}}>{tokenInfo.symbol}</Typography>
      )}
      {rawBalance && (
        <Typography variant='h4' fontWeight='500'>
          {formatNumber(utils.formatEther(rawBalance.toString()))}
        </Typography>
      )}
    </Box>
  );
};
