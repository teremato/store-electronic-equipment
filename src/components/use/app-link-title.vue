<template>
    <router-link :to="path" class="link_title" >

        <h3 :class="{'main_title': isMain}" >
            {{ title }}
            <slot name="subtitle"></slot>
        </h3>
    </router-link>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '',
                reqiured: true
            },
            path: {
                type: String,
                default: '/'
            },
            isMain: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .link_title {
        transition: $transition;
        &:hover { color: $main_red }
    }
    .main_title {
        margin-bottom: $sp_20;
    }
    
</style>