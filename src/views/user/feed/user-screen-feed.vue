<template>
    <div class="user__page-feed">
        
        <div class="user__page-feed-content">

            <div class="user__page-feed-container">

                <h2>Лента</h2>
                <app-reviews-field 
                    placeholder="Расскажите что нового..."
                    rows="7" />

                <div class="user__page-feed-list">

                    <app-loader :load="load" :isFullPage="false" />
                       
                    <transition-group name="list" tag="div">

                        <template v-for="(item, index) in posts" :key="index" >
                            
                            <app-post-item :post="item"
                                @post:like="(event) => { this.changeLike(event, 'posts') }"
                                @post:favorite="(event) => { this.changeFavorite(event, 'posts') }"
                                @post:remove="removePost" />
                                
                        </template>
                    </transition-group>

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
import appLoader from '@components/use/app-loader.vue';
import likesAndFavorites from '@mixins/likesAndFavorites';
import pagination from '@mixins/pagination';
import * as ACTION from '@store/actions/feed-actions'


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
            trigger: false,
            load: false

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
                    this.getPostsByType(ACTION.GET_NEW_FEED);
                        break;
                case "friends":
                    this.getPostsByType(ACTION.GET_FRIEND_FEED);
                        break;
                case "popularity":
                    this.getPostsByType(ACTION.GET_POPULARITY_FEED);
                        break;
                case "favorite":
                    this.getPostsByType(ACTION.GET_FAVORITE_FEED);
                        break;
                default:
                    break;
            }
        },
        async getPostsByType(type) {

            this.load = true

            await this.$store.dispatch(type, this.params)
                .then(({ data }) => {

                    this.posts = [...this.posts, ...data];
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => this.load = false)
        },
        removePost(event) {
            this.posts = this.posts.filter((item) => 
                item.id !== event
            )
        }
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
        appPostItem,
        appLoader
    },
}
</script>

<style src="@app-sass/pages/user.scss" 
    lang="scss" 
    scoped >

</style>