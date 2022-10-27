<template>

    <section class="home__recommendation">

        <h3 class="home__recommendation-title">Рекомендуем</h3>

        <div class="home__recommendation-block">

            <article v-for="(item, index) in getNewArray" :key="index"
                 class="home__recommendation-block-item"
                 :class="`item-${index}`"
            >
                <div class="home__recommendation-block-info">

                    <div class="block-info">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.text }}</p>
                    </div>

                    <button class="">
                        Перейти
                        <icon icon="arrow-right"/>
                    </button>

                </div>

                <img :src="item.img" :alt="item.title">
            </article>

        </div>

    </section>

</template>

<script>

export default {
    name: "home-recommend-block",
    props: {
        news: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        getNewArray() {
            return this.news.slice(0, 4)
        }
    }
}

</script>

<style lang="scss" scoped>

    .home__recommendation-title {

        margin-top: $sp_20;
        font-weight: 500;

    }

    .home__recommendation-block {

        display: grid;
        grid-template-areas:
            "banner_1 banner_1"
            "banner_2 banner_4"
            "banner_3 banner_4";

        grid-template-rows: 46% 27% 27%;
        grid-template-columns: 60% 40%;


        margin-top: $sp_20;

    }

    .home__recommendation-block-info {

        @include box-size(0%, 100%);

        position: absolute;
        top: 0;
        left: 0;

        overflow: hidden;

        transition: all .5s;

        color: $white;
        background-color: rgba(0, 0, 0, 0.9);

        button {
            @include default-btn(20px, 10px);
            gap: 10px;

            background-color: transparent;
        }
    }

    @include icon(25px);

    .home__recommendation-block-item {

        cursor: pointer;
        position: relative;

        img { @include box-size(100%, 100%); }

        &:hover {
            .home__recommendation-block-info {
                @include box-size(100%, 100%);
            }
        }
    }

    .item-0 {
        grid-area: banner_1;
        @include recommend-item(auto, 50%, 25px, $flex-def: true);
    }

    .item-1 {
        grid-area: banner_2;
        @include recommend-item(auto, 90%, auto, $flex-def: true);
    }

    .item-2 {
        grid-area: banner_3;
        @include recommend-item(auto, 90%, auto, $flex-def: true);
    }

    .item-3 {
        grid-area: banner_4;

        @include recommend-item(auto, 80%, 25px, $flex-def: false);
        justify-content: space-around;
    }

</style>
