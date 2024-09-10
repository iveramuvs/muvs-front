// import './assets/main.css'

import { createApp } from 'vue'
import App from './views/App.vue'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/primevue.css'
import ToastService from 'primevue/toastservice';
import router from './router'
import '/node_modules/primeflex/primeflex.css';

// import App from './views/Login/LoginComponent.vue'


const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);
app.use(router);
app.mount('#app')
