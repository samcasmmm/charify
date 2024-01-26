import React from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { Box, BoxProps } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { varContainer } from '.';

interface MotionViewportProps extends BoxProps {
  children: React.ReactNode;
  disableAnimatedMobile?: boolean;
}

const MotionViewport: React.FC<MotionViewportProps> = ({
  children,
  disableAnimatedMobile = false,
  ...other
}) => {
  const isMobile = useResponsive('down', 'sm');

  if (isMobile && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
};

MotionViewport.propTypes = {
  children: PropTypes.node.isRequired,
  disableAnimatedMobile: PropTypes.bool,
};

export default MotionViewport;
