<template>
    <div class="friend__item">

        <div class="friend__item-left">

            <img v-if="friend.avatar" :src="friend.avatar" alt>
            <img v-else src="@/assets/images/no-user-photo.png"
                alt >

            <div class="bio">

                <router-link :to="`/user/${friend.user_id}`"
                    class="name" >

                    {{ friend.name }}
                </router-link>
                <span class="send_message">
                    Написать сообщение
                </span>
            </div>
        </div>
        <div class="friend__item-right">
            <button v-if="!friend.is_accept" 
                @click="acceptFriend" >
                
                <icon icon="person-plus" />
            </button>
            <button>
                <icon icon="person-x" />
            </button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        friend: {
            type: Object,
            default: () => {}
        }, 
    },
    methods: {
        async acceptFriend() {

            await this.$store.dispatch("acceptFriend", { id: this.friend.user_id })
                .then(({ friend }) => {
                    
                    this.$emit("click:accept", friend)
                }).catch((error) => { console.log( error ) })
        },
        async removeFriend() {

        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
    .friend__item {
        @include icon(25px);
        @include box-size(auto, 100%);
        @include box-shadow-default;
        @include flex-default;
        justify-content: space-between;

        padding: $sp_10;
        margin-bottom: $sp_15;

        &-left {
            @include flex-default;
            gap: $sp_10;

            img {
                @include box-size(42px, 42px);
                cursor: pointer;
                border-radius: 50%;
            }
            .bio {
                @include flex-vertical;
                .name {
                    cursor: pointer;
                    transition: $transition;
    
                    &:hover { color: $main_red; }
                }
                .send_message {
                    cursor: pointer;
                    font-size: 12px;
                    color: gray;
                }
            }
        }
        &-right {
            @include flex-default;
            gap: $sp_10;

            button {
                @include btn-input;
                cursor: pointer;
                transition: $transition;

                &:hover { color: $main_red; }
            }
        }
    }
</style>