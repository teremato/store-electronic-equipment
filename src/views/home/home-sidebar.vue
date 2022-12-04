<template>
    <aside class="home__page-side-bar">
        <div class="home__page-side-bar-category">
            <div class="title">
                <icon icon="grid-fill"/>
                <h3>Категории</h3>
            </div>
            <ul>
                <li v-for="item in categories" :key="item.name">
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <div class="home__page-side-bar-genres">
            <div class="title">
                <icon icon="grid-fill"/>
                <h3>Жанры</h3>
            </div>
            <ul>
                <li v-for="item in genres" :key="item.name">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>

export default {
    name: 'home-sidebar',
    data() {
        return {
            /* fake -> data */
            genres: [
                { name: 'Экшн', value: '#' },
                { name: 'Приключения', value: '#' },
                { name: 'Шутеры', value: '#' },
                { name: 'Ролевые', value: '#' },
                { name: 'Инди', value: '#' },

            ],
            categories: [
                { name: 'Одиночная', value: '#' },
                { name: 'Кооператив', value: '#' },
                { name: 'Мультиплеер', value: '#' },
                { name: 'Дешевле 100 руб.', value: '#' },
                { name: 'Дешевле 300 руб.', value: '#' },
            ]
        }

    }
}

</script>

<style src="@app-sass/pages/home.scss"
    lang="scss"
    scoped >
    
</style>
