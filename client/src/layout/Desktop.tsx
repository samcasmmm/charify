import { Outlet } from 'react-router-dom';

type Props = {};

const Desktop = (props: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Desktop;
