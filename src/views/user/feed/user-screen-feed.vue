<template>
    <div class="user__page-feed">
        
        <div class="user__page-feed-content">

            <div class="user__page-feed-container">

                <h2>Лента</h2>
                <app-reviews-field 
                    placeholder="Расскажите что нового..."
                    rows="7" />

                <div class="user__page-feed-list">
                    
                    <template v-for="(item, index) in posts" :key="index" >
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
import appPostItem from '@/components/blocks/app-post-item.vue';


export default {
    data() {
        return {
            form: {
                text: '',
                photo: null
            },
            filter: '',
            tabs: [
                { name: "Новое", filter: 'new' },
                { name: "У друзей", filter: 'friends' },
                { name: "Популярное", filter: 'popularity' },
                { name: "Избранное", filter: 'favorite' },
            ],
            posts: []
        }
    },
    created() {
        this.getNewPosts();
    },  
    methods: {
        getFilter(event) {
            this.filter = event
        },
        feedController() {

        },
        async getNewPosts() {
            await this.$store.dispatch("getUserPost")
                .then(({ data }) => {
                    this.posts = data;
                })
                .catch((error) => console.log(error))
        }
    },  
    components: {
        appTabBlock,
        appReviewsField,
        appPostItem
    },
}
</script>

<style lang="scss" scoped>
    .user__page-feed {
        @include box-size(auto, 100%);

        &-content { display: flex;}
        &-container {
            @include box-size(auto, 100%);
            margin-right: $sp_20;

            h2 { margin-bottom: $sp_20; }
        }
        &-list { margin-top: $sp_10; }
    }
</style>