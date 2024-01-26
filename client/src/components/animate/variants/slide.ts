import { varTranEnter, varTranExit, TransitionProps } from './transition';

type EaseType = string | number | [number, number, number, number];

interface SlideProps {
  distance?: number;
  durationIn?: number;
  durationOut?: number;
  easeIn?: number[];
  easeOut?: number[];
}

export const varSlide = (props?: SlideProps) => {
  const distance = props?.distance || 160;
  const durationIn = props?.durationIn;
  const durationOut = props?.durationOut;
  const easeIn = props?.easeIn;
  const easeOut = props?.easeOut;

  return {
    // IN
    inUp: {
      initial: { y: distance },
      animate: {
        y: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
      exit: {
        y: distance,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },
    inDown: {
      initial: { y: -distance },
      animate: {
        y: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
      exit: {
        y: -distance,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },
    inLeft: {
      initial: { x: -distance },
      animate: {
        x: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
      exit: {
        x: -distance,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },
    inRight: {
      initial: { x: distance },
      animate: {
        x: 0,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
      exit: {
        x: distance,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },

    // OUT
    outUp: {
      initial: { y: 0 },
      animate: {
        y: -distance,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
      exit: {
        y: 0,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },
    outDown: {
      initial: { y: 0 },
      animate: {
        y: distance,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
      exit: {
        y: 0,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },
    outLeft: {
      initial: { x: 0 },
      animate: {
        x: -distance,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
      exit: {
        x: 0,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },
    outRight: {
      initial: { x: 0 },
      animate: {
        x: distance,
        transition: varTranEnter({
          duration: durationIn,
          ease: easeIn as EaseType,
        }) as TransitionProps,
      },
      exit: {
        x: 0,
        transition: varTranExit({
          duration: durationOut,
          ease: easeOut as EaseType,
        }) as TransitionProps,
      },
    },
  };
};
