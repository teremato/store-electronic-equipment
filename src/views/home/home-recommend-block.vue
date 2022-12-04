<template>

    <section class="home__recommendation">

        <h3 class="home__recommendation-title">Рекомендуем</h3>

        <div class="home__recommendation-block">

            <article v-for="(item, index) in reccomend" :key="index"
                class="home__recommendation-block-item"
                :class="`item-${index}`" >

                <div class="home__recommendation-block-info">

                    <div class="block-info">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                    </div>

                    <button class="">
                        Перейти
                        <icon icon="arrow-right"/>
                    </button>

                </div>

                <img :src="item.main_photo" :alt="item.title">
            </article>

        </div>

    </section>

</template>

<script>

export default {
    name: "home-recommend-block",
    props: {
        reccomend: {
            type: Array,
            default: () => []
        }
    },
    computed: {

    }
}

</script>

<style src="@app-sass/pages/home.scss"
    lang="scss"
    scoped >

</style>
