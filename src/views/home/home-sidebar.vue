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

<style lang="scss">

    .home__page-side-bar {
        @include box-size(auto, 25%);
        @include box-shadow-default;

        padding: $sp_20 $sp-10 30px $sp-10;
        margin-right: $sp_20;

        color: $white;
        background-color: $black;

        &-category,
        &-genres {
            margin-left: $sp-20;
            .title {
                @include flex-default;
                gap: 10px;

                .bi {
                    margin: 0;
                    color: $main-red;
                }

                padding: $sp-10 $sp-10 $sp-10 0;
            }
            ul {
                @include flex-vertical;
                gap: 10px;

                list-style: none;

                li {
                    cursor: pointer;
                    font-size: 14px;
                    margin-left: 26.4px;

                    transition: all .2s ease;

                    &:hover { color: $main-red; }
                }
            }
        }
    }

</style>
