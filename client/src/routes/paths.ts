function path(root: string, sublink: string): string {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD: string = '/';

export const PATH_DASHBOARD: { root: string; general: { app: string } } = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, 'app'),
  },
};
