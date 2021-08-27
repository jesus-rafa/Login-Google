import { createRouter, createWebHistory } from 'vue-router'

import userRutes from './users'

import preguntaRutes from './pregunta'

// const routes = homeRutes.concat(homeRutes, otroRutes)
const routes = userRutes.concat(preguntaRutes)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
