<template>
    <div class="shop-item-content">

        <ul class="shop-item-content-top">

            <li v-for="(item, index) in categories" :key="index"
                @click="changeBlock(item.value)"
                class="shop-item-content-top-item"
                :class="{'active': item.value === currentBlock}" >
    
                {{ item.name }}
            </li>
        </ul>

        <component :is="getCurrentBlock(currentBlock)" 
            :items="data" />
            
    </div>
</template>

<script>

import appItemContentInfo from '@components/blocks/app-item-content-info.vue'
import appItemContentPublisher from '@components/blocks/app-item-content-publisher.vue'
import appItemContentReviews from '@components/blocks/app-item-content-reviews.vue'

export default {
    name: "shop-item-content",
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            categories: [
                { name: 'Основное', value: 'app-item-content-info' },
                { name: 'Издатель', value: 'app-item-content-publisher' },
                { name: 'Отзывы', value: 'app-item-content-reviews' }
            ],
            currentBlock: 'app-item-content-info'
        }
    },
    methods: {
        changeBlock(collumn) {
            this.currentBlock = collumn
        }
    },
    computed: {
        getCurrentBlock() {
            return (currentBlock) => {
                
                let title = currentBlock;

                switch(title) {
                    case 'app-item-content-info':
                        return appItemContentInfo;
                    case 'app-item-content-publisher':
                        return appItemContentPublisher;
                    case 'app-item-content-reviews':
                        return appItemContentReviews
                }
            }
        }
    },
    components: {
        appItemContentInfo,
        appItemContentPublisher,
        appItemContentReviews
    }
}

</script>

<style lang="scss" scoped>

    .shop-item-content {
        @include box-size(100%, 50%);

        &-top {
            @include list-style(row, 15px);
            font-weight: 500;

            &-item { cursor: pointer; }
        }
    }
    .active {
        border-bottom: 2px solid $main_red;

        padding-bottom: $sp_10;
        margin-bottom: $sp_10;
        
        color: $main_red;
    }

</style>
