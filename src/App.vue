<template>
    
    <div class="layout">
        <app-header ref="app-header" />
        <router-view  :key="$route"/>
        <app-footer />
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
    @import '@/assets/scss/main.scss';

    .layout {
        position: relative;
        min-height: 100vh;

        padding-bottom: 100px;
        transition: $transition;
    }
</style>
