<template>

    <section class="home__recommendation">

        <h3 class="home__recommendation-title">Рекомендуем</h3>

        <div class="home__recommendation-block">

            <article v-for="(item, index) in getNewArray" :key="index"
                 class="home__recommendation-block-item"
                 :class="`item-${index}`"
            >
<!--                <h3>{{ item.title }}</h3>-->
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
        margin-top: $mg_20;

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


        margin-top: $mg_20;

    }

    .home__recommendation-block-item {

        cursor: pointer;
        position: relative;

        img { @include box-size(100%, 100%); }

        &::before {
            content: '';
            @include box-size(100%, 100%);
            position: absolute;

            opacity: 0;
            transition: $transition;
        }

        &:hover {
            &::before {
                content: '';
                @include box-size(100%, 100%);
                position: absolute;

                opacity: 90%;
                background-color: $black;
            }
        }
    }

    .item-0 { grid-area: banner_1; }
    .item-1 { grid-area: banner_2; }
    .item-2 { grid-area: banner_3; }
    .item-3 { grid-area: banner_4; }

</style>
