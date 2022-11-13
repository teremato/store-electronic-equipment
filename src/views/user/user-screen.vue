<template>
    <div class="user-page">

    </div>
</template>

<script>
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

    }
}
</script>

<style src="@app-sass/pages/user.scss"
    lang="scss"
    scoped >

</style>