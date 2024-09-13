<template>
    <div class="layout-wrapper">
      <!-- Sidebar -->
      <Sidebar v-model:visible="sidebarVisible" :baseZIndex="10000" class="layout-sidebar"  :dismissable="true" :showCloseIcon="true">
        <!-- Contenido del sidebar -->
        <h3>Menú</h3>
        <Menu :model="menuItems" />
      </Sidebar>
  
      <div :class="['layout-main-container', {'layout-main-container-full': !sidebarVisible}]">
        <!-- Header fijo con toolbar -->
        <div class="layout-header">
          <Toolbar>
            <template #start>
              <Button icon="pi pi-bars" @click="toggleSidebar" class="p-mr-2" />
            </template>
            <template #end>
              <Button icon="pi pi-user" class="p-button-rounded p-button-text" />
            </template>
          </Toolbar>
        </div>
  
        <!-- Contenido principal -->
        <div class="layout-main">
            <RouterView />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Sidebar from 'primevue/sidebar';
  import Toolbar from 'primevue/toolbar';
  import Button from 'primevue/button';
  import Menu from 'primevue/menu';
  
  const sidebarVisible = ref(true);
  
  const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value;
};
  
  const menuItems = ref([
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      to: '/'
    },
    {
      label: 'Perfil',
      icon: 'pi pi-user',
      to: '/profile'
    },
    // Agrega más elementos de menú según sea necesario
  ]);
  </script>
  
  <style>
  .layout-wrapper {
    display: flex;
    min-height: 100vh;
  }
  
  .layout-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 999;
    transition: transform 0.3s;
  }
  
  .layout-main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 250px;
    transition: padding-left 0.3s;
  }
  
  .layout-main-container-full {
    padding-left: 0;
  }
  
  .layout-header {
    position: sticky;
    top: 0;
    z-index: 997;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .layout-main {
    flex: 1;
    padding: 2rem;
  }
  
  @media screen and (max-width: 960px) {
    .layout-main-container {
      padding-left: 0;
    }
  
    .layout-sidebar {
      transform: translateX(-100%);
    }
  
    .layout-sidebar.p-sidebar-active {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 960px) {
  .layout-main-container {
    padding-left: 0;
  }

  .layout-sidebar {
    transform: translateX(-100%);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
  }

  .layout-sidebar.p-sidebar-active {
    transform: translateX(0);
  }
}
  </style>