import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { LazyMotion } from 'framer-motion';

const loadFeatures = () => import('./features.js').then((res) => res.default);

interface MotionLazyContainerProps {
  children?: ReactNode;
}

const MotionLazyContainer: React.FC<MotionLazyContainerProps> = ({
  children,
}) => {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
};

MotionLazyContainer.propTypes = {
  children: PropTypes.node,
};

export default MotionLazyContainer;
