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
          path: '/',
          name: 'home',
          component: () => import('../views/PaginaPrincipal/paginaprincipalcomponent.vue')
        }
      ]
  
    },
    {
      path: "/login",
      name: "login",
      component: () => import('../views/Login/LoginComponent.vue'),
    },
    {
      path: "/registro-cliente",
      name: "registro-cliente",
      component: () => import('../views/RegistroCliente/RegistroClienteComponent.vue'),
    }
  ]
});

export default router