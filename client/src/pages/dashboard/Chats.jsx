import React from 'react';
import {
  Box,
  Stack,
  Typography,
  IconButton,
  InputBase,
  Button,
  Divider,
  Avatar,
  Badge,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { CircleDashed } from 'phosphor-react';
import { MagnifyingGlass, ArchiveBox } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import { ChatList } from '../../data/index';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 1,
        backgroundColor: '#fff',
      }}
      p={2}
      my={1}
    >
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
          {online ? (
            <StyledBadge
              overlap='circular'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant='dot'
            >
              <Avatar src={img} />
            </StyledBadge>
          ) : (
            <Avatar src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography variant='subtitle2'>{name}</Typography>
            <Typography variant='caption'>{msg}</Typography>
          </Stack>
        </Stack>
        <Stack direction={'column'} alignItems={'center'} spacing={2}>
          <Typography sx={{ fontWeight: 600 }} variant='caption'>
            {time}
          </Typography>
          <Badge color='primary' badgeContent={unread} />
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

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
        <Stack sx={{ width: '100%' }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color='#709ce6' />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search...'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
          <Stack direction={'column'}>
            <Stack direction={'column'} spacing={2.4}>
              <Typography variant='subtitle2' sx={{ color: '#676767' }}>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((item) => (
                <ChatElement key={item.id} user={item} />
              ))}
            </Stack>
            <Stack direction={'column'} spacing={2.4}>
              <Typography variant='subtitle2' sx={{ color: '#676767' }}>
                Pinned
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((item) => (
                <ChatElement key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
