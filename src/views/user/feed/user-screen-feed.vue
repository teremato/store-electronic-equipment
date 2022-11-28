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
                        <app-post-item ref="postItem"
                            :post="item"
                            @post:like="(event) => { this.changeLike(event, 'posts') }"
                            @post:favorite="(event) => { this.changeFavorite(event, 'posts') }" />
                            
                    </template>

                    <div ref="pagination"></div>
                </div>
            </div>

            <app-tab-block :tabs="tabs"
                @change:filter="getFilter"
                class="user__page-feed-tab-block" />
        </div>
            
    </div>
</template>

<script>
import appTabBlock from '@components/blocks/app-tab-block.vue';
import appReviewsField from '@components/fields/app-reviews-field.vue';
import appPostItem from '@components/blocks/app-post-item.vue';
import likesAndFavorites from '@mixins/likesAndFavorites';
import pagination from '@mixins/pagination';


export default {
    mixins: [likesAndFavorites, pagination],
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
            filter: '',
            posts: [],
            trigger: false

        }
    },
    mounted() {

        this.feedController(this.filter)
        this.observer(this.$refs.pagination);
    },
    methods: {
        getFilter(event) {
            this.posts = [];
            this.filter = event;
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

                    this.posts = [...this.posts, ...data];
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
    watch: {
        "params.page": {
            handler() {
                this.feedController(this.filter);
            }
        },
        "filter": {
            handler() {
                this.updatePage();
            }
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
        &-tab-block {
            position: sticky;
        }
    }
</style>