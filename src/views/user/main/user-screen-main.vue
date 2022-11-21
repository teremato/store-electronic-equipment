<template>
    <div class="user__page-main">
        <user-top-main :user="user"
            @upload:avatar="uploadAvatar"
            @upload:photo="uploadPhotos"
            @change:status="changeStatus" />

        <div class="user__page-main-bottom">
            <div>
                <user-friends-main />
                <user-games-main />
            </div>
            <user-list-main :posts="user.posts"
                @add:post="addNewPost" />
        </div>
    </div>

</template>

<script>
import userTopMain from "@views/user/main/user-top-main.vue"
import userFriendsMain from '@views/user/main/user-friends-main.vue'
import userListMain from '@views/user/main/user-list-main.vue'
import userGamesMain from "@views/user/main/user-games-main.vue"

export default {
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        this.getUser(this.$route.params.id);
    },
    methods: {
        async getUser(id) {

            await this.$store.dispatch("getUserById", id)
                .then((data) => {
                    this.user = data
                })
                .catch((error) => console.log(error))
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
        }
    },
    computed: {
    },
    components: {
        userTopMain,
        userFriendsMain,
        userListMain,
        userGamesMain
    }
}
</script>

<style src="@app-sass/pages/user.scss"
    lang="scss"
    scoped >

</style>