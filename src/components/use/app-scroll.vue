<template>
    <button
        @click="scrollToTop"
        class="scroll-arrow"
        :class="{ 'scroll-arrow-hide': vision }"
    >
        <icon icon="arrow-up-short"/>
    </button>
</template>

<script>

export default {
    name: "app-scroll",
    props: ['target', 'vision'],
    methods: {
        scrollToTop() {
            this.target.scrollIntoView({
                behavior: 'smooth',
            })
        },
    }

}

</script>

<style lang="scss" scoped>
    .scroll-arrow {
        @include btn-input;
        @include icon(25px);
        cursor: pointer;
        z-index: 99;
        opacity: 100%;

        position: fixed;
        right: 0;
        bottom: 0;

        margin: $sp_20;
        padding: $sp_10;
        border-radius: 5px;

        color: $white;
        background-color: $black;
        transition: $transition;

        &:hover { color: $main_red }

        &.scroll-arrow-hide {
            cursor: default;
            opacity: 0;
        }
    }
</style>
