import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes :[
    {
      path: "/",
      name: "",
      component: () => import('../views/Layouts/Home.vue'),
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('../views/PaginaPrincipal/paginaprincipalcomponent.vue')
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import('../views/PaginaPrincipal/LoginComponent.vue'),
    },
    {
      path: "/registro",
      name: "registro",
      component: () => import('../views/PaginaPrincipal/RegistroClienteComponent.vue'),
    },
    {
      path: "/contacto",
      name: "contacto",
      component: () => import('../views/PaginaPrincipal/Contacto.vue'),
    },
    {
      path: "/home",
      name: "home",
      component: () => import('../views/Layouts/LayoutApp.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/Dashboard/Dahsboard.vue'),
        }
      ]
    }
  ]
});

export default router