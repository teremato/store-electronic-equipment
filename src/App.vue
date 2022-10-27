<template>
    <div class="layout">
        <app-header ref="app-header" />
        <home-screen />
        <app-footer />
    </div>

</template>

<script>
import homeScreen from '@views/home/home-screen.vue'

export default {
    components: { homeScreen },
}
</script>

<style lang="scss">
    @import '@/assets/scss/main.scss';

    .layout {
        position: relative;
        min-height: 100vh;
    }
</style>
