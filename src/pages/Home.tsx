import React, { FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { SearchForm } from '../containers';
import { Mainnet, useEthers } from '@usedapp/core';

export const Home: FC = () => {
  const { chainId } = useEthers();

  if (chainId !== Mainnet.chainId) {
    return (
      <Paper
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          borderRadius: '0',
          marginTop: '20px',
          marginBottom: '20px',
          padding: '40px',
        }}
      >
        <Typography
          color='primary'
          variant='h2'
          align='center'
          width={'100%'}
        >
          You must be connected to Mainnet in order to proceed!
        </Typography>
      </Paper>
    );
  }
  return (
    <Box>
      <SearchForm />
    </Box>
  );
};
