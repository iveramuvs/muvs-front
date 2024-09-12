<template>
    <div class="min-h-screen bg-cover bg-center flex align-items-center justify-content-center" :style="{ backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2019-S7Jq9LRdNrhHPgH0K603OVRe2dM7KR.png')` }">
      <div class="container">
        <div class="flex flex-column lg:flex-row align-items-center justify-content-center">
          <div class="lg:w-6 flex flex-column gap-2 p-4">
            <img class="logo-muvs" src="/src/assets/images/logo-muvs.png" alt="MUVS Logo">
            <div class="flex flex-column ">
              <h2 class="text-4xl font-bold text-900 leading-tight mb-2">
                Contrata nuestro servicio de transporte impulsado por tecnología
              </h2>
              <p class="text-2xl font-semibold text-600 mb-4" style="font-style: italic;">Recibe los siguientes beneficios:</p>
            </div>
            <ul class="flex flex-column gap-3 list-none p-0 m-0">
            <li v-for="(item, index) in benefits" :key="index" 
                :class="['flex align-items-start p-2 border-round-lg']">
              <i class="pi pi-check-circle text-green-500 mr-3 flex-shrink-0 text-2xl"></i>
              <span class="text-700 text-lg line-height-3">{{ item }}</span>
            </li>
          </ul>
          </div>
          <div class="lg:w-6 p-4">
            <Card class="w-full bg-white-alpha-90 backdrop-blur-sm shadow-8">
              <template #title>
                <h3 class="text-2xl font-bold text-900 text-center mb-4">Crea tu cuenta de MUVS</h3>
              </template>
              <template #content>
                <form @submit.prevent="submitForm" class="flex flex-column gap-4">
                  <span v-for="field in formFields" :key="field.id" class="p-float-label">
                    <InputText 
                      :id="field.id" 
                      v-model="formData[field.id]" 
                      :type="field.type" 
                      class="w-full"
                    />
                    <label :for="field.id">{{ field.placeholder }}</label>
                  </span>
                  <Button type="submit" label="Crear cuenta" class="w-full bg-green-500 hover:bg-green-600 border-none" />
                </form>
                <p class="text-center text-sm mt-4">
                  ¿Ya tienes una cuenta?
                  <a href="#" class="text-green-500 font-bold hover:underline">Acceso</a>
                </p>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Card from 'primevue/card';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  
  const benefits = [
    "Accede a una amplia variedad de trabajos de transporte disponibles en nuestra plataforma.",
    "Moderniza tu operación con nuestra tecnología de calidad mundial",
    "Automatiza tareas administrativas y ahorra tiempo valioso",
    "Recibe asistencia y soporte dedicados para tus necesidades",
    "Potencia el crecimiento de tu negocio de transporte"
  ];
  
  const formFields = [
    { id: 'fullName', type: 'text', placeholder: 'Nombre y apellido' },
    { id: 'email', type: 'email', placeholder: 'Correo electrónico' },
    { id: 'phone', type: 'tel', placeholder: 'Número de teléfono' },
    { id: 'rtn', type: 'text', placeholder: 'RTN de la empresa' },
    { id: 'company', type: 'text', placeholder: 'Nombre de la empresa' },
    { id: 'password', type: 'password', placeholder: 'Contraseña' },
    { id: 'confirmPassword', type: 'password', placeholder: 'Confirmar contraseña' },
  ];
  
  const formData = ref({});
  
  const submitForm = () => {
    console.log('Form submitted:', formData.value);
    // Aquí iría la lógica para enviar los datos del formulario
  };
  </script>
  
  <style scoped>
  @import 'primeflex/primeflex.css';
  
  .logo-muvs {
    width: 250px;
    object-fit: contain;
  }
  
  :deep(.p-card) {
    border-radius: 1rem;
  }
  
  :deep(.p-inputtext) {
    border-radius: 0.5rem;
  }
  
  :deep(.p-button) {
    border-radius: 0.5rem;
  }
  </style>