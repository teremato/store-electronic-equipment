import { createApp } from 'vue'
import router from './router'
import store from './store'

import App from '@/App.vue'
import appComponents from './components';


const app = createApp(App)
    .use(store)
    .use(router);


appComponents.forEach((el) => {
    app.component(el.name, el.component)
})

app.mount('#app')
