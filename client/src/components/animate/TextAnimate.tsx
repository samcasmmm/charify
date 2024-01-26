import PropTypes from 'prop-types';
import { m, Variants } from 'framer-motion';
import { Box, SxProps } from '@mui/system';
import { varFade } from './variants';

interface TextAnimateProps {
  text: string;
  variants?: Variants;
  sx?: SxProps;
}

TextAnimate.propTypes = {
  text: PropTypes.string.isRequired,
  variants: PropTypes.object,
  sx: PropTypes.object,
};

export default function TextAnimate({
  text,
  variants,
  sx,
  ...other
}: TextAnimateProps) {
  return (
    <Box
      component={m.h1}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || (varFade({}) as Variants)}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}
