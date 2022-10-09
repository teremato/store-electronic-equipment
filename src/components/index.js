/* Layouts */
import appHeaderComponent from '@components/app-header.vue'
import appFooterComponent from '@components/app-footer.vue'

/* Utils */
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';


export default [
    /* Layouts */
    {
        name: 'app-header',
        component: appHeaderComponent
    },
    {
        name: 'app-footer',
        component: appFooterComponent
    },
    /* Utils */
    {
        name: 'icon',
        component: BootstrapIcon
    }
]