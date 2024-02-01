import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home/About'));

const coreRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },
];

const routes = [...coreRoutes];
export default routes;
