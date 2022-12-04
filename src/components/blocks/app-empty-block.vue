<template>
    <div class="empty_block">
        <h4>{{ label }}</h4>
    </div>
</template>

<script>

export default {
    name: "app-empty-block",
    props: {
        label: {
            type: String,
            default: "Тут ничего нет"
        }
    }
}
</script>

<style lang="scss" scoped>
    .empty_block {
        @include box-size(100%, 100%);
        @include flex-default;
        justify-content: center;

        margin: $sp_20 0;
        padding: 0 $sp_20 $sp_20 $sp_20;

        border-bottom: 2px solid $black;

        font-size: $font_size_xs;
        color: gray;
    }
</style>