<template>
    <div class="modal__wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "app-modal-container"
}
</script>

<style lang="scss" scoped>
    .modal__wrapper {
        @include box-size(100vh, 100vw);
        position: fixed;
        left: 0;
        top: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 9999;
        background-color: rgba($color: #000000, $alpha: 0.6);
    }
</style>