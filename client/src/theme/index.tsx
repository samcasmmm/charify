import PropTypes from 'prop-types';
import { useMemo, ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  Theme,
} from '@mui/material/styles';
import useSettings from '../hooks/useSettings.js';
import palette from './palette.js';
import typography from './typography.js';
import breakpoints from './breakpoints.js';
import componentsOverride from './overrides/index.js';
import shadows, { customShadows } from './shadows.js';

interface ThemeProviderProps {
  children: ReactNode;
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { themeMode, themeDirection } = useSettings();

  const isLight = themeMode === 'light';

  const themeOptions = useMemo<Theme>(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
