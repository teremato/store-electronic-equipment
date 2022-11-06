<template>
    <div class="shop-item-content-publisher">
        <div class="publisher-info-short">

            <div class="publisher-info-short-header">
                <h3>CD Projekt RED</h3>
                <h5>Польская студия</h5>
            </div>
            <img src="https://i.playground.ru/e/YIKs2RkanBzyRm14UySSVQ.jpeg" 
                alt="cd" >
        </div>

        <div class="publisher-to">
            <router-link to="/publisher/games">
                Все игры издателя
                <icon icon="arrow-right" />
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'app-item-content-publisher'
}

</script>

<style lang="scss" scoped>
    @include icon(20px);
    .shop-item-content-publisher {
        .publisher-info-short {
            img { @include box-size(auto, 100%) }

            &-header {
                @include flex-default;
                justify-content: space-between;

                margin: $sp_10 0;

                h5 { color: $main_red }
            }
        }
        .publisher-to {
            margin-top: $sp_10;
            a {
                @include default-btn(30px, 10px);
                gap: 5px;

                transition: $transition;

                &:hover { gap: 15px; }
            }
        }
    }
</style>