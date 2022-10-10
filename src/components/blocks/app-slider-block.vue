<template>
    <div class="swiper-slide">

        <div class="slider__block">
            <div class="slider__block-info">

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
        }
    }
</style>