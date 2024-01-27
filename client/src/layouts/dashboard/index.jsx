import { Outlet } from 'react-router-dom';
import { Box, Stack, IconButton, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Gear } from 'phosphor-react';

import Logo from '../../assets/Images/logo.png';
import { Nav_Buttons } from '../../data';
import { useState } from 'react';

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
          sx={{ width: '100%' }}
          spacing={3}
          mt={5}
        >
          <Box
            sx={{
              backgroundColor: '#CCCCCC20',
              height: 64,
              width: 64,
              borderRadius: 2.5,
              boxShadow: 1,
            }}
          >
            <img src={Logo} alt='App Logo' style={{ filter: 'tint(black)' }} />
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
                  4 === selected && theme.palette.primary.main
                }`,
                borderRadius: 1.5,
              }}
            >
              <IconButton
                sx={{
                  width: 'max-content',
                  color: `${4 === selected ? '#fff' : '#000'}`,
                }}
                onClick={() => setSelected(4)}
              >
                <Gear />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
