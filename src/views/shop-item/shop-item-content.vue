<template>
    <div class="shop-item-content">

        <div class="shop-item-content-top">

            <h3 v-for="(item, index) in categories" :key="index"
                @click="changeBlock(item.value)"
                class="shop-item-content-top-item" >
    
                {{ item.name }}
            </h3>
        </div>

        <component :is="getCurrentBlock(currentBlock)" />
    </div>
</template>

<script>

import appItemContentInfo from '@components/blocks/app-item-content-info.vue'
import appItemContentPublisher from '@components/blocks/app-item-content-publisher.vue'
import appItemContentReviews from '@components/blocks/app-item-content-reviews.vue'

export default {
    name: "shop-item-content",
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
            @include flex-default;
            gap: $sp_15;

            padding-bottom: $sp_20;
            margin-bottom: $sp_20;
            border-bottom: 2px solid $black;

            &-item {
                cursor: pointer;
            }
            
        }
    }

</style>
