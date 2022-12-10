<template>
    <div class="home__page-content">

        <ul class="home__page-content-nav">
            
            <li v-for="(item, index) in filterType" :key="index"
                @click="getFilter(item.value)"
                :class="{ 'active-li': activeFilter(item.value) }" >

                {{ item.name }}
            </li>
        </ul>

        <div class="home__page-content-content" 
            :class="{'active-block': changeFilter}" >

            <template v-for="(item, index) in data" :key="index">
                <app-shop-item-block :item="item"
                    @cart:add="addToCart" />
            </template>

        </div>

    </div>

</template>

<script>

import AppShopItemBlock from "@components/blocks/app-shop-item-block.vue";
import { ADD_TO_CART } from "@/store/actions/cart-actions";

export default  {
    name: "home-content-block",
    props: {
        data: {
            type: Array,
            default: () => []
        },
        currentFilter: {
            type: String,
            default: 'created_at'
        }
    },
    data() {
        return {
            filterType: [
                { name: 'Каталог', value: 'created_at' },
                { name: 'Новинки', value: 'release_date' },
                { name: 'Лидеры продаж', value: 'price' },
                { name: 'Ожидаемые', value: 'title' },
            ],
            changeFilter: false
        }
    },
    methods: {
        getFilter(type) {
            this.$emit('getFilter', type)
        },
        async addToCart(event) {
            await this.$store.dispatch(ADD_TO_CART, { id: event} )
                .then(({ message }) => {

                    this.$notify({
                        type: "success",
                        title: message
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    computed: {
        activeFilter() {
            return function(type) {
                return (type === this.currentFilter);
            }
        }
    },
    watch: {
        currentFilter: {
            handler() {
                this.changeFilter = true,
                setTimeout(() => {
                    this.changeFilter = false
                }, 800)
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

    .active-block {
        animation: changeFilter .8s forwards;
    }

    @keyframes changeFilter {
        from { opacity: 100%; }
        50% { opacity: 0; }
        to { opacity: 100%; }
    }

</style>
