import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import '@/assets/scss/app.scss';
import 'primevue/resources/themes/lara-light-green/theme.css'

document.addEventListener('DOMContentLoaded', () => {
    const $el = document.createElement('DIV');

    $el.id = 'jaaieditor-app'

    document.body.appendChild($el);

    const app = createApp(App);

    app.use(PrimeVue);
    app.mount('#jaaieditor-app');
})