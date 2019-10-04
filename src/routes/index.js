import ListView from 'view/list'
import DetailView from 'view/detail'
import FormView from 'view/form'

import defaultLayout from 'layout/default'

export const defaultRoutes = [
  {
    key: 'router-1',
    name: 'list',
    path: '/list',
    component: defaultLayout(ListView),
    exact: true,
  },
  {
    key: 'router-2',
    name: 'detail',
    path: '/list/:id',
    component: defaultLayout(DetailView),
    exact: true,
  },
  {
    key: 'router-3',
    name: 'form',
    path: '/new-post',
    component: defaultLayout(FormView),
    exact: true,
  },
]