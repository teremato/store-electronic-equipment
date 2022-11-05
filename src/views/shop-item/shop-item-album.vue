<template>
    <div class="shop-item-album-wrapper">
        <h3 class="title">Фотографии</h3>
        <div class="shop-item-album">
    
            <template v-for="(item, index) in images" :key="index">
    
                <div class="shop-item-album-item">
                    <img :src="item.image" alt>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "shop-item-album",
    props: {
        images: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>

    .shop-item-album-wrapper {
        @include box-size(100%, 53%);
    }
    .shop-item-album {
        @include box-size(100%, 100%);
        
        display: flex;
        flex-wrap: wrap;
        gap: $sp_10;

        &-item {
            cursor: pointer;
            @include box-size(150px, 250px);

            img {
                @include box-size(100%, 100%);
            }
        }
    }
    .title {
        @include box-size(100%, 100%);

        text-align: center;
        margin-bottom: $sp_20;
    }
</style>
