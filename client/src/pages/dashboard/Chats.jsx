import React from 'react';
import {
  Box,
  Stack,
  Typography,
  IconButton,
  styled,
  alpha,
} from '@mui/material';
import { CircleDashed } from 'phosphor-react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({}));
const StyledInputBase = styled('div')(({ theme }) => ({}));

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
      <Stack p={3}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Typography variant='h3'>Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
