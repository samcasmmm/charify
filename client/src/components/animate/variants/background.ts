type BackgroundColorProps = {
  colors?: string[];
  duration?: number;
  ease?: string;
};

type Variant = {
  animate: {
    [key: string]: {
      scale?: [number, number];
      x?: [number, number];
      y?: [number, number];
      transformOrigin?: [string, string];
      backgroundImage?: [string, string];
      backgroundPosition?: [string, string];
      backgroundSize?: [string, string];
      transition: {
        duration: number;
        ease: string;
      };
    };
  };
};

type BackgroundKenburnsProps = {
  duration?: number;
  ease?: string;
};

type BackgroundPanProps = {
  colors?: string[];
  duration?: number;
  ease?: string;
};

export const varBgColor = (
  props: BackgroundColorProps
): {
  animate: {
    background: string[];
    transition: { duration: number; ease: string };
  };
} => {
  const colors = props.colors || ['#19dcea', '#b22cff'];
  const duration = props.duration || 5;
  const ease = props.ease || 'linear';

  return {
    animate: {
      background: colors,
      transition: { duration, ease },
    },
  };
};

export const varBgKenburns = (props: BackgroundKenburnsProps): Variant => {
  const duration = props.duration || 5;
  const ease = props.ease || 'easeOut';

  return {
    animate: {
      top: {
        scale: [1, 1.25],
        y: [0, -15],
        transformOrigin: ['50% 16%', 'top'],
        transition: { duration, ease },
      },
      right: {
        scale: [1, 1.25],
        x: [0, 20],
        y: [0, -15],
        transformOrigin: ['84% 50%', 'right'],
        transition: { duration, ease },
      },
      bottom: {
        scale: [1, 1.25],
        y: [0, 15],
        transformOrigin: ['50% 84%', 'bottom'],
        transition: { duration, ease },
      },
      left: {
        scale: [1, 1.25],
        x: [0, -20],
        y: [0, 15],
        transformOrigin: ['16% 50%', 'left'],
        transition: { duration, ease },
      },
    },
  };
};

export const varBgPan = (props: BackgroundPanProps): Variant => {
  const colors = props.colors || ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'];
  const duration = props.duration || 5;
  const ease = props.ease || 'linear';

  const gradient = (deg: number) => `linear-gradient(${deg}deg, ${colors})`;

  return {
    animate: {
      top: {
        backgroundImage: [gradient(0), gradient(0)],
        backgroundPosition: ['center 99%', 'center 1%'],
        backgroundSize: ['100% 600%', '100% 600%'],
        transition: { duration, ease },
      },
      right: {
        backgroundImage: [gradient(270), gradient(270)],
        backgroundPosition: ['1% center', '99% center'],
        backgroundSize: ['600% 100%', '600% 100%'],
        transition: { duration, ease },
      },
      bottom: {
        backgroundImage: [gradient(0), gradient(0)],
        backgroundPosition: ['center 1%', 'center 99%'],
        backgroundSize: ['100% 600%', '100% 600%'],
        transition: { duration, ease },
      },
      left: {
        backgroundImage: [gradient(270), gradient(270)],
        backgroundPosition: ['99% center', '1% center'],
        backgroundSize: ['600% 100%', '600% 100%'],
        transition: { duration, ease },
      },
    },
  };
};
