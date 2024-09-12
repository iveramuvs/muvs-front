<template>
    <div class="flex flex-column min-h-screen relative">
      <!-- Background decorative elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500 opacity-10 rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
        <div class="absolute bottom-0 right-0 w-3/4 h-3/4 bg-green-500 opacity-10 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      </div>
  
      <!-- Toolbar -->
      <Toolbar class="bg-gray-900 bg-opacity-80 border-none fixed w-full z-5">
        <template #start>
          <img src="/src/assets/images/logo-muvs.png" alt="MUVS Logo" class="h-3rem" />
        </template>
        <template #end>
          <nav class="flex align-items-center">
            <ul class="list-none p-0 m-0 flex">
              <li v-for="item in navItems" :key="item.label" class="mr-4">
                <a :href="item.href" class="text-white font-medium no-underline hover:text-gray-200">{{ item.label }}</a>
              </li>
            </ul>
            <Button label="Iniciar Sesión" class="p-button-success" />
          </nav>
        </template>
      </Toolbar>
  
      <!-- Main content -->
      <div class="flex-grow-1 flex align-items-center justify-content-center pt-8 z-1 relative">
        <div class="container max-w-1200 mx-auto px-3">
          <div class="grid">
            <div class="col-12 lg:col-6 flex flex-column gap-4 p-4">
              <div class="flex flex-column bg-white bg-opacity-90 p-4 rounded-lg shadow-2">
                <h2 class="text-4xl font-bold text-gray-900 leading-tight mb-2">
                  Contáctanos
                </h2>
                <p class="text-2xl font-semibold text-gray-700 mb-4" style="font-style: italic;">Descubre cómo MUVS puede ayudarte. Estos son algunos ejemplos de lo que podemos hacer por ti:</p>
              </div>
              <ul class="flex flex-column gap-3 list-none p-0 m-0">
                <li v-for="(item, index) in services" :key="index" 
                    class="flex align-items-start p-3 border-round-lg bg-white bg-opacity-90 shadow-1">
                  <i class="pi pi-check-circle text-green-500 mr-3 flex-shrink-0 text-2xl"></i>
                  <div>
                    <span class="text-gray-900 font-bold text-lg">{{ item.title }}:</span>
                    <span class="text-gray-700 text-lg line-height-3"> {{ item.description }}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-12 lg:col-6 p-4">
              <Card class="w-full bg-white shadow-8">
                <template #title>
                  <h3 class="text-2xl font-bold text-gray-900 text-center mb-4">Envíanos un mensaje</h3>
                </template>
                <template #content>
                  <form @submit.prevent="submitForm" class="flex flex-column gap-4">
                    <div v-for="field in formFields" :key="field.id" class="flex flex-column gap-2">
                      <label :for="field.id" class="font-medium text-gray-700">{{ field.label }}</label>
                      <InputText 
                        v-if="field.type !== 'textarea'"
                        :id="field.id" 
                        v-model="formData[field.id]" 
                        :type="field.type" 
                        :placeholder="field.placeholder"
                        class="w-full"
                      />
                      <Textarea
                        v-else
                        :id="field.id"
                        v-model="formData[field.id]"
                        :placeholder="field.placeholder"
                        rows="5"
                        class="w-full"
                      />
                    </div>
                    <Button type="submit" label="Enviar mensaje" class="w-full bg-green-500 hover:bg-green-600 border-none" />
                  </form>
                </template>
              </Card>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="bg-gray-900 p-4 text-white z-1 relative">
        <div class="container mx-auto flex flex-wrap justify-content-between align-items-center">
          <div class="flex align-items-center mb-4 lg:mb-0">
            <img src="/src/assets/images/logo-muvs.png" alt="MUVS Logo" class="h-3rem mr-3" />
            <span class="text-sm">© 2024 All Rights Reserved</span>
          </div>
          <div class="text-sm mb-4 lg:mb-0">
            <p class="m-0">Dirección</p>
            <p class="m-0">6 calle este,</p>
            <p class="m-0">12 avenida, Puerto Cortés</p>
          </div>
          <div class="flex">
            <a href="#" class="text-white hover:text-gray-300 mr-4" aria-label="WhatsApp">
              <i class="pi pi-whatsapp text-2xl"></i>
            </a>
            <a href="#" class="text-white hover:text-gray-300 mr-4" aria-label="LinkedIn">
              <i class="pi pi-linkedin text-2xl"></i>
            </a>
            <a href="#" class="text-white hover:text-gray-300" aria-label="Instagram">
              <i class="pi pi-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Toolbar from 'primevue/toolbar';
  import Card from 'primevue/card';
  import InputText from 'primevue/inputtext';
  import Textarea from 'primevue/textarea';
  import Button from 'primevue/button';
  
  const navItems = [
    { label: 'Contacto', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Registrarse', href: '#' },
  ];
  
  const services = [
    { title: 'Demostraciones Personalizadas', description: 'Mostramos cómo nuestras soluciones se adaptan a tu negocio.' },
    { title: 'Reunión Presencial', description: 'Agenda una reunión en persona para discutir más a fondo tus necesidades y objetivos.' },
    { title: 'Configuración Sencilla', description: 'Puesta en marcha rápida y fácil de tu cuenta en nuestra plataforma para que puedas comenzar a disfrutar de nuestros servicios sin complicaciones.' },
    { title: 'Soporte Especializado', description: 'Asistencia dedicada para resolver tus problemas rápidamente.' },
  ];
  
  const formFields = [
    { id: 'fullName', type: 'text', label: 'Nombre completo', placeholder: 'Ingrese su nombre completo' },
    { id: 'email', type: 'email', label: 'Correo electrónico', placeholder: 'Ingrese su correo electrónico' },
    { id: 'phone', type: 'tel', label: 'Teléfono', placeholder: 'Ingrese su número de teléfono' },
    { id: 'message', type: 'textarea', label: 'Mensaje', placeholder: 'Escriba su mensaje aquí' },
  ];
  
  const formData = ref({});
  
  const submitForm = () => {
    console.log('Form submitted:', formData.value);
    // Aquí iría la lógica para enviar los datos del formulario
  };
  </script>
  
  <style scoped>
  @import 'primeflex/primeflex.css';
  
  .max-w-1200 {
    max-width: 1200px;
  }
  
  :deep(.p-toolbar) {
    padding: 1rem;
  }
  
  :deep(.p-card) {
    border-radius: 1rem;
  }
  
  :deep(.p-inputtext),
  :deep(.p-button) {
    border-radius: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .p-toolbar nav {
      display: none;
    }
  }
  </style>