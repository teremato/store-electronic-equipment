<template>
    <div class="user__page-friends">
        
        <div class="user__page-friends-content">
            
            <div class="user_page-friends-list">

                <h2>Друзья</h2>
                <app-reviews-field v-model="form.query"
                    placeholder="Поиск..."
                    rows="7" />
            </div>

            <app-tab-block :tabs="tabs"
                @change:filter="getFilter" />
        </div>
    </div>
</template>

<script>
import appTabBlock from '@/components/blocks/app-tab-block.vue';
import appReviewsField from '@/components/fields/app-reviews-field.vue';

export default {
    data() {
        return {
            form: {
                query: ''
            },
            filter: '',
            tabs: [
                { name: "Друзья", filter: "friends" },
                { name: "Заявки в друзья", filter: "added" },
                { name: "Заблокированные", filter: "blocked" }
            ]
        }
    },
    methods: {
        getFilter(event) {
            this.filter = event;
        }
    },
    components: {
        appTabBlock,
        appReviewsField
    },
}
</script>

<style lang="scss" scoped>
    .user__page-friends {
        @include box-size(auto, 100%);
        .user__page-friends-content { display: flex; }
        .user_page-friends-list {
            @include box-size(auto, 100%);
            margin-right: $sp_20;
    
            h2 { margin-bottom: $sp_20; }
        }
    }
</style>