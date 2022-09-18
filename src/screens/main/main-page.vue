<template>
  <main-page-slider/>
</template>

<script>
import mainPageSliderVue from './main-page-slider/main-page-slider.vue'

export default {
    name: 'main-page',
    components: {
      ['main-page-slider']: mainPageSliderVue
    }
}
</script>

<style>

</style>