<template>
    <div class="user__page-main">
        <user-top-main :user="user" />
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
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        this.getUser();
    },
    methods: {
        async getUser() {
            await this.$store.dispatch("getUserById", this.userId)
                .then((data) => {
                    this.user = data
                })
        }
    },
    computed: {
        ...mapGetters({
            userId: "userId",
            userName: "userName"
        })
    },
    components: {
        userTopMain,
        userFriendsMain,
        userListMain
    }
}
</script>

<style src="@app-sass/pages/user.scss"
    lang="scss"
    scoped >

</style>