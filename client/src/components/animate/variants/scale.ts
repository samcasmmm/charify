import { varTranEnter, varTranExit, TransitionProps } from './transition';

type EaseType = string | number | [number, number, number, number];

interface ScaleProps {
  durationIn?: number;
  durationOut?: number;
  easeIn?: number[];
  easeOut?: number[];
}

export const varScale = (props?: ScaleProps) => {
  const durationIn = props?.durationIn;
  const durationOut = props?.durationOut;
  const easeIn = props?.easeIn;
  const easeOut = props?.easeOut;

  return {
    // IN
    inX: {
      initial: { scaleX: 0, opacity: 0 },
      animate: {
        scaleX: 1,
        opacity: 1,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
      exit: {
        scaleX: 0,
        opacity: 0,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },
    inY: {
      initial: { scaleY: 0, opacity: 0 },
      animate: {
        scaleY: 1,
        opacity: 1,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
      exit: {
        scaleY: 0,
        opacity: 0,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },

    // OUT
    outX: {
      initial: { scaleX: 1, opacity: 1 },
      animate: {
        scaleX: 0,
        opacity: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
    },
    outY: {
      initial: { scaleY: 1, opacity: 1 },
      animate: {
        scaleY: 0,
        opacity: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
    },
  };
};
