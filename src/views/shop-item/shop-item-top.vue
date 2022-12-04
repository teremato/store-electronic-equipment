<template>
    <div class="shop-item-top">
        <img :src="game.main_photo" alt>

        <div class="shop-item-top-right">

            <div class="shop-item-top-info">
                <h3>{{ game.title }}</h3>
                <p>{{ game.description }}</p>
            </div>

            <div class="shop-item-top-controller">
                <button>
                    {{ "Купить за" + ` ${game.price}Р` }}
                </button>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "shop-item-top",
    props: {
        game: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style src="@app-sass/pages/shop-item.scss" 
    lang="scss"
    scoped >

</style>
