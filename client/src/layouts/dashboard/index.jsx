import { Outlet } from 'react-router-dom';
import { Box, Stack, IconButton, Divider, Avatar } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { Gear } from 'phosphor-react';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { Switch } from '@mui/material';

import Logo from '../../assets/Images/logo.png';
import { Nav_Buttons } from '../../data';
import useSettings from './../../hooks/useSettings';

const AntSwitch = styled(Switch)(({ theme }) => {
  const WIDTH = 40;
  const HEIGHT = WIDTH / 2;
  return {
    width: WIDTH,
    height: HEIGHT,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: `translateX(${HEIGHT}px)`,
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: HEIGHT - 4,
      height: HEIGHT - 4,
      borderRadius: (HEIGHT - 4) / 2,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: HEIGHT / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark'
          ? 'rgba(255,255,255,.35)'
          : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  };
});

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  return (
    <Stack direction={'row'}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          height: '100vh',
          width: 100,
          boxShadow: 2,
        }}
      >
        <Stack
          direction={'column'}
          alignItems={'center'}
          justifyContent={'space-between'}
          sx={{ width: '100%', height: '97vh' }}
          spacing={3}
          pt={5}
        >
          <Stack alignItems={'center'} spacing={4}>
            <Box
              sx={{
                backgroundColor: '#CCCCCC20',
                height: 64,
                width: 64,
                borderRadius: 2.5,
                boxShadow: 1,
              }}
            >
              <img src={Logo} alt='App Logo' />
            </Box>
            <Stack
              sx={{ width: 'max-content' }}
              direction={'column'}
              alignItems={'center'}
              spacing={2}
            >
              {Nav_Buttons.map((item) => (
                <Box
                  key={item.index}
                  sx={{
                    backgroundColor: `${
                      item.index === selected && theme.palette.primary.main
                    }`,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{
                      width: 'max-content',
                      color: `${
                        item.index === selected
                          ? '#fff'
                          : theme.palette.mode === 'light'
                          ? '#000'
                          : theme.palette.text.primary
                      }`,
                    }}
                    onClick={() => setSelected(item.index)}
                  >
                    {item.icon}
                  </IconButton>
                </Box>
              ))}
              <Divider />
              <Box
                sx={{
                  backgroundColor: `${
                    3 === selected && theme.palette.primary.main
                  }`,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  sx={{
                    width: 'max-content',
                    color: `${
                      3 === selected
                        ? '#fff'
                        : theme.palette.mode === 'light'
                        ? '#000'
                        : theme.palette.text.primary
                    }`,
                  }}
                  onClick={() => setSelected(3)}
                >
                  <Gear />
                </IconButton>
              </Box>
            </Stack>
          </Stack>
          <Stack direction={'column'} alignItems={'center'} spacing={4}>
            <AntSwitch onChange={onToggleMode} />
            <Avatar src={faker.image.avatar()} alt='avator' />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
