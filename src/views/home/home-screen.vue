<template>

    <div class="home-page">

        <div class="home-page_main-slider">
            <app-slider class="home-page-swiper">
                <app-slider-block v-for="slide in slides" :key="slide.img"
                    :slide="slide"
                />
            </app-slider>
            <div class="home-page_slider-side">
                <div class="home-page_slider-side-info">
                    <h5>{{ slides[0].title }}</h5>
                    <p>{{ slides[0].text }}</p>
                </div>
                <button class="home-page_slider-slide-btn">
                    Перейти
                    <icon icon="arrow-right"/>
                </button>
            </div>
        </div>


    </div>
</template>

<script>

import appSlider from '@components/swiper/app-slider.vue'
import appSliderBlock from '@components/blocks/app-slider-block.vue'

export default {
    name: 'home-page',
    data() {
        return {
            /* Moko-data for testing */
            slides: [
                { 
                    img: 'https://i1.modland.net/i/5fbcd2b1dc19b/cyberpunk-2077-character-v-playstation-5-xbox-series-x-and-3840x2160-3030-lg_modland.jpg',
                    title: 'Cyberpank 2077',
                    text: `Действие игры происходит в 2077 году в Найт-Сити,
                        вымышленном североамериканском городе из вселенной Cyberpunk.
                        Игрок управляет настраиваемым протагонистом по имени Ви,
                        который работает наёмником и владеет навыками взлома и боя`
                },
                {
                    img: 'https://www.rpgnuke.ru/wp-content/uploads/2017/09/2563575675.jpg',
                    title: 'The withcer 3'
                },
                {
                    img: 'https://playlevel.ru/wp-content/uploads/2019/11/plague-tale-oboi.jpg',
                    title: 'A plague tale'
                },
                {
                    img: 'https://d1lss44hh2trtw.cloudfront.net/assets/article/2021/06/10/elden-ring-everything-you-need-to-know_feature.jpg',
                    title: 'Elden Ring'
                }
            ]
        }
    },
    components: { 
        appSlider,
        appSliderBlock
    },
}

</script>

<style lang="scss" scope>

    .home-page {
        width: $default_app_container;
        height: 1000px;

        margin: 0 auto;

        &_main-slider {

            @include box-size(auto, 100%);
            @include flex-default;
            @include box-shadow-default;

            margin: $mg_20 0px $mg_20 0px;

            .home-page-swiper {
                @include box-size(100%, 75%);
            }
            .home-page_slider-side {
                @include box-size(450px, 25%);
                @include flex-vertical;
                justify-content: space-between;

                padding: $pd_20 $pd_10;
                background-color: $black;

                &-info {
                    color: $white;

                    h5 {
                        position: relative;
                        margin-bottom: $mg_20;

                        font-size: $font_size_l;
                        text-transform: uppercase;

                        &::after {
                            content: '';
                            @include box-size(1px, 100%);
                            @include absolute-box(0, none, 0, -$mg_10);

                            background-color: $white;
                        }

                    }
                    p {
                        font-size: $font_size_xs;
                    }
                }

                button {
                    @include default-btn(20px, 10px);
                    @include flex-default;
                    gap: 5px;

                    border: 2px solid $white;
                    transition: all .2s ease;

                    .bi { margin: 0; }

                    &:hover {
                        gap: 10px;
                        border-color: $main_red;
                    }
                }
            }
        }
    }

</style>