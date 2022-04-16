import React from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import argentLogo from '../../assets/argentLogo.svg';
import argentName from '../../assets/argentName.svg';

export const MainLayout = () => (
  <div className='gradient-bg'>
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '4px',
      }}
      pt={5}
    >
      <img src={argentLogo} alt='Argent Logo' />
      <img src={argentName} alt='Argent Name' />
    </Box>
    <Container>
      <Outlet />
    </Container>
  </div>
);
