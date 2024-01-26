export interface Breakpoints {
  values: {
    xs: number | string;
    sm: number | string;
    md: number | string;
    lg: number | string;
    xl: number | string;
  };
}

const breakpoints: Breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

export default breakpoints;
