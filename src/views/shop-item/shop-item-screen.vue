<template>
    <div v-if="load" class="shop-item-page">
        <shop-item-top :game="item"/>
        <div class="shop-item-page-content">
            <shop-item-album
                :images="photos" />
            <shop-item-content/>
        </div>
    </div>
</template>

<script>

import ShopItemTop from "@views/shop-item/shop-item-top.vue";
import ShopItemAlbum from "@views/shop-item/shop-item-album.vue";
import ShopItemContent from "@views/shop-item/shop-item-content.vue";

export default {
    name: "shop-item",
    data() {
        return {
            item: {},
            photos: [],
            load: false,
            slug: this.$route.params.slug
        }
    },
    mounted() {

        const slug = this.$route.params.slug;
        
        Promise.all([
            this.getGameItem(slug),
            this.getGameItemAlbum(slug)
        ])
        .catch((error) => console.log(error))
        .finally(() => this.load = true)
    },
    methods: {
        async getGameItem(slug) {

            await this.$store.dispatch('getGameItem', { slug: slug })
                .then((data) => {
                    this.item = data;
                })
        },
        
        async getGameItemAlbum(slug) {

            await this.$store.dispatch('getGameItemAlbum', {slug: slug})
                .then((data) => {
                    this.photos = data
                })
        }
    },
    components: {
        ShopItemContent,
        ShopItemAlbum,
        ShopItemTop
    },
}

</script>

<style src="@app-sass/pages/shop-item.scss"
    lang="scss"
    scoped >
    
</style>
