<template>
    <div class="swiper-slide">

        <div class="slider__block">
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

        @include box-size(450px, 100%);
        position: relative;

        &-img {
            @include box-size(100%, 100%);
        }
    }
</style>
