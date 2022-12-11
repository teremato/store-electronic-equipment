<template>
    <div class="cart_item">
        <div class="cart_item-right">

            <img :src="item.game.main_photo" alt>
            <div class="cart_item-right-container">

                <router-link :to="'/games/' + item.game.slug">
                    <h3>{{ item.game.title }}</h3>
                </router-link>
                <div class="cart_item-right-container-controller">
                    <button @click="removeFromCart">
                        Убрать
                    </button>
                    <button @click="addToWishlist">
                        Добавить в избранное
                    </button>
                </div>
            </div>
        </div>
        <div class="cart_item-left">

            <div class="cart_item-left-counter">
                <button @click="decrementCount"
                    class="counter__field counter__btn" >
                    
                    <icon icon="dash-lg" />
                </button>
                <div class="counter__field counter__btn-count">
                    {{ item.count }}
                </div>
                <button @click="incrementCount"
                    class="counter__field counter__btn" >

                    <icon icon="plus-lg" />
                </button>
            </div>
            <div class="cart_item-left-price">
                {{ getFullPrice + "Р." }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        removeFromCart() {
            this.$emit("cart:remove", this.item.id)
        },
        addToWishlist() {
            this.$emit("cart:wishlist", this.item.game.id)
        },
        incrementCount() {
            this.$emit("cart:increment", this.item.id)
        },
        decrementCount() {
            this.$emit("cart:decrement", this.item.id)
        }
    },
    computed: {
        getFullPrice() {
            return this.item.game.price * this.item.count
        }
    }
}
</script>

<style lang="scss" scoped>
    .cart_item {
        @include box-size(120px, 100%);
        @include flex-default;
        @include box-shadow-default;
        justify-content: space-between;
        padding: $sp_15;
        margin-bottom: $sp_20;

        &-right {
            display: flex;
            gap: $sp_15;

            img { @include box-size(auto, 170px); }
            &-container {
                @include flex-vertical;
                justify-content: space-between;

                h3 {
                    transition: $transition;
                    &:hover { color: $main_red; }
                }

                &-controller {
                    @include flex-default;
                    gap: $sp_15;

                    button {
                        @include btn-input;
                        cursor: pointer;

                        transition: $transition;
                        &:hover { color: $main_red; }
                    }
                }
            }
        }
        &-left {
            @include box-size(100%, auto);
            @include flex-vertical;
            justify-content: flex-end;

            &-counter {
                @include flex-default;
                border-bottom: 2px solid $black;

                .counter__field {
                    @include box-size(30px, 30px);
                }
                .counter__btn {
                    @include btn-input;
                    @include icon(19px);
                    cursor: pointer;

                    transition: $transition;
                    &:hover { color: $main_red }
                }
                .counter__btn-count {
                    @include flex-default;
                    justify-content: center;
                }
            }
            &-price {
                font-size: $font_size_l;
                text-align: center;

                margin-top: $sp_20;
            }
        } 
    }
</style>