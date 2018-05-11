
export default [
  {
    path: '/',
    component: () => import('layouts/base'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/welcome',
    component: () => import('layouts/base'),
    children: [
      { path: '', component: () => import('pages/welcome') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
