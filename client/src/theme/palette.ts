import { alpha } from '@mui/material/styles';

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

interface GreyPalette {
  [key: string]: string | number | ((opacity: number) => string);
}

const GREY: GreyPalette = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

interface ColorPreset {
  name?: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

const PRIMARY: ColorPreset = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#0162C4',
  dark: '#007B55',
  darker: '#005249',
  contrastText: '#fff',
};

const SECONDARY: ColorPreset = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff',
};

const INFO: ColorPreset = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: PRIMARY.contrastText,
};

const SUCCESS: ColorPreset = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: PRIMARY.contrastText,
};

const WARNING: ColorPreset = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800] as string,
};

const ERROR: ColorPreset = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
};

interface Gradients {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

const GRADIENTS: Gradients = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

interface ChartColors {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
}

const CHART_COLORS: ChartColors = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

interface CommonPalette {
  common: { black: string; white: string };
  primary: ColorPreset;
  secondary: ColorPreset;
  info: ColorPreset;
  success: ColorPreset;
  warning: ColorPreset;
  error: ColorPreset;
  grey: GreyPalette;
  gradients: Gradients;
  chart: ChartColors;
  divider: string;
  action: {
    hover: string;
    selected: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
    hoverOpacity: number;
    disabledOpacity: number;
  };
}

const COMMON: CommonPalette = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] as string },
  warning: { ...WARNING, contrastText: GREY[800] as string },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24] as string,
  action: {
    hover: GREY[500_8] as string,
    selected: GREY[500_16] as string,
    disabled: GREY[500_80] as string,
    disabledBackground: GREY[500_24] as string,
    focus: GREY[500_24] as string,
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default COMMON;
