import ListView from 'view/list';
import PageDriverManagement from 'components/page-driver-management';

export const defaultRoutes = [
  {
    key: 'router-1',
    name: 'index',
    path: '/',
    component: ListView,
    exact: true,
  },
  {
    key: 'router-2',
    name: 'index',
    path: '/driver-management',
    component: PageDriverManagement,
    exact: true,
  },
];