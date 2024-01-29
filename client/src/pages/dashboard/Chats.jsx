import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';

const Chats = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: 320,
        backgroundColor: '#F8faff',
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack direction={''} alignItems={''}>
        <Typography variant='h3'>Chats</Typography>
        <IconButton></IconButton>
      </Stack>
    </Box>
  );
};

export default Chats;
