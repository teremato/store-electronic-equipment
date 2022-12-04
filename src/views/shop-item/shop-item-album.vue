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

<style src="@app-sass/pages/shop-item.scss" 
    lang="scss" 
    scoped >

</style>
