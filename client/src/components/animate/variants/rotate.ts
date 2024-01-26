import { varTranEnter, varTranExit, TransitionProps } from './transition';

type EaseType = string | number | [number, number, number, number];

interface RotateProps {
  durationIn?: number;
  durationOut?: number;
  easeIn?: number[] | EaseType;
  easeOut?: number[] | EaseType;
}

export const varRotate = (props?: RotateProps) => {
  const durationIn = props?.durationIn;
  const durationOut = props?.durationOut;
  const easeIn = props?.easeIn;
  const easeOut = props?.easeOut;

  return {
    in: {
      initial: { opacity: 0, rotate: -360 },
      animate: {
        opacity: 1,
        rotate: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
      exit: {
        opacity: 0,
        rotate: -360,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },

    out: {
      initial: { opacity: 1, rotate: 0 },
      animate: {
        opacity: 0,
        rotate: -360,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },
  };
};
