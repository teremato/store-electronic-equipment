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

<style lang="scss" scoped>

    @include icon(20px);

    .shop-item-top {
        @include box-shadow-default;
        display: flex;

        margin-bottom: $sp_20;
        color: $white;
        background-color: $black;

        .shop-item-top-right {
            @include flex-vertical;
            justify-content: space-between;

            padding: $sp_15;
        }

        &-info {
            h3 {
                width: max-content;

                font-size: 30px;
                text-transform: uppercase;

                padding-bottom: $sp_10;
                margin-bottom: $sp_10;

                color: $main_red;
                border-bottom: 2px solid $main_red;
            }
            p { font-size: $font_size_xs;}
        }

        &-controller {
            display: flex;
            justify-content: flex-end;

            button {
                @include default-btn(15px, 10px);

                font-size: 15px;
                gap: 10px;

                border: 2px solid $white;

                &:hover {
                    gap: 15px;
                    border-color: $main_red;
                }
            }
        }

        img { @include box-size(300px, 550px); }
    }
</style>
