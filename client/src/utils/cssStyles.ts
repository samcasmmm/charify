type Direction = 'top' | 'right' | 'bottom' | 'left';

function getDirection(value: Direction = 'bottom'): string {
  return {
    top: 'to-top',
    right: 'to-right',
    bottom: 'to-bottom',
    left: 'to-left',
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
  bgBlur: (props: CssStylesProps) => string; // Modified return type to use Tailwind CSS classes
  bgGradient: (props: CssStylesProps) => string; // Modified return type to use Tailwind CSS classes
  bgImage: (props: CssStylesProps) => string; // Modified return type to use Tailwind CSS classes
}

export default function cssStyles(): CssStyles {
  return {
    bgBlur: (props: CssStylesProps) => {
      const color = props?.color || 'bg-black';
      const blur = props?.blur || 6;
      const opacity = props?.opacity || 80;

      return `backdrop-blur-${blur} ${color} bg-opacity-${opacity}`;
    },
    bgGradient: (props: CssStylesProps) => {
      const direction = getDirection(props?.direction);
      const startColor = props?.startColor || 'bg-opacity-0';
      const endColor = props?.endColor || 'bg-black bg-opacity-75';

      return `bg-gradient-to-${direction} from-${startColor} via-${startColor} to-${endColor}`;
    },
    bgImage: (props: CssStylesProps) => {
      const url = props?.url || '/assets/bg_gradient.jpg';
      const direction = getDirection(props?.direction);
      const startColor = props?.startColor || 'bg-opacity-88';
      const endColor = props?.endColor || 'bg-opacity-88';

      return `bg-gradient-to-${direction} from-${startColor} via-${startColor} to-${endColor} bg-cover bg-no-repeat bg-center`;
    },
  };
}
