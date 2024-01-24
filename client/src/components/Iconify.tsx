import PropTypes, { ReactNode } from 'prop-types';
import { Icon } from '@iconify/react';
import { Box, SxProps } from '@mui/system';

interface IconifyProps {
  icon: ReactNode | string;
  sx?: SxProps;
  [key: string]: any;
}

const Iconify: React.FC<IconifyProps> = ({
  icon,
  sx,
  ...other
}: IconifyProps) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
};

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
};

export default Iconify;
