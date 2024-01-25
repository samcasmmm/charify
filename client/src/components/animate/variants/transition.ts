export interface TransitionProps {
  duration?: number;
  ease?: [number, number, number, number];
}

export const varTranHover = (props?: TransitionProps) => {
  const duration = props?.duration || 0.32;
  const ease = props?.ease || [0.43, 0.13, 0.23, 0.96];

  return { duration, ease };
};

export const varTranEnter = (props?: TransitionProps) => {
  const duration = props?.duration || 0.64;
  const ease = props?.ease || [0.43, 0.13, 0.23, 0.96];

  return { duration, ease };
};

export const varTranExit = (props?: TransitionProps) => {
  const duration = props?.duration || 0.48;
  const ease = props?.ease || [0.43, 0.13, 0.23, 0.96];

  return { duration, ease };
};
