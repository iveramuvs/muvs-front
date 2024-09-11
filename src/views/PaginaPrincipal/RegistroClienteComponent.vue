<template>
  <div class="flex flex-column min-h-screen">
    <!-- Header -->
    <header class="fixed top-0 left-0 w-full z-5">
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
              <Button label="Blog" class="header-button" />
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
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';

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