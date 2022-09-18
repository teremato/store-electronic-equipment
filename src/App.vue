<template>
    <app-header/>
    <main-page/>
</template>

<script>
import mainPage from '@/screens/main/main-page.vue'
import appHeader from '@/components/layout/header/app-header.vue'

export default {
    components: {
        ['app-header']: appHeader,
        ['main-page']: mainPage
    }
}
</script>

<style lang="scss">
    @import "@/app.scss";
</style>