import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/cadastro',
      name: 'usuario-cadastrar',
      component: () => import('../views/RegistrationView.vue')
    },
    {
      path: '/editar/:id',
      name: 'usuario-editar',
      component: () => import('../views/EditionsView.vue')
    },
    {
      path: '/listar/',
      name: 'listar-usuarios',
      component: () => import('../views/ListingUserView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutSiteView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404View.vue')
    },
  ]
})

export default router
