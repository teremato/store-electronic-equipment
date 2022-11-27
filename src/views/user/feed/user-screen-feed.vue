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
                        <app-post-item :post="item"
                            @post:like="(event) => { this.changeLike(event, 'posts') }"
                            @post:favorite="(event) => { this.changeFavorite(event, 'posts') }" />
                            
                    </template>
                </div>
            </div>

            <app-tab-block :tabs="tabs"
                @change:filter="getFilter" />
        </div>
            
    </div>
</template>

TODO: Сделать обсервер для бесконечной ленты
TODO Сделать бесконечную ленту ??

<script>
import appTabBlock from '@/components/blocks/app-tab-block.vue';
import appReviewsField from '@/components/fields/app-reviews-field.vue';
import appPostItem from '@/components/blocks/app-post-item.vue';
import likesAndFavorites from '@/mixins/likesAndFavorites';

export default {
    mixins: [likesAndFavorites],
    data() {
        return {
            form: {
                text: '',
                photo: null
            },
            tabs: [
                { name: "Новое", filter: 'new' },
                { name: "У друзей", filter: 'friends' },
                { name: "Популярное", filter: 'popularity' },
                { name: "Избранное", filter: 'favorite' },
            ],
            params: {
                page: 1,
                per_page: 10
            },
            posts: [],
        }
    },
    methods: {
        getFilter(event) {
            this.feedController(event);
        },
        feedController(type) {

            switch (type) {
                case "new":
                    this.getPostsByType("getNewFeed");
                        break;
                case "friends":
                    this.getPostsByType("getFriendFeed");
                        break;
                case "popularity":
                    this.getPostsByType("getPopularityFeed");
                        break;
                case "favorite":
                    this.getPostsByType("getFavoriteFeed");
                        break;
                default:
                    break;
            }
        },
        async getPostsByType(type) {

            await this.$store.dispatch(type, this.params)
                .then(({ data }) => {
                    this.posts = data;
                })
                .catch((error) => console.log(error))
        },
        oserver() {

        },
        scrollTop() {

        }
    },
    watch: {

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