<template>
  <div class="layout-wrapper">
    <header class="layout-topbar flex justify-content-between align-items-center">
      <div class="flex align-items-center h-full">
        <div class="logo-container" :class="{ 'logo-collapsed': sidebarCollapsed }">
          <img v-if="!sidebarCollapsed" src="/src/assets/images/logo-muvs.png" alt="Logo completo" class="full-logo" />
          <img v-else src="/src/assets/images/iconmuvs.png" alt="Ícono de la marca" class="icon-logo" :class="{ 'icon-logo-small': sidebarCollapsed }" />
        </div>
        <div class="sidebar-toggle-wrapper">
          <Button 
            :icon="sidebarCollapsed ? 'pi pi-angle-right' : 'pi pi-angle-left'" 
            class="p-button-rounded p-button-success sidebar-toggle"
            @click="toggleSidebar" 
          />
        </div>
      </div>
      <div class="flex align-items-center pr-4">
        <Button icon="pi pi-user" class="p-button-rounded p-button-text p-button-plain mr-2" />
        <Button icon="pi pi-bell" class="p-button-rounded p-button-text p-button-plain" />
      </div>
    </header>

    <div class="layout-content">
      <aside class="layout-sidebar" :class="{ 'layout-sidebar-collapsed': sidebarCollapsed }">
        <div class="layout-menu">
          <ul class="list-none p-0 m-0">
            <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
              <router-link :to="item.route" style="text-decoration: none;">
              <Button 
                :icon="item.icon" 
                :label="sidebarCollapsed ? '' : item.label" 
                class="p-button-text p-button-plain w-full sidebar-button icon-change"
                :class="[
                  sidebarCollapsed ? 'justify-content-center' : 'justify-content-start',
                  { 'menu-item-active': item.route === currentRoute }
                ]"
        
              />
            </router-link>
            </li>
          </ul>
        </div>
      </aside>

      <main class="layout-main p-4" :class="{ 'layout-main-expanded': sidebarCollapsed }">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Button from 'primevue/button'

export default {
  name: 'DashboardLayout',
  components: {
    Button
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const sidebarCollapsed = ref(false)

    const menuItems = ref([
      { icon: 'pi pi-home', label: 'Dashboard', route: '/' },
      { icon: 'pi pi-users', label: 'Clientes', route: '/clientes' },
      { icon: 'pi pi-sitemap', label: 'Equipo', route: '/facturas' },
      { icon: 'pi pi-car', label: 'Motoristas', route: '/facturas' },
      { icon: 'pi pi-car', label: 'Movimientos', route: '/movimientos' },
      { icon: 'pi pi-folder-open', label: 'Facturas', route: '/facturas' },
      { icon: 'pi pi-map', label: 'Ubicaciones', route: '/ubicaciones' },
    ])

    const currentRoute = computed(() => route.path)
    const currentPageTitle = computed(() => {
      const currentMenuItem = menuItems.value.find(item => item.route === currentRoute.value)
      return currentMenuItem ? currentMenuItem.label : 'Página no encontrada'
    })

    const navigateTo = (route) => {
      router.push(route)
    }

    const toggleSidebar = () => {
      sidebarCollapsed.value = !sidebarCollapsed.value
    }

    return {
      menuItems,
      sidebarCollapsed,
      navigateTo,
      toggleSidebar,
      currentRoute,
      currentPageTitle
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

.icon-change :deep(.pi) {
  font-size: 1.3rem;
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}

.layout-topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  z-index: 1000;
  padding: 0;
}

.logo-container {
  width: 220px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease-in-out;
  border-right: 1px solid #E4E7EB;
  padding-left: 1rem;
}

.logo-collapsed {
  width: 70px;
  justify-content: center;
  padding-left: 0;
}

.full-logo {
  max-height: 40px;
  max-width: 100%;
}

.icon-logo {
  max-height: 30px;
  max-width: 100%;
  transition: all 0.3s ease-in-out;
}

.icon-logo-small {
  max-height: 25px;
  max-width: 25px;
}

.layout-content {
  display: flex;
  flex-grow: 1;
  margin-top: 60px;
}

.layout-sidebar {
  width: 220px;
  background-color: #ffffff;
  border-right: 1px solid #E4E7EB;
  height: calc(100vh - 60px);
  position: fixed;
  left: 0;
  top: 60px;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
}

.layout-sidebar-collapsed {
  width: 70px;
}

.layout-main {
  flex-grow: 1;
  margin-left: 220px;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  background-color: #F8F9FA;
}

.layout-main-expanded {
  margin-left: 70px;
}

.sidebar-button {
  color: #495057;
  padding: 0.75rem 1rem;
  border-radius: 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  height: 48px;
  margin-bottom: 0.5rem;
}

.sidebar-button .p-button-icon {
  font-size: 1.25rem !important;
  margin-right: 0.75rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-button .p-button-label {
  flex-grow: 1;
  font-weight: 400;
  font-size: 0.875rem;
}

.sidebar-button:hover {
  background-color: #d5eeda;
}

.menu-item-active {
  background-color: #E8F5E9 !important;
  color: #39A935 !important;
  font-weight: 500;
}

.layout-sidebar-collapsed .sidebar-button {
  padding: 0;
  justify-content: center;
  height: 48px;
}

.layout-sidebar-collapsed .sidebar-button .p-button-label {
  display: none;
}

.layout-sidebar-collapsed .sidebar-button .p-button-icon {
  margin-right: 0;
  font-size: 1.25rem !important;
}

.sidebar-toggle-wrapper {
  position: relative;
  width: 0;
  height: 60px;
}

.sidebar-toggle {
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #39A935;
  border: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.sidebar-toggle:hover {
  background-color: #2E8A29;
}

.sidebar-toggle .p-button-icon {
  font-size: 1rem;
  color: #ffffff;
}

.datatable-container {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 768px) {
  .layout-sidebar {
    transform: translateX(-100%);
  }

  .layout-sidebar-collapsed {
    transform: translateX(0);
  }

  .layout-main {
    margin-left: 0;
  }

  .layout-main-expanded {
    margin-left: 70px;
  }
}
</style>