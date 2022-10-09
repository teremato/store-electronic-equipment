<template>
    <div class="swiper-container swiper-styles app-swiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>

        <div ref="pagination" class="swiper-pagination"></div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'

export default {
    name: 'app-slider',
    data() {
        return {
            settings: {}
        }
    },
    mounted() {
        new Swiper(this.$el, this.settings = {
            speed: 700,
            slidesPerView: 1,
            loop: true,
            allowTouchMove: false,

            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },

            modules: [ Navigation, Pagination, Autoplay ],
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                bulletClass: 'swiper-pagination-app-bullet',
                bulletActiveClass: 'swiper-pagination-app-bullet-activve'
            }
        })
    }
}

</script>

<style lang="scss">
    .app-swiper {
        position: relative;
        overflow: hidden;

        .swiper-button-next,
        .swiper-button-prev {
            
            height: 100%;
            top: 0;
            right: 0px;

            margin: 0px 10px;

            font-size: $font_size_m;
            color: $white;

            transition: margin .2s ease;

            &::after { 
                font-size: $font_size_l; 
                padding: 20px 30px;

                border-radius: 15px 0px 0px 15px;

                background-color: $black;

                opacity: 30%;

                transition: padding .2s ease;

            }
            &:hover {

                margin: 0px 25px;
                color: $main_red;
                
                &::after {
                    opacity: 100%;

                    padding: 20px 40px;
                    
                }
            }
        }
        .swiper-button-prev {
            left: 0px;

            &::after {
                border-radius: 0px 15px 15px 0px;
            }
        }

    }

    .swiper-pagination {
        bottom: 11px !important;
    }

    span.swiper-pagination-app-bullet {
        cursor: pointer;

        display: inline-block;

        margin: 0px 10px;
        width: 8px;
        height: 8px;

        border-radius: 50%;

        background-color: $white;

        &.swiper-pagination-app-bullet-activve {
            opacity: 100%;
            background-color: $main_red;
        }
    }

</style>