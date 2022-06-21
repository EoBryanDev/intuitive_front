/* eslint-disable */
import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

import InputMask from 'primevue/inputmask';
import ConfirmDialog  from 'primevue/confirmdialog';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import Tooltip from 'primevue/tooltip'



import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons



const app = createApp(App);

app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService)

app.component('InputMask', InputMask)
app.component('ConfirmDialog', ConfirmDialog)
app.component('Button', Button)
app.component('Toast', Toast)


app.directive('tooltip', Tooltip)

app.mount('#app')