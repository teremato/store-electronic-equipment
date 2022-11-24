<template>
    <div class="user__page-friends">
        
        <div class="user__page-friends-content">
            
            <div class="user_page-friends-container">

                <h2>Друзья</h2>
                <app-reviews-field v-model="form.query"
                    placeholder="Поиск..."
                    rows="7" />

                <div class="user__page-friends-list">

                    <template v-for="(item, index) in friends" :key="index" >
                        <app-post-item :post="item" />
                    </template>
                </div>
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
            ],
            friends: []
        }
    },
    methods: {
        getFilter(event) {
            this.filter = event;
        },
        async getUserFriends() {

            await this.$store.dispatch("getUserFriends")
                .then(({ data }) => {
                    this.friends = data;
                })
                .catch((error) => console.log(error))
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
        .user_page-friends-container {
            @include box-size(auto, 100%);
            margin-right: $sp_20;
    
            h2 { margin-bottom: $sp_20; }
            .user__page-friends-list { margin-top: $sp_10; }
        }
    }
</style>