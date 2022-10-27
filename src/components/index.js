/* Layouts */
import appHeaderComponent from '@components/app-header.vue'
import appFooterComponent from '@components/app-footer.vue'

/* Utils */
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';
import { SwiperSlide } from 'swiper/vue'


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
    },
    {
        name: 'swiper-slide',
        component: SwiperSlide
    }
]
