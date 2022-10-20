<template>

    <div class="home-page">

        <div class="home-page_main-slider">

            <app-slider @getIndex="getCurrentSlide" class="home-page-swiper">
                <app-slider-block v-for="slide in slides" :key="slide.img"
                    :slide="slide"
                />
            </app-slider>

            <div class="home-page_slider-side">

                <div class="home-page_slider-side-info">
                    <h5>{{ slides[currentSlide].title }}</h5>
                    <p>{{ slides[currentSlide].text }}</p>
                </div>

                <button class="home-page_slider-slide-btn"
                    @mouseover="priceVision"
                    @mouseout="hidePrice"
                >
                    {{ (slidePriceVisibility) ? slides[currentSlide].price + "Р" : "Перейти" }}
                    <icon icon="arrow-right"/>
                </button>

            </div>
        </div>

        <div class="home-page_main-part">
            <home-sidebar/>
            <div class="home-page_main-part-content">
                <home-content-block
                    @getFilter="getFilterType"
                    :current-filter="filterType"
                    :data="shopItem"
                />
                <home-recommend-block
                    :news="slides"
                />
            </div>
        </div>

    </div>

</template>

<script>

import appSlider from '@components/swiper/app-slider.vue'
import appSliderBlock from '@components/blocks/app-slider-block.vue'

import homeSidebar from "@views/home/home-sidebar";
import HomeContentBlock from "@views/home/home-content-block";
import homeRecommendBlock from "@views/home/home-recommend-block";

export default {
    name: 'home-page',
    data() {
        return {
            /* fake -> data */
            slides: [
                {
                    img: 'https://i1.modland.net/i/5fbcd2b1dc19b/cyberpunk-2077-character-v-playstation-5-xbox-series-x-and-3840x2160-3030-lg_modland.jpg',
                    title: 'Cyberpank 2077',
                    text: `Действие игры происходит в 2077 году в Найт-Сити,
                        вымышленном североамериканском городе из вселенной Cyberpunk.
                        Игрок управляет настраиваемым протагонистом по имени Ви,
                        который работает наёмником и владеет навыками взлома и боя`,
                    price: 1990
                },
                {
                    img: 'https://www.rpgnuke.ru/wp-content/uploads/2017/09/2563575675.jpg',
                    title: 'The withcer 3',
                    text: 'Это третья игра, действие которой происходит в литературной вселенной книжной серии «Ведьмак»,' +
                        ' созданной польским писателем Анджеем Сапковским, а также последняя,' +
                        ' которая повествует о приключениях Геральта из Ривии',
                    price: 599
                },
                {
                    img: 'https://playlevel.ru/wp-content/uploads/2019/11/plague-tale-oboi.jpg',
                    title: 'A plague tale',
                    text: 'Главные герои это брат и сестра Гуго и Амиция, которые прячутся от инквизиции.' +
                        ' Им предстоит пройти через раздираемую войной и чумой Францию, повстречаться с другими сиротами,' +
                        ' а также любой ценой избежать встреч с инквизиторами и с полчищами чумных крыс, что рыщут по стране',
                    price: 799
                },
                {
                    img: 'https://d1lss44hh2trtw.cloudfront.net/assets/article/2021/06/10/elden-ring-everything-you-need-to-know_feature.jpg',
                    title: 'Elden Ring',
                    text: 'Сюжет основывается на цикле романов Джорджа Р.Р.' +
                        ' Мартина "Песнь Льда и Пламени", который послужил основой телесериала "Игра престолов",' +
                        ' мрачной фэнтези-мифологии стран Скандинавии.' +
                        ' Игровой персонаж должен обследовать огромные территории,' +
                        ' замки с очень хитроумной планировкой, передвигаясь пешком или верхом на лошади,' +
                        ' сражаясь со страшными и мощными боссами.',
                    price: 1499
                }
            ],
            shopItem: [
                {
                    main_photo: 'https://9to5google.com/wp-content/uploads/sites/4/2021/02/terraria_game.jpg?resize=1024   ',
                    price: 100,
                    discount: 0
                },
                {
                    main_photo: 'https://pic.rutubelist.ru/video/23/01/23013871c3a40071092685aa0d43d034.jpg',
                    price: 133,
                    discount: 0
                },
                {
                    main_photo: 'https://i.playground.ru/p/eCuZaO_P8yIumEfza3V_tQ.jpeg',
                    price: 1999,
                    discount: 0
                },
                {
                    main_photo: 'https://i.playground.ru/e/2v9TGshHqew4EbRegevX0g.jpeg',
                    price: 999,
                    discount: 0
                },
                {
                    main_photo: 'https://galaxyit.org/wp-content/uploads/2022/01/cnlbipfliph4zommbffh0g1.jpeg',
                    price: 1399,
                    discount: 0
                },
                {
                    main_photo: 'https://vgtimes.ru/uploads/gallery/main/149582/red-dead-redemption-2-art.jpg',
                    price: 60,
                    discount: 0
                },
                {
                    main_photo: 'https://images8.alphacoders.com/120/1202121.jpg',
                    price: 2499,
                    discount: 0
                },
                {
                    main_photo: 'https://gamingbolt.com/wp-content/uploads/2019/06/star-wars-jedi-fallen-order-image.jpg',
                    price: 3999,
                    discount: 0
                },
                {
                    main_photo: 'https://picfiles.alphacoders.com/417/417221.jpg',
                    price: 799,
                    discount: 0
                },
            ],
            recommended: [
                {}
            ],
            currentSlide: 0,
            slidePriceVisibility: false,
            filterType: 'fil_all'
        }
    },
    methods: {
        getCurrentSlide(event) {
            this.currentSlide = event;
        },
        priceVision() {
            this.slidePriceVisibility = true;
        },
        hidePrice() {
            this.slidePriceVisibility = false;
        },
        getFilterType(type) {
            this.filterType = type;
        }
    },
    components: {
        appSlider,
        appSliderBlock,
        homeSidebar,
        HomeContentBlock,
        homeRecommendBlock
    },
}

</script>

<style lang="scss" scoped>
    @import "@app-sass/pages/home.scss";
</style>
