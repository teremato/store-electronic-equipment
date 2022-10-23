<template>

    <div class="home__swiper">
        <Swiper
            :modules="swiper.modules"
            :navigation="swiper.navigation"
            :pagination="swiper.pagination"
            :autoplay="swiper.autoplay"
            :allow-touch-move="false"
            :loop="true"
            @slideChange="getCurrentIndex"
        >
            <swiper-slide v-for="(item, index) in slides" :key="index">
                <div class="swiper-slide">

                    <div class="slider__block">
                        <img class="slider__block-img" :src="item.img" alt>
                    </div>

                </div>
            </swiper-slide>

            <div class="swiper-pagination"></div>

            <div class="swiper-navigation">
                <button class="swiper-nav-prev">
                    <icon icon="arrow-left"/>
                </button>
                <button class="swiper-nav-next">
                    <icon icon="arrow-right"/>
                </button>
            </div>

        </Swiper>

    </div>

    <div class="home__slider-side">

        <div class="home__slider-side-info">
            <h5>{{ slides[currentSlide].title }}</h5>
            <p>{{ slides[currentSlide].text }}</p>
        </div>

        <button class="home__slider-side-btn"
            @mouseover="priceVision"
            @mouseout="priceVision"
        >
            {{ (slidePriceVisibility) ? slides[currentSlide].price + "Р" : "Перейти" }}
            <icon icon="arrow-right"/>
        </button>

    </div>

</template>

<script>

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
    name: 'app-slider',

    props: {
      slides: {
          type: Array,
          default: () => []
      }
    },

    data() {
        return {
            slidePriceVisibility: false,
            currentSlide: 0,

            swiper: {
                modules: [Navigation, Pagination, Autoplay],
                navigation: {
                    prevEl: '.swiper-nav-prev',
                    nextEl: '.swiper-nav-next'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletClass: 'swiper-pagination-block',
                    bulletActiveClass: 'swiper-pagination-block-active'
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                }
            }
        }
    },

    methods: {
        priceVision() {
            this.slidePriceVisibility = !this.slidePriceVisibility;
        },
        getCurrentIndex(swiper) {
            this.currentSlide = swiper.realIndex;
        }
    },

    components: {
        Swiper, SwiperSlide
    }
}
</script>

<style lang="scss">

    /* Слайдер */
    .home__swiper {
        @include box-size(auto, 75%);
        position: relative;
    }

    /* Содержимое слайдера */
    .slider__block {

        @include box-size(450px, 100%);
        position: relative;

        &-img { @include box-size(100%, 100%); }
    }

    /* Боковая панель слайдера */
    .home__slider-side {

        @include box-size(450px, 25%);
        @include flex-vertical;
        justify-content: space-between;

        padding: $pd_20 $pd_10;
        background-color: $black;

        &-info {
            color: $white;

            h5 {
                cursor: pointer;
                position: relative;
                margin-bottom: $mg_20;

                font-size: $font_size_l;
                text-transform: uppercase;

                transition: all .2s ease;

                &:hover { color: $main_red; }

                &::after {
                    content: '';
                    @include box-size(1px, 100%);
                    @include absolute-box(0, none, 0, -$mg_10);

                    background-color: $white;
                }

            }
            p { font-size: $font_size_xs; }
        }

        &-btn {
            @include default-btn(20px, 10px);
            @include flex-default;
            gap: 5px;

            border: 2px solid $white;
            transition: all .2s ease;

            @include icon(auto);

            &:hover {
                gap: 10px;
                border-color: $main_red;
            }
        }
    }
    /* Пагинация свайпера */
    .swiper-pagination-block {

        cursor: pointer;

        display: inline-block;
        margin: 0 10px;

        @include box-size(8px, 8px);

        border-radius: 50%;
        background-color: $white;
    }
    .swiper-pagination-block-active {
        opacity: 100%;
        background-color: $main_red;
    }
    /* Навигация свайпера */

    .swiper-nav-prev {
        @include home-slider-arrow($left: true);
    }
    .swiper-nav-next {
        @include home-slider-arrow($left: false);
    }

</style>
