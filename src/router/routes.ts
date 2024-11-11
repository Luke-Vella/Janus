import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'facility', component: () => import('pages/Facility.vue') },
      { path: 'tasks', component: () => import('pages/Tasks.vue') },
      { path: 'research', component: () => import('pages/Research.vue') },
      { path: 'infirmary', component: () => import('pages/Infirmary.vue') },
      { path: 'anomalies', component: () => import('pages/AnomalyCodex.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
