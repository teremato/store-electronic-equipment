<template>
    <div v-if="trigger"
        class="app__search-dropdown"
        :class="{'active': trigger}" >

        <ul class="app__search-dropdown-list"
            :class="{'no-search': !noSearch}" >

            <template v-if="items.length > 0 && searchQuery !== ''" >
                <li v-for="(item, index) in items" :key="index"
                    class="app__search-dropdown-list-item" >
                    
                    <app-search-item :item="item"/>
                    <!-- <router-link :to="`/games/${item.slug}`"
                        class="search-item" >

                        <h4>{{ item.title }}</h4>
                        <div>{{ item.price + 'Р.' }}</div>
                    </router-link> -->
                </li>
            </template>

            <li v-else>
                ничего не найдено :(
            </li>
        </ul>
    </div>
</template>

<script>

import appSearchItem from '../use/app-search-item.vue'

export default {
    name: "app-search-dropdown",
    props: {
        items: {
            type: Array,
            default: () => []
        },
        searchQuery: {
            type: String,
            default: ''
        },
        trigger: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        window.addEventListener('mousedown', (e) => {
            if(this.trigger) {
                if( !e.target.closest('.app__search-dropdown') ) {
                    this.$emit('modal:close', false)
                }
            }
        })
    },
    computed: {
        noSearch() {
            return (this.items.length > 0)
        }
    },
    components: {
        appSearchItem
    }
}
</script>

<style lang="scss" scoped>
    @include modal-create(50px, 65px);

    .app__search-dropdown {
        @include box-shadow-default;

        position: absolute;
        top: 50px;

        z-index: 999;
        overflow-y: scroll;

        color: $black;
        background-color: $white;

        /* SCROLL BAR */

        &::-webkit-scrollbar {
            width: $sp_10;
        }
        &::-webkit-scrollbar-track {
            background: $white
        }
        &::-webkit-scrollbar-thumb {
            background-color: $black;
            border: 3px solid $white;
        }

        &-list {
            @include box-size(330px, 250px);
            list-style: none;

            padding: $sp_15;
            font-size: $font_size_xs;
        }
    }
    .no-search {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .active {
        animation: modal-create .5s forwards;
    }


</style>
