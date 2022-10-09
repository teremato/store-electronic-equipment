<template>

    <app-slider>
    <app-slider-block v-for="slide in slides" :key="slide.img"
        :slide="slide"
    />
    </app-slider>

    <div class="home-page">

    </div>
</template>

<script>

import appSlider from '@components/swiper/app-slider.vue'
import appSliderBlock from '@components/blocks/app-slider-block.vue'

export default {
    name: 'home-page',
    data() {
        return {
            message: 'hello',
            slides: [
                { img: 'https://a-static.besthdwallpaper.com/kiberpank-2077-logotip-oboi-1920x600-22065_57.jpg' },
                { img: 'https://a-static.besthdwallpaper.com/the-witcher-3-wild-hunt-symbol-tapet-1920x600-14938_57.jpg' },
                { img: 'https://i.imgur.com/NZTRBwW.jpg' }
            ]
        }
    },
    components: { 
        appSlider, appSliderBlock
    },
}

</script>

<style lang="scss" scope>

    .home-page {
        width: $default_app_container;
        height: 1000px;
        margin: 0 auto;
    }

</style>