<template>
    <section class="shop__item"
        @mouseover="handleCursor"
        @mouseout="handleCursor" >

        <div class="shop__item-blur" :class="{'focus': isFocus}">
            <button @click="goToItemPage"
                class="shop__item-to-page" >

                {{ item.price + "₽" }}
                <icon icon="arrow-right"/>
            </button>
            <button @click="addToCart"
                class="shop__item-to-cart" >

                <icon icon="cart"/>
            </button>
        </div>

        <div class="shop__item-img">
            <img :src="item.main_photo" alt>
        </div>

    </section>
</template>

<script>

export default {
    name: "app-shop-item-block",
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            isFocus: false
        }
    },
    methods: {
        handleCursor() {
            this.isFocus = !this.isFocus;
        },
        goToItemPage() {
            this.$router.push('/games/' + this.item.slug)
        },
        addToCart() {
            this.$emit("cart:add", this.item.id)
        }
    }
}

</script>

<style lang="scss" scoped>

    .shop__item {
        @include box-size(140px, 250px);
        position: relative;

        cursor: pointer;
        background-color: $black;

        .focus {
            opacity: 100%;
            pointer-events: all;

            transition: all .4s ease;
        }

        &-blur {
            @include box-size(100%, 100%);
            @include flex-default;
            justify-content: center;

            position: absolute;

            opacity: 0;
            pointer-events: none;

            background-color: rgba(0, 0, 0, 1);
        }
    }

    .shop__item-img {
        img { @include box-size(100%, 100%); }
    }

    button {
        @include default-btn(10px, 10px);
        @include icon(25px);
        gap: 5px;

        font-size: $font_size_m;
        font-weight: 500;

        &:hover {
            @include icon(35px);
            font-size: $font_size_l;
            gap: 15px;
        }
    }

    .shop__item-to-cart {
        &:hover { color: $main_green; }
    }

</style>
