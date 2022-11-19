<template>
    <div class="user__page-main">
        <user-top-main :user="user"
            @upload:avatar="uploadAvatar"
            @upload:photo="uploadPhotos"
            @change:status="changeStatus" />

        <div class="user__page-main-bottom">
            <user-friends-main />
            <user-list-main />
        </div>
    </div>

</template>

<script>
import userTopMain from "@views/user/main/user-top-main.vue"
import userFriendsMain from '@views/user/main/user-friends-main.vue'
import userListMain from '@views/user/main/user-list-main.vue'

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
        },
        uploadAvatar(event) {
            this.user.avatar = event
        },
        uploadPhotos(event) {
            this.user.media.push(event);
        },
        changeStatus(event) {
            this.user.status = event
        }
    },
    computed: {
    },
    components: {
        userTopMain,
        userFriendsMain,
        userListMain,
    }
}
</script>

<style src="@app-sass/pages/user.scss"
    lang="scss"
    scoped >

</style>