import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import Notifications from '@kyvg/vue3-notification'

import App from '@/App.vue'
import appComponents from '@components';


const app = createApp(App)
    .use(router)
    .use(store)
    .use(Notifications);


appComponents.forEach((el) => {
    app.component(el.name, el.component)
})

app.mount('#app')
