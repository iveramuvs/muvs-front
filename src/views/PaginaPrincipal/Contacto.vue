<template>
  <Toast />
    <div class="flex flex-column min-h-screen">
      <!-- Header -->
      <header class=" fixedabsolut top-0 left-0 w-full z-5">
        <div class="card bg-transparent">
          <Toolbar class="bg-transparent border-none px-3 py-3 lg:px-6 lg:py-4">
            <template #start>
              <div class="flex items-center gap-2">
                <img class="logo-muvs" src="/src/assets/images/logo-muvs.png" alt="MUVS Logo">
              </div>
            </template>
            <template #end>
              <div class="flex items-center gap-2">
                <router-link to="/contacto" custom v-slot="{ navigate, href }">
                  <Button :href="href" @click="navigate" label="Contacto" class="header-button" />
                </router-link>
                <router-link to="/registro" custom v-slot="{ navigate, href }">
                  <Button :href="href" @click="navigate" label="Registrarse" class="header-button" />
                </router-link>
                <router-link to="/login" custom v-slot="{ navigate, href }">
                  <Button :href="href" @click="navigate" label="Iniciar Sesión" class="header-button login-button" />
                </router-link>
              </div>
            </template>
          </Toolbar>
        </div>
      </header>
  
      <!-- Main content -->
      <div class="flex-grow-1 bg-cover bg-center flex align-items-center justify-content-center pt-8" :style="{ backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2019-S7Jq9LRdNrhHPgH0K603OVRe2dM7KR.png')` }">
        <div class="container max-w-1200 mx-auto px-3">
          <div class="flex flex-column lg:flex-row align-items-center justify-content-center">
            <div class="lg:w-6 flex flex-column gap-1 p-4">
              <img class="logo-muvs mb-2 logo-medium" src="/src/assets/images/logo-muvs.png" alt="MUVS Logo">
              <div class="flex flex-column bg-white-alpha-70 p-3 border-round-lg mb-2">
                <!-- <h2 class="text-4xl font-bold text-900 leading-tight mb-2">
                  Descubre cómo MUVS puede ayudarte. Estos son algunos ejemplos de lo que podemos hacer por ti:
              </h2> -->
                <p class="text-2xl font-semibold text-700 m-0" style="font-style: italic;">Descubre cómo MUVS puede ayudarte. Estos son algunos ejemplos de lo que podemos hacer por ti:</p>
              </div>
              <ul class="flex flex-column gap-2 list-none p-0 m-0">
                <li v-for="(item, index) in services" :key="index" 
                    class="flex align-items-start p-3 border-round-lg bg-white-alpha-70">
                  <i class="pi pi-check-circle text-green-500 mr-3 flex-shrink-0 text-2xl"></i>
                  <div>
                    <span class="text-900 font-bold text-lg">{{ item.title }}:</span>
                    <span class="text-700 text-lg line-height-3"> {{ item.description }}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="lg:w-6 p-4">
              <Card class="w-full bg-white-alpha-90 backdrop-blur-sm shadow-8">
                <template #title>
                  <h3 class="text-2xl font-bold text-900 text-center mb-4">Envíanos un mensaje</h3>
                </template>
                <template #content>
                  <form @submit.prevent="submitForm" class="flex flex-column gap-4">
                    <div v-for="field in formFields" :key="field.id" class="flex flex-column gap-2">
                      <label :for="field.id" class="font-medium text-900">{{ field.label }}</label>
                      <InputText 
                        v-if="field.type !== 'textarea'"
                        :id="field.id" 
                        v-model="formData[field.id]" 
                        :type="field.type" 
                        :placeholder="field.placeholder"
                        class="w-full"
                        required
                        :maxlength="field.id === 'phone' ? 10 : undefined"
                      @input="field.id === 'phone' ? validatePhone($event) : null"
                      />
                      <Textarea
                        v-else
                        :id="field.id"
                        v-model="formData[field.id]"
                        :placeholder="field.placeholder"
                        rows="5"
                        class="w-full"
                        required
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
      <footer class="bg-footer text-gray-800">
        <div class="container">
          <div class="footer-wrapper py-4 px-3">
            <div class="grid">
              <div class="col-12 md:col-4 flex align-items-center justify-content-center md:justify-content-start">
                <img class="logo-muvs" src="/src/assets/images/logo-muvs.png" alt="MUVS Logo">
              </div>
              <div class="col-12 md:col-4 flex flex-column align-items-center justify-content-center mt-4 md:mt-0">
                <h3 class="mb-2">Dirección</h3>
                <p class="m-0">6 calle este,</p>
                <p class="m-0">12 avenida, Puerto Cortés</p>
              </div>
              <div class="col-12 md:col-4 flex align-items-center justify-content-center md:justify-content-end mt-4 md:mt-0">
                <div class="social-media-logo">
                  <a href="https://wa.me/50488960857" class="mr-3"><i class="pi pi-whatsapp text-2xl"></i></a>
                  <a href="https://linkedin.com/company/muvsolutions" class="mr-3"><i class="pi pi-linkedin text-2xl"></i></a>
                  <a href="https://instagram.com/muvssolutions"><i class="pi pi-instagram text-2xl"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Card from 'primevue/card';
  import InputText from 'primevue/inputtext';
  import Textarea from 'primevue/textarea';
  import Button from 'primevue/button';
  import Toolbar from 'primevue/toolbar';
  import { useToast } from 'primevue/usetoast';
  import Toast from 'primevue/toast';
  import axios from 'axios';

  const toast = useToast();
  
  const services = [
    { title: 'Demostraciones Personalizadas', description: 'Mostramos cómo nuestras soluciones se adaptan a tu negocio.' },
    { title: 'Reunión Presencial', description: 'Agenda una reunión en persona para discutir más a fondo tus necesidades y objetivos.' },
    { title: 'Configuración Sencilla', description: 'Puesta en marcha rápida y fácil de tu cuenta en nuestra plataforma para que puedas comenzar a disfrutar de nuestros servicios sin complicaciones.' },
    { title: 'Soporte Especializado', description: 'Asistencia dedicada para resolver tus problemas rápidamente.' },
  ];
  
  const formFields = [
    { id: 'fullName', type: 'text', label: 'Nombre y apellido', placeholder: 'Ingrese su nombre completo' },
    { id: 'email', type: 'email', label: 'Correo electrónico', placeholder: 'Ingrese su correo electrónico' },
    { id: 'phone', type: 'tel', label: 'Número de teléfono', placeholder: 'Ingrese su número de teléfono' },
    { id: 'company', type: 'text', label: 'Nombre de la empresa', placeholder: 'Ingrese el nombre de su empresa' },
    { id: 'message', type: 'textarea', label: 'Mensaje', placeholder: 'Escriba su mensaje aquí' },
  ];
  
  let formData = ref({});
  
  let submitForm = async () => {
  try {

    // Construir el objeto JSON con los datos del formulario

    let jsonData = {
      s_nombre: formData.value.fullName,
      s_correo: formData.value.email,
      s_numero: formData.value.phone,
      s_empresa: formData.value.company,
      s_mensaje: formData.value.message
    };
    // Aquí iría la petición Axios
    // let response = await axios.post('URL_DE_TU_API', jsonData);






    // console.log('Respuesta del servidor:', response.data);
    // Por ahora, solo mostraremos los datos en la consola
    // console.log('Datos del formulario:', jsonData);
    // Redirigir al usuario (esto debería hacerse después de una respuesta exitosa del servidor)
    // router.push('/home');


  } catch (error) {
    toast.add({ severity: 'error', summary: 'Error de conexión', detail: 'Ocurrió un error interno', life: 3000 });
  }
};

  const validatePhone = (event) => {
  formData.value.phone = event.target.value.replace(/\D/g, '').slice(0, 10);
};

  </script>
  
  <style scoped>
  @import 'primeflex/primeflex.css';

  @media screen and (max-width: 992px){
  .logo-medium{
    display: none;
  }

  }
  
  .fixedabsolut{
    position: absolute !important;
  }

  .logo-muvs {
    width: 250px;
    object-fit: contain;
  }
  
  .max-w-1200 {
    max-width: 1400px;
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
  
  :deep(.p-card-content) {
    padding-top: 0;
  }
  
  /* Estilos para el header */
  header .card {
    box-shadow: none;
  }
  
  header :deep(.p-toolbar) {
    background: transparent;
  }
  
  .header-button {
    background-color: transparent;
    color: #3C3C3B;
    border: 1px solid transparent;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .header-button:hover {
    background-color: #F1F5F9;
    border-color: #F1F5F9;
    color: #3C3C3B;
  }
  
  .header-button:focus {
    box-shadow: 0 0 0 2px rgba(241, 245, 249, 0.5);
  }
  
  .login-button {
    background-color: #39A935;
    color: white;
    border: 1px solid #39A935;
  }
  
  .login-button:hover {
    background-color: #F1F5F9;
    color: #39A935;
    border-color: #39A935;
  }
  
  /* Estilos responsivos */
  @media screen and (max-width: 768px) {
    header :deep(.p-toolbar) {
      flex-direction: column;
      align-items: center;
    }
  
    header :deep(.p-toolbar-group-start),
    header :deep(.p-toolbar-group-end) {
      margin: 0.5rem 0;
    }
  
    .logo-muvs {
      width: 200px;
    }
  }
  
  /* Ajustes para el footer */
  .bg-footer {
    background-color: #EFF6FA;
  }
  
  footer .logo-muvs {
    width: 200px;
  }
  
  footer h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  footer p {
    font-size: 0.9rem;
  }
  
  footer .social-media-logo a {
    color: #3C3C3B;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  footer .social-media-logo a:hover {
    color: #39A935;
  }
  </style>