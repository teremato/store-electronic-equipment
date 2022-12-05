<template>

    <loading :active="load" 
        :is-full-page="isFullPage"
        :lock-scroll="true"
        color="rgb(255, 025, 090)"
        opacity="0.7" />

</template>

<script>
import Loading from "vue-loading-overlay"
import 'vue-loading-overlay/dist/css/index.css';

export default {
    props: {
        load: {
            type: Boolean,
            default: false
        },
        isFullPage: {
            type: Boolean,
            default: true
        }
    },
    components: {
        Loading
    }
}
</script>

<style lang="scss" scoped >
</style>