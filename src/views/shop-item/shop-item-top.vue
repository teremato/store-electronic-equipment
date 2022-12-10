<template>
    <div class="shop-item-top">
        <img :src="game.main_photo" alt>

        <div class="shop-item-top-right">

            <div class="shop-item-top-info">
                <h3>{{ game.title }}</h3>
                <p>{{ game.description }}</p>
            </div>

            <div class="shop-item-top-controller">
                <button @click="addToCart">
                    {{ "Купить за" + ` ${game.price}Р` }}
                </button>
            </div>

        </div>

    </div>
</template>

<script>
import { ADD_TO_CART } from '@/store/actions/cart-actions'

export default {
    name: "shop-item-top",
    props: {
        game: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        async addToCart() {
            await this.$store.dispatch(ADD_TO_CART, { id: this.game.id} )
                .then(({ message }) => {

                    this.$notify({
                        type: "success",
                        title: message
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>

<style src="@app-sass/pages/shop-item.scss" 
    lang="scss"
    scoped >

</style>
