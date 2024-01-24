import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Iconify({ icon, sx, ...other }) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
