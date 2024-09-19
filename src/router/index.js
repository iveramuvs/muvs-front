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
      path: "/clientes",
      name: "clientes",
      component: () => import('../views/Clientes/Clientes.vue'),
    },
    {
      path: "/facturas",
      name: "facturas",
      component: () => import('../views/Facturas/Facturas.vue'),
    },
    // {
    //   path: "/motoristas",
    //   name: "motoristas",
    //   component: () => import('../views/Motoristas/Motoristas.vue'),
    // },
    // {
    //   path: "/equipo",
    //   name: "equipo",
    //   component: () => import('../views/Equipo/Equipo.vue'),
    // },
    {
      path: "/clientes",
      name: "clientes",
      component: () => import('../views/Movimientos/Movimientos.vue'),
    }
  ]
});

export default router