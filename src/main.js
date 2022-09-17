import { createApp } from 'vue'
import App from './app.vue'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';


const app = createApp(App);


app.component('BootstrapIcon', BootstrapIcon);


app.mount('#app')
