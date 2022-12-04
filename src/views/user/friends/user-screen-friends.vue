<template>
    <div class="user__page-friends">
        
        <div class="user__page-friends-content">
            
            <div class="user_page-friends-container">

                <h2>Друзья</h2>
                <app-input v-model="form.query"
                    placeholder="Поиск..."
                    rows="7" />

                <div class="user__page-friends-list">

                    <template v-for="(item, index) in tabFiler" :key="index" >
                        <app-friend-item :friend="item"
                            @click:accept="addAcceptFriend" />
                            
                    </template>
                </div>
            </div>

            <app-tab-block :tabs="tabs"
                @change:filter="getFilter" />
        </div>
    </div>
</template>

<script>
import appTabBlock from '@components/blocks/app-tab-block.vue';
import appInput from '@components/fields/app-input.vue';
import appFriendItem from '@components/blocks/app-friend-item.vue';
import { mapGetters } from 'vuex';
import { 
    GET_USER_FRIENDS,
    GET_ACCEPT_FRIENDS 
} from '@store/actions/friends-actions';

export default {
    data() {
        return {
            form: {
                query: ''
            },
            filter: '',
            tabs: [
                { name: "Друзья", filter: "friends" },
                { name: "Заявки в друзья", filter: "added" },
                { name: "Заблокированные", filter: "blocked" }
            ],
            friends: [],
            friendsAccept: []
        }
    },
    created() {

        Promise.all([
            
            this.getUserFriends(),
            this.getAcceptFriends()
        ])
        .catch((error) => {
            console.log(error)
        })
    },
    methods: {
        getFilter(event) {
            this.filter = event;
        },
        async getUserFriends() {

            await this.$store.dispatch(GET_USER_FRIENDS, { id: this.userId })
                .then(({ data }) => {
                    this.friends = data;
                })
        },
        async getAcceptFriends() {

            await this.$store.dispatch(GET_ACCEPT_FRIENDS)
                .then(({ data }) => {
                    this.friendsAccept = data
                })
        },
        addAcceptFriend(event) {

            this.friendsAccept = this.friendsAccept.filter((item) => {
                item.id !== event.id
            });
            this.friends.push(event)
        }
    },
    computed: {
        ...mapGetters({
            userId: "userId"
        }),
        tabFiler() {

            switch (this.filter) {
                case "friends":
                    return this.friends
                case "added":
                    return this.friendsAccept
                default:
                    return this.friends
            }
        }
    },
    components: {
        appTabBlock,
        appInput,
        appFriendItem
    },
}
</script>

<style src="@app-sass/pages/user.scss" 
    lang="scss" 
    scoped >
</style>