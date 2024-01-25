interface Transition {
  duration: number;
  ease: number[];
}

export const TRANSITION: Transition = {
  duration: 2,
  ease: [0.43, 0.13, 0.23, 0.96],
};

interface VarPath {
  animate: {
    fillOpacity: number[];
    pathLength: number[];
    transition: Transition;
  };
}

export const varPath: VarPath = {
  animate: {
    fillOpacity: [0, 0, 1],
    pathLength: [1, 0.4, 0],
    transition: TRANSITION,
  },
};
