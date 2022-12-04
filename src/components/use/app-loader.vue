<template>
    <div v-if="load">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        load: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>