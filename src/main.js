import { createApp } from 'vue'
import App from './app.vue'

import appComponents from './components';


const app = createApp(App);


appComponents.forEach((el) => {
    app.component(el.name, el.component)
})

app.mount('#app')