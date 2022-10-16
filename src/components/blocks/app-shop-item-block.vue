<template>
    <section class="shop__item"
        @mouseover="focus"
        @mouseout="blur"
    >

        <div class="shop__item-blur" :class="{'focus': isFocus}">
            <button>
                {{ item.price + "₽" }}
                <icon icon="arrow-right"/>
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
        focus() {
            this.isFocus = true;
        },
        blur() {
            this.isFocus = false;
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

        &-img {
            img {
                @include box-size(100%, 100%);
            }
        }

        &-price-info {
            position: absolute;
            bottom: 0;

            padding: $pd_5 $pd_10;
            margin: $mg_5;

            color: $white;
            background-color: $black;

            transition: all .2s ease;

            &:hover {
                color: $main_red;
            }

        }
        .focus {
            opacity: 100%;
            pointer-events: all;

            transition: all .2s ease;
        }
        &-blur {
            @include box-size(100%, 100%);
            @include flex-default;
            justify-content: center;

            position: absolute;

            opacity: 0;
            pointer-events: none;

            background-color: rgba(0, 0, 0, 1);

            button {
                @include default-btn(20px, 10px);
                gap: 5px;

                font-size: $font_size_m;
                font-weight: 500;

                .bi {
                    font-size: 25px;

                    color: inherit;
                    margin-bottom: 0;
                }

                &:hover {
                    gap: 15px;
                }
            }
        }
    }
</style>
