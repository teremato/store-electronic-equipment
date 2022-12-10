<template>
    <div v-if="!load" class="cart__page">

        <h2>Корзина</h2>
        <div class="cart__page-list">

            <template v-for="(item, index) in games" :key="index" >
                <app-cart-item :item="item" />
            </template>
        </div>
        <div class="cart__page-bottom">

            <h3>Итого: {{ getTotalSum }}Р.</h3>
            <button>
                Оплатить
            </button>
        </div>
    </div>

    <app-loader :load="load" />

</template>

<script>
import appCartItem from '@components/blocks/app-cart-item.vue';
import appLoader from '@components/use/app-loader.vue';
import { GET_USER_CART } from '@/store/actions/cart-actions';

export default {
    data() {
        return {
            load: false,
            games: []
        }
    },
    created() {
        this.getUserCart();
    },
    methods: {
        async getUserCart() {

            this.load = true

            await this.$store.dispatch(GET_USER_CART)
                .then(({ data }) => {
                    this.games = data
                })
                .catch((error) => console.log(error))
                .finally(() => this.load = false)
        },
        async removeCartItem() {

        },
        async addCartItem() {

        },
        async decrementGameCount() {
            
        }
    },
    computed: {
        getTotalSum() {
            return this.games.map((item => { return item.game.price * item.count }))
                .reduce((total, item) => total + item)
        }
    },
    components: {
        appCartItem,
        appLoader
    }
}
</script>

<style src="@app-sass/pages/cart.scss"
    lang="scss"
    scoped >

</style>