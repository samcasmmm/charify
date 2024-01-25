type HoverVariants = {
  hover: {
    scale?: number;
  };
};

export const varHover = (scale?: number): HoverVariants => ({
  hover: {
    scale: scale || 1.1,
  },
});
