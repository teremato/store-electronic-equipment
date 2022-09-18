<template>
  <section class="main-slider" :style="{backgroundImage: 'url(https://www.digiseller.ru/preview/730077/p1_3179072_8c856aaa.jpg)',}">

    <div class="slider-arrows">
        <button class="slider-arrows__left">
            <BootstrapIcon icon="arrow-left" size="2x"/>
        </button>
        <button class="slider-arrows__right">
            <BootstrapIcon icon="arrow-right" size="2x"/>
        </button>
    </div>

    <div class="container">
        
    </div>

  </section>
</template>

<script>
export default {
    name: 'main-page-slider'
}
</script>

<style lang="scss" scoped>
    @import './main-page-slider.scss';
</style>