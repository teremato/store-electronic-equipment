<template>
    <div v-if="load" class="shop-item-page">
        <shop-item-top :game="item"
            @game:like="changeLike"
            @game:favorite="changeFavorite" />
        <div class="shop-item-page-content">
            <shop-item-album
                :images="item.photos" />
            <shop-item-content 
                :data="item" />
        </div>
    </div>
</template>

<script>

import ShopItemTop from "@views/shop-item/shop-item-top.vue";
import ShopItemAlbum from "@views/shop-item/shop-item-album.vue";
import ShopItemContent from "@views/shop-item/shop-item-content.vue";
import { GET_GAME_ITEM } from "@store/actions/games-actions";

export default {
    name: "shop-item",
    data() {
        return {
            item: {},
            load: false,
            slug: this.$route.params.slug
        }
    },
    created() {

        const slug = this.$route.params.slug;
        
        Promise.all([
            this.getGameItem(slug),
        ])
        .catch((error) => console.log(error))
        .finally(() => this.load = true)
    },
    methods: {
        async getGameItem(slug) {

            await this.$store.dispatch(GET_GAME_ITEM, { slug: slug })
                .then(({ game }) => {
                    this.item = game;
                })
        },
        changeLike() {
            this.item.user_like = !this.item.user_like
        },
        changeFavorite() {
            this.item.user_favorite = !this.item.user_favorite
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
