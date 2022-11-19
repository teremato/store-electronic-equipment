<template>
    <div class="user__page-list">
        <h3>Лента</h3>
        <app-reviews-field
            placeholder="Расскажите что нового..." 
            rows="7" >

        <template #upload>
            <button class="button-upload">
                <icon icon="image"/>
            </button>
        </template>
        </app-reviews-field>
    </div>
</template>

<script>
import appReviewsField from '@/components/fields/app-reviews-field.vue'


export default {
  components: { appReviewsField },

}
</script>

<style lang="scss" scoped>
    .user__page-list {
        width: 65%;

        h3 { margin-bottom: $sp_20; }

        .button-upload {
            @include btn-input;
            cursor: pointer;

            font-size: 30px;
            margin-right: $sp_10;
            transition: $transition;

            &:hover {
                color: $main_red;
            }
        }
    }
</style>