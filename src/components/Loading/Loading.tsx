import React, { FC } from 'react';
import { Paper, CircularProgress, Typography } from '@mui/material';

export const Loading: FC<{ text: string }> = ({ text }) => {
  return (
    <Paper
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        marginTop: '20px',
        marginBottom: '20px',
        padding: '40px',
      }}
    >
      <CircularProgress color='secondary' />
      <Typography variant='h4' color='secondary' mb={3}>
        {text || 'Searching...'}
      </Typography>
    </Paper>
  );
};
