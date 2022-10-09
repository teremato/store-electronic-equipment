<template>
    <div class="swiper-slide">

        <div class="slider__block">
            <div class="slider__block-info">
                <button class="slider__block-btn">
                    Показать
                    <icon icon="arrow-right-circle"/>
                </button>
            </div>
            <img class="slider__block-img" :src="slide.img" alt>
        </div>

    </div>
</template>

<script>

export default {
    name: 'app-slider-block',
    props: {
        slide: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}

</script>

<style lang="scss" scoped>
    .slider__block {

        position: relative;

        width: 100%;
        height: 450px;

        &-img {
            width: 100%;
            height: 100%;
        }

        &-info {
            position: absolute;

            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            
            display: flex;
            align-items: center;
            justify-content: center;

            padding-top: 10px;
            padding-bottom: 10px;

            .slider__block-btn {
                @include default-btn(30px, 10px);
                @include flex_default;

                gap: 5px;
                margin-bottom: 30px;

                border: 2px solid $white;

                .bi { margin: 0px; }

                &:hover {
                    border-color: $main_red;
                }
            }
        }
    }
</style>