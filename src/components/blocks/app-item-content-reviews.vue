<template>
    <div class="shop-item-reviews">
        <app-reviews-field
            :placeholder="`Напишите ваш отзыв...`"
            :rows="6" />
        <h3>Отзывы: 0</h3>
    </div>
</template>

<script>

import appReviewsField from '@components/fields/app-reviews-field.vue'

export default {
    name: 'app-item-content-reviews',
    components: {
        appReviewsField
    }
}
</script>

<style lang="scss" scoped>
    .shop-item-reviews {
        margin-top: $sp_10;
        
        h3 {
            margin-top: $sp_10;
        }
    }
</style>