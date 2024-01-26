import React from 'react';
import PropTypes, { Validator } from 'prop-types';
import { motion as m } from 'framer-motion';
import { forwardRef } from 'react';
import { Box, IconButton } from '@mui/material';

interface IconButtonAnimateProps {
  children: React.ReactNode;
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  size?: 'small' | 'medium' | 'large';
}

const IconButtonAnimate = forwardRef<HTMLButtonElement, IconButtonAnimateProps>(
  ({ children, size = 'medium', color, ...other }, ref) => (
    <AnimateWrap size={size}>
      <IconButton size={size} ref={ref} color={color} {...other}>
        {children}
      </IconButton>
    </AnimateWrap>
  )
);

IconButtonAnimate.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'inherit',
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']) as Validator<
    'small' | 'medium' | 'large'
  >,
};

export default IconButtonAnimate;

interface AnimateWrapProps {
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

const AnimateWrap: React.FC<AnimateWrapProps> = ({ size, children }) => {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component={m.div}
      whileTap='tap'
      whileHover='hover'
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex',
      }}
    >
      {children}
    </Box>
  );
};

AnimateWrap.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']) as Validator<
    'small' | 'medium' | 'large'
  >,
};
