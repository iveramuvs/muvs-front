import { createRouter, createWebHistory } from 'vue-router'
import InicioComponent from '../views/App.vue'
import LoginComponent from '../views/Login/LoginComponent.vue'
import RegistroClienteComponent from '../views/RegistroCliente/RegistroClienteComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes :[
    {
      path: "/",
      name: "",
      component: InicioComponent
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/registro-cliente",
      name: "registro-cliente",
      component: RegistroClienteComponent
    }
  ]
});

export default router