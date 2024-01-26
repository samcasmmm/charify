import { useTheme, Theme, Breakpoints } from '@mui/system';
import useResponsive from '../hooks/useResponsive';

export default function getFontValue(variant: string) {
  const theme = useTheme();
  const breakpoints = useWidth(theme);

  const key = theme.breakpoints.up(breakpoints === 'xl' ? 'lg' : breakpoints);

  const hasResponsive =
    variant === 'h1' ||
    variant === 'h2' ||
    variant === 'h3' ||
    variant === 'h4' ||
    variant === 'h5' ||
    variant === 'h6';

  const getFont =
    hasResponsive && theme.typography[variant][key]
      ? theme.typography[variant][key]
      : theme.typography[variant];

  const fontSize = remToPx(getFont.fontSize);
  const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
  const { fontWeight } = theme.typography[variant];
  const { letterSpacing } = theme.typography[variant];

  return { fontSize, lineHeight, fontWeight, letterSpacing };
}

export function remToPx(value: string | number) {
  return Math.round(parseFloat(value as string) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

function useWidth(theme: Theme): Breakpoints {
  const keys: Breakpoints[] = Object.keys(
    theme.breakpoints
  ).reverse() as Breakpoints[];

  return (
    keys.reduce((output, key) => {
      const matches = useResponsive('up', key);

      return !output && matches ? key : output;
    }, null as Breakpoints | null) || 'xs'
  );
}
