import { varTranEnter, varTranExit, TransitionProps } from './transition';

interface FlipProps {
  durationIn?: number;
  durationOut?: number;
  easeIn?: [number, number, number, number];
  easeOut?: [number, number, number, number];
}

export const varFlip = (props?: FlipProps) => {
  const durationIn = props?.durationIn;
  const durationOut = props?.durationOut;
  const easeIn = props?.easeIn;
  const easeOut = props?.easeOut;

  return {
    // IN
    inX: {
      initial: { rotateX: -180, opacity: 0 },
      animate: {
        rotateX: 0,
        opacity: 1,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
      exit: {
        rotateX: -180,
        opacity: 0,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut,
        }) as TransitionProps,
      },
    },
    inY: {
      initial: { rotateY: -180, opacity: 0 },
      animate: {
        rotateY: 0,
        opacity: 1,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
      exit: {
        rotateY: -180,
        opacity: 0,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut,
        }) as TransitionProps,
      },
    },

    // OUT
    outX: {
      initial: { rotateX: 0, opacity: 1 },
      animate: {
        rotateX: 70,
        opacity: 0,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut,
        }) as TransitionProps,
      },
    },
    outY: {
      initial: { rotateY: 0, opacity: 1 },
      animate: {
        rotateY: 70,
        opacity: 0,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut,
        }) as TransitionProps,
      },
    },
  };
};
