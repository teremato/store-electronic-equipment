<template>

    <div v-if="load" class="home-page">

        <div v-if="slides.length > 0" class="home-page_main-slider">
            <app-home-slider v-if="slides" :slides="slides"/>
        </div>

        <div class="home-page_main-part">

            <home-sidebar/>

            <div v-if="shopItems.length > 0"
                class="home-page_main-part-content" >

                <home-content-block
                    @getFilter="getFilterType"
                    :current-filter="filterType"
                    :data="shopItems" />

                <home-recommend-block
                    :reccomend="slides" />

            </div>
        </div>

    </div>

</template>

<script>

import appHomeSlider from '@components/swiper/app-home-slider.vue'

import homeSidebar from "@views/home/home-sidebar.vue";
import HomeContentBlock from "@views/home/home-content-block.vue";
import homeRecommendBlock from "@views/home/home-recommend-block.vue";
import { GET_GAMES } from '@store/actions/games-actions';

export default {
    name: 'home-page',
    data() {
        return {
            slides: [],
            shopItems: [],
            recommended: [],

            currentSlide: 0,
            slidePriceVisibility: false,
            filterType: 'created_at',
            
            load: false,
        }
    },
    created() {

        Promise.all([
            this.getSlides(),
            this.getShopItems()
        ])
        .catch((e) => console.log(e))
        .finally(() => this.load = true)
    },
    methods: {
        getFilterType(type) {
            this.filterType = type;
        },

        async getSlides() {
            await this.$store.dispatch(GET_GAMES, { sort: 'title', per_page: 4 })
                .then(({ data }) => {
                    this.slides = data;
                })
        },

        async getShopItems() {
            await this.$store.dispatch(GET_GAMES, { sort: this.filterType})
                .then(({ data }) => {
                    this.shopItems = data;
                })
        }
    },
    watch: {
        filterType: {
            handler() {
                this.getShopItems()
            }
        }
    },
    components: {
        appHomeSlider,
        homeSidebar,
        HomeContentBlock,
        homeRecommendBlock
    },
}

</script>

<style src="@app-sass/pages/home.scss"
    lang="scss"
    scoped >

</style>
