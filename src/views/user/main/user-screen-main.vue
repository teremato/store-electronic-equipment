<template>
    <div v-if="!load" class="user__page-main">
        <user-top-main :user="user"
            @upload:avatar="uploadAvatar"
            @upload:photo="uploadPhotos"
            @change:status="changeStatus" />

        <div class="user__page-main-bottom">
            <div>
                <user-friends-main :friends="user.friends" />
                <user-games-main />
            </div>
            <user-list-main :posts="user.posts"
                @add:post="addNewPost"
                @remove:post="removePost" />
        </div>
    </div>

    <app-loader :load="load" />

</template>

<script>
import userTopMain from "@views/user/main/user-top-main.vue"
import userFriendsMain from '@views/user/main/user-friends-main.vue'
import userListMain from '@views/user/main/user-list-main.vue'
import userGamesMain from "@views/user/main/user-games-main.vue"
import appLoader from "@/components/use/app-loader.vue"
import { GET_USER_BY_ID } from "@store/actions/user-actions"

export default {
    data() {
        return {
            user: {},
            load: false
        }
    },
    created() {
        this.getUser(this.$route.params.id);
    },
    methods: {
        async getUser(id) {

            this.load = true

            await this.$store.dispatch(GET_USER_BY_ID, id)
                .then((data) => {
                    this.user = data
                })
                .catch((error) => console.log(error))
                .finally(() => this.load = false )
        },
        uploadAvatar(event) {
            this.user.avatar = event
        },
        uploadPhotos(event) {
            this.user.media.push(event);
        },
        changeStatus(event) {
            this.user.status = event
        },
        addNewPost(event) {
            this.user.posts.unshift(event)
        },
        removePost(event) {
            this.user.posts = this.user.posts.filter((item) =>  
                item.id !== event
            )
        }
    },
    computed: {
    },
    components: {
        userTopMain,
        userFriendsMain,
        userListMain,
        userGamesMain,
        appLoader
    }
}
</script>

<style src="@app-sass/pages/user.scss"
    lang="scss"
    scoped >

</style>