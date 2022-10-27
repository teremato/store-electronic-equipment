<template>
    <div class="home__page-content">

        <ul class="home__page-content-nav">
            <li v-for="(item, index) in filterType" :key="index"
                @click="getFilter(item.value)"
                :class="{ 'active-li': activeFilter(item.value) }"
            >
                {{ item.name }}
            </li>
        </ul>

        <div class="home__page-content-content">
            <template v-for="(item, index) in data" :key="index">
                <app-shop-item-block :item="item"/>
            </template>
        </div>

    </div>

</template>

<script>

import AppShopItemBlock from "@components/blocks/app-shop-item-block";

export default  {
    name: "home-content-block",
    props: {
        data: {
            type: Array,
            default: () => []
        },
        currentFilter: {
            type: String,
            default: 'fil_all'
        }
    },
    data() {
        return {
            filterType: [
                { name: 'Каталог', value: 'fil_all' },
                { name: 'Новинки', value: 'fil_new' },
                { name: 'Лидеры продаж', value: 'fil_top' },
                { name: 'Ожидаемые', value: 'fil_soon' },
            ],
        }
    },
    methods: {
        getFilter(type) {
            this.$emit('getFilter', type)
            console.log(type)
        },
    },
    computed: {
        activeFilter() {
            return function(type) {
                return (type === this.currentFilter);
            }
        }
    },
    components: {
        AppShopItemBlock
    }
}

</script>

<style lang="scss" scoped>
    .home__page-content {

        @include box-size(auto, 100%);

        &-nav {
            @include list-style(row, 15px);
            cursor: pointer;

            margin-bottom: $sp_20;

            li {
                @include box-size(30px, auto);
                font-weight: 500;
                transition: all .1s;
            }
        }

        .active-li {
            color: $main_red;
            border-bottom: 2px solid $main_red;
        }

        &-content {
            display: flex;
            flex-wrap: wrap;
            row-gap: 8px;
            justify-content: space-between;
        }
    }
</style>
