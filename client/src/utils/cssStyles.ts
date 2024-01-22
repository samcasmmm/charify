import { alpha, Theme } from '@mui/material/styles';

type Direction = 'top' | 'right' | 'bottom' | 'left';

function getDirection(value: Direction = 'bottom'): string {
  return {
    top: 'to top',
    right: 'to right',
    bottom: 'to bottom',
    left: 'to left',
  }[value];
}

interface CssStylesProps {
  color?: string;
  blur?: number;
  opacity?: number;
  direction?: Direction;
  startColor?: string;
  endColor?: string;
  url?: string;
}

interface CssStyles {
  bgBlur: (props: CssStylesProps) => React.CSSProperties;
  bgGradient: (props: CssStylesProps) => React.CSSProperties;
  bgImage: (props: CssStylesProps) => React.CSSProperties;
}

export default function cssStyles(theme: Theme): CssStyles {
  return {
    bgBlur: (props: CssStylesProps) => {
      const color =
        props?.color || theme?.palette.background.default || '#000000';
      const blur = props?.blur || 6;
      const opacity = props?.opacity || 0.8;

      return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`, // Fix on Mobile
        backgroundColor: alpha(color, opacity),
      };
    },
    bgGradient: (props: CssStylesProps) => {
      const direction = getDirection(props?.direction);
      const startColor = props?.startColor || `${alpha('#000000', 0)} 0%`;
      const endColor = props?.endColor || '#000000 75%';

      return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor});`,
      };
    },
    bgImage: (props: CssStylesProps) => {
      const url = props?.url || '/assets/bg_gradient.jpg';
      const direction = getDirection(props?.direction);
      const startColor =
        props?.startColor || alpha(theme?.palette.grey[900] || '#000000', 0.88);
      const endColor =
        props?.endColor || alpha(theme?.palette.grey[900] || '#000000', 0.88);

      return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor}), url(${url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      };
    },
  };
}
