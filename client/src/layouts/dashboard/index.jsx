import { Outlet } from 'react-router-dom';
import { Box, Stack, IconButton, Divider, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Gear } from 'phosphor-react';

import Logo from '../../assets/Images/logo.png';
import { Nav_Buttons } from '../../data';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { Switch } from '@mui/material';

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  return (
    <>
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
                  sx={{
                    backgroundColor: `${
                      item.index === selected && theme.palette.primary.main
                    }`,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    key={item.index}
                    sx={{
                      width: 'max-content',
                      color: `${item.index === selected ? '#fff' : '#000'}`,
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
                    color: `${3 === selected ? '#fff' : '#000'}`,
                  }}
                  onClick={() => setSelected(3)}
                >
                  <Gear />
                </IconButton>
              </Box>
            </Stack>
          </Stack>
          <Stack direction={'column'} alignItems={'center'} spacing={4}>
            <Switch defaultChecked />
            <Avatar src={faker.image.avatar()} alt='avator' />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
