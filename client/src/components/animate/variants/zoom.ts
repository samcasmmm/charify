import { varTranEnter, varTranExit, TransitionProps } from './transition';

type EaseType = string | number | [number, number, number, number];

interface ZoomProps {
  distance?: number;
  durationIn?: number;
  durationOut?: number;
  easeIn?: EaseType;
  easeOut?: EaseType;
}

export const varZoom = (props?: ZoomProps) => {
  const distance = props?.distance || 720;
  const durationIn = props?.durationIn;
  const durationOut = props?.durationOut;
  const easeIn = props?.easeIn;
  const easeOut = props?.easeOut;

  return {
    // IN
    in: {
      initial: { scale: 0, opacity: 0 },
      animate: {
        scale: 1,
        opacity: 1,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
      exit: {
        scale: 0,
        opacity: 0,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut,
        }) as TransitionProps,
      },
    },
    inUp: {
      initial: { scale: 0, opacity: 0, translateY: distance },
      animate: {
        scale: 1,
        opacity: 1,
        translateY: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
      exit: {
        scale: 0,
        opacity: 0,
        translateY: distance,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut,
        }) as TransitionProps,
      },
    },
    inDown: {
      initial: { scale: 0, opacity: 0, translateY: -distance },
      animate: {
        scale: 1,
        opacity: 1,
        translateY: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
      exit: {
        scale: 0,
        opacity: 0,
        translateY: -distance,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut,
        }) as TransitionProps,
      },
    },
    inLeft: {
      initial: { scale: 0, opacity: 0, translateX: -distance },
      animate: {
        scale: 1,
        opacity: 1,
        translateX: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
      exit: {
        scale: 0,
        opacity: 0,
        translateX: -distance,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut,
        }) as TransitionProps,
      },
    },
    inRight: {
      initial: { scale: 0, opacity: 0, translateX: distance },
      animate: {
        scale: 1,
        opacity: 1,
        translateX: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
      exit: {
        scale: 0,
        opacity: 0,
        translateX: distance,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut,
        }) as TransitionProps,
      },
    },

    // OUT
    out: {
      initial: { scale: 1, opacity: 1 },
      animate: {
        scale: 0,
        opacity: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
    },
    outUp: {
      initial: { scale: 1, opacity: 1 },
      animate: {
        scale: 0,
        opacity: 0,
        translateY: -distance,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
    },
    outDown: {
      initial: { scale: 1, opacity: 1 },
      animate: {
        scale: 0,
        opacity: 0,
        translateY: distance,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
    },
    outLeft: {
      initial: { scale: 1, opacity: 1 },
      animate: {
        scale: 0,
        opacity: 0,
        translateX: -distance,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
    },
    outRight: {
      initial: { scale: 1, opacity: 1 },
      animate: {
        scale: 0,
        opacity: 0,
        translateX: distance,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn,
        }) as TransitionProps,
      },
    },
  };
};
