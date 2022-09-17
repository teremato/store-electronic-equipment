<template>
    <app-header/>
</template>

<script>
import appHeader from '@/components/layout/header/app-header.vue'

export default {
    components: {
        ['app-header']: appHeader
    }
}
</script>

<style lang="scss">
    @import "@/app.scss";
</style>