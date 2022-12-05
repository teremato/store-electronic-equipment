<template>
    <article>
        <div class="post__header">

            <div class="post__header-author">

                <div class="post__header-author-icon">

                    <!-- TODO: Вынести миниатюру юзера в отдельный компонент -->
                    <img v-if="checkUserAvatar" 
                        :src="post.user.avatar" alt >

                    <img v-else src="@/assets/images/no-user-photo.png" alt >

                    <div class="post__header-info">
                        <span>{{ post.user.name }}</span>
                        <span class="date">
                            {{ getDate(post.created_at) }}
                        </span>
                    </div>
                </div>
                
                <template v-if="isAuthor">

                    <icon @click="() => this.$refs.postOption.open()" 
                        icon="justify" />

                    <app-dropdown-modal ref="postOption"
                        :items="postOption"
                        @click:type="postController" />

                </template>
            </div>
            <div class="post__header-text">
                {{ post.text }}
            </div>
        </div>
        <div v-if="post.photo" class="post__middle">
            <img :src="post.photo.image" alt>
        </div>
        <div class="post__bottom">

            <span  @click="setLike"
                class="post__bottom-item"
                :class="{'active': post.user_like}" >

                <icon icon="heart" />
                {{ post.likes_count }}
            </span>

            <span @click="setFavorite"
                class="post__bottom-item"
                :class="{'active': post.user_favorite}">

                <icon icon="bookmarks"/>
            </span>
        </div>
    </article>
</template>

<script>
import appDropdownModal from '@components/modals/app-dropdown-modal.vue'
import moment from 'moment'
import { mapGetters } from 'vuex'
import { 
    LIKE_POST, 
    ADD_FAVORITE_POST,
    REMOVE_POST
} from '@/store/actions/posts-actions'

export default {
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            postOption: [
                { name: "Редактировать", icon: "pencil", type: "edit" },
                { name: "Удалить", icon: "trash", type: "remove"}
            ],
        }
    },
    methods: {
        getDate(date) {
            return moment(date).locale('ru').fromNow()
        },
        postController(event) {

            switch(event) {
                case "edit":
                    break;
                case "remove":
                    this.removePost();
                        break;
            }
        },
        async setLike() {

            await this.$store.dispatch(LIKE_POST, { id: this.post.id })
                .then(({ message }) => {

                    this.$emit("post:like", this.post.id)
                    this.$notify({
                        type: "success",
                        title: message
                    })
                })
                .catch((error) => console.log(error))
        },
        async setFavorite() {
            
            await this.$store.dispatch(ADD_FAVORITE_POST, { id: this.post.id })
                .then(({ message }) => {

                    this.$emit("post:favorite", this.post.id)
                    this.$notify({
                        type: "success",
                        title: message 
                    })
                })
                .catch((error) => console.log(error))
        },
        async removePost() {

            await this.$store.dispatch(REMOVE_POST, { id: this.post.id })
                .then(({ message }) => {

                    this.$emit("post:remove", this.post.id)
                    this.$notify({
                        type: "success",
                        title: message
                    })
                })
                .catch((error) => console.log(error) )
        }
    },
    computed: {
        ...mapGetters({
            userId: "userId"
        }),
        checkUserAvatar() {
            return (this.post.user.avatar)
        },
        isAuthor() {
            return (this.userId === this.post.user.id)
        }
    },
    components: {
        appDropdownModal
    }
}
</script>

<style lang="scss" scoped>
    article {
        @include box-shadow-default;
        @include icon(25px);

        padding: $sp_15;
        margin-bottom: $sp_15;
        .post__header {

            &-author {
                @include flex-default;
                justify-content: space-between;
                position: relative;

                padding-bottom: $sp_5;
                border-bottom: 2px solid $black;

                &-icon {
                    @include flex-default;
                    gap: $sp_10;

                    img {
                        @include box-size(32px, 32px);
                        border-radius: 50%;
                    }
                }
                .bi {
                    cursor: pointer;
                    transition: $transition;

                    &:hover { color: $main_red }
                }

            }
            &-info {
                display: flex;
                flex-direction: column;

                .date {
                    font-size: 12px;
                    color: gray;

                    &:first-letter { text-transform: uppercase; }
                }
            }
            &-text {
                font-size: $font_size_xs;
                margin: $sp_15 0;
            }
        }
        .post__middle {
            margin-bottom: $sp_15;
            img { @include box-size(auto, 100%); }
        }
        .post__bottom {
            @include flex-default;
            justify-content: space-between;

            &-item {
                @include icon(22px);
                cursor: pointer;
                transition: $transition;

                &:hover { color: $main_red }
                &.active { color: $main_red }
            }
        }
    }
</style>