import { pxToRem, responsiveFontSizes } from '../utils/getFontValue';

const FONT_PRIMARY = 'Manrope, Public Sans, sans-serif';

interface Typography {
  fontFamily: string;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1: {
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
    letterSpacing: number;
  };
  h2: {
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
  };
  h3: {
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
  };
  h4: {
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
  };
  h5: {
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
  };
  h6: {
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
  };
  subtitle1: {
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
  };
  subtitle2: {
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
  };
  body1: {
    lineHeight: number;
    fontSize: string;
  };
  body2: {
    lineHeight: number;
    fontSize: string;
    fontWeight: number;
  };
  caption: {
    lineHeight: number;
    fontSize: string;
    fontWeight: number;
  };
  overline: {
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
    textTransform: string;
  };
  button: {
    fontWeight: number;
    lineHeight: number;
    fontSize: string;
    textTransform: string;
  };
  article: {
    fontWeight: number;
  };
}

const typography: Typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 700,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    fontWeight: 600,
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    fontWeight: 600,
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
  article: {
    fontWeight: 700,
  },
};

export default typography;
