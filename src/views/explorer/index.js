import View from './view.vue'
import { ViewBlock, ViewCommon } from './views'
export default [
  {
    path: '/explorer',
    name: 'Explorer',
    component: View,
    children: [
      {
        path: '',
        redirect: '/explorer/common',
      },
      {
        path: 'common',
        name: 'ExplorerCommon',
        component: ViewCommon,
      },
      {
        path: ':id',
        name: 'ExplorerBlock',
        component: ViewBlock,
      },
    ],
  },
]
