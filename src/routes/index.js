import ListView from 'view/list'
import defaultLayout from 'layout/default'

export const defaultRoutes = [
  {
    key: 'router-1',
    name: 'index',
    path: '/',
    component: defaultLayout(ListView),
    exact: true,
  },
]