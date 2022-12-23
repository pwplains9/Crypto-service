import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '~/views/home'
import StatusView from '~/views/status'
import ExplorerView from '~/views/explorer'

export default createRouter({
  history: createWebHistory(),
  routes: [...HomeView, ...StatusView, ...ExplorerView],
})
