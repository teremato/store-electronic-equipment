<template>
    <div v-if="!load" class="cart__page">

        <h2>Корзина</h2>
        <div class="cart__page-list">

            <transition-group name="list" tag="div">

                <template v-for="(item) in games" :key="item.id" >
    
                    <app-cart-item :item="item"
                        @cart:remove="removeCartItem"
                        @cart:wishlist="() => {}"
                        @cart:increment="addCartItem"
                        @cart:decrement="decrementGameCount" />
                        
                </template>
            </transition-group>
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
import { 
    GET_USER_CART,
    ADD_TO_CART,
    DECREMENT_COUNT,
    REMOVE_FROM_CART
} from '@/store/actions/cart-actions';

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
        async removeCartItem(id) {
            await this.$store.dispatch(REMOVE_FROM_CART, { id: id })
                .then(({ message }) => {

                    this.games = this.games.filter((item) => item.id !== id)

                    this.$notify({
                        type: "success",
                        title: message
                    })
                })
                .catch((error) => console.log(error))
        },
        async addCartItem(id) {
            await this.$store.dispatch(ADD_TO_CART, { id: id })
                .then(({ message }) => {

                    this.games = this.games.map((item) => {
                        if(item.id === id) {
                            item.count += 1
                            return item
                        }
                        return item
                    })

                    this.$notify({
                        type: "success",
                        title: message
                    })
                })
                .catch((error) => console.log(error))
        },
        async decrementGameCount(id) {
            await this.$store.dispatch(DECREMENT_COUNT, { id: id })
                .then(({ message }) => {

                    this.games = this.games.map((item) => {
                        if(item.id === id) {
                            item.count -= 1
                            return item
                        }
                        return item
                    })

                    this.$notify({
                        type: "success",
                        title: message
                    })
                })
                .catch((error) => console.log(error))
        }
    },
    computed: {
        getTotalSum() {
            return this.games.map((item => item.game.price * item.count ))
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