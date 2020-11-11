import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/schema',
    name: 'CreateSchema',
    component: () => import(/* webpackChunkName: "creation" */ '../views/CreateSchema.vue')
  },
  {
    path: '/schema/:name',
    name: 'SchemaConfiguration',
    props: true,
    component: () => import(/* webpackChunkName: "creation" */ '../views/SchemaConfiguration.vue')
  },
  {
    path: '/schemas/:name',
    name: 'SchemaViewer',
    component: () => import(/* webpackCunkName: "schema-viewer" */ '../views/SchemaViewer.vue')
  },
  {
    path: '/schemas/:name/:fields*',
    name: 'SchemaViewerFields',
    component: () => import(/* webpackCunkName: "schema-viewer" */ '../views/SchemaViewer.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
