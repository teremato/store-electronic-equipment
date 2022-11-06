<template>
    <router-link class="search-item" 
        :to="`/games/${item.slug}`" >

        <div class="search-item-header">
            <h4>{{ item.title }}</h4>
            <div>{{ item.price + "Р." }}</div>
        </div>
        <img :src="item.main_photo" alt>
    </router-link>
</template>

<script>
export default {
    name: "app-search-item",
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
    .search-item {

        @include flex-vertical;
        justify-content: space-between;

        padding: $sp_5;
        margin-bottom: $sp_5;

        transition: $transition;
        background-color: transparent;

        &-header {
            @include flex-default;
            justify-content: space-between;

            padding: $sp_5;

            color: $white;
            background-color: $black;

            h4 { text-transform: uppercase; }
            &:hover { color: $main_red; }
        }

        img { @include box-size(auto, 100%) }
    }
</style>