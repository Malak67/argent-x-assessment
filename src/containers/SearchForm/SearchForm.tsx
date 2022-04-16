import React from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import { Wallet } from '../Wallet';
import { useSearchFormEffects } from './SearchForm.effects';

export const SearchForm = () => {
  const { control, handleSubmit, onSubmit, walletAddress } =
    useSearchFormEffects();

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
      <Typography variant='h2' mb={2}>
        Enter your wallet address
      </Typography>
      <form
        style={{ width: '100%' }}
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'start',
            gap: 2,
          }}
        >
          <Box style={{ width: '100%', flex: 1 }}>
            <Controller
              name='address'
              control={control}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <TextField
                  fullWidth
                  label='Wallet Address'
                  variant='outlined'
                  onBlur={onBlur}
                  value={value}
                  onChange={(e) => {
                    onChange(e);
                  }}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Box>
          <Box
            style={{ marginTop: '3px' }}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'start',
            }}
          >
            <Button variant='contained' type='submit' color='primary'>
              Search
            </Button>
          </Box>
        </Box>
      </form>
      {walletAddress && <Wallet walletAddress={walletAddress} />}
    </Paper>
  );
};
