<template>
    <div class="shop-item-page">
        <shop-item-top :game="data"/>
        <div class="shop-item-page-content">
            <shop-item-album/>
            <shop-item-content/>
        </div>
    </div>
</template>

<script>

import ShopItemTop from "@views/shop-item/shop-item-top";
import ShopItemAlbum from "@views/shop-item/shop-item-album";
import ShopItemContent from "@views/shop-item/shop-item-content";

export default {
    name: "shop-item",
    data() {
        return {
            data: {
                img: 'https://i1.modland.net/i/5fbcd2b1dc19b/cyberpunk-2077-character-v-playstation-5-xbox-series-x-and-3840x2160-3030-lg_modland.jpg',
                title: 'Cyberpank 2077',
                text: `Действие игры происходит в 2077 году в Найт-Сити,
                        вымышленном североамериканском городе из вселенной Cyberpunk.
                        Игрок управляет настраиваемым протагонистом по имени Ви,
                        который работает наёмником и владеет навыками взлома и боя`,
                price: 1990
            },
        }
    },
    components: {
        ShopItemContent,
        ShopItemAlbum,
        ShopItemTop
    },
}

</script>

<style lang="scss" scoped>
    @import "@app-sass/pages/shop-item.scss";
</style>
