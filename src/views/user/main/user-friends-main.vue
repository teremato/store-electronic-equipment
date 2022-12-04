<template>
    <div class="user__page-friends">

        <h3>
            Друзья
            <span>{{ friends.length }}</span>
        </h3>

        <div v-if="friends.length" class="user__page-friends-list">

            <template v-for="(item, index) in friends" 
                :key="index" >

                <div class="friends-list-item">

                    <img v-if="item.avatar"
                        :src="item.avatar" alt >

                    <img v-else src="@/assets/images/no-user-photo.png"
                        class="no-image"
                        alt >

                    <router-link :to="`/user/${item.user_id}`">
                        {{ item.name }}
                    </router-link>
                </div>
            </template>
        </div>
        <div v-else>
            <app-empty-block label="У вас пока нет друзей :(" />
        </div>
    </div>
</template>

<script>
import appEmptyBlock from '@components/blocks/app-empty-block.vue';

export default {
    props: {
        friends: {
            type: Array,
            default: () => []
        }
    },
    components: {
        appEmptyBlock
    }
}
</script>

<style lang="scss" scoped>
    .user__page-friends {
        @include box-size(max-content, 200px);

        h3 span { color: gray; }
        &-list {
            @include box-shadow-default;
            @include flex-vertical;
            gap: $sp_5;

            padding: $sp_15;
            margin: $sp_20 0;

            .friends-list-item {
                @include flex-default;
                gap: $sp_10;
                transition: $transition;

                img {
                    @include box-size(42px, 42px);
                    border-radius: 50%;
                }
                a {
                    font-size: $font_size_xs;
                    transition: $transition;

                    &:hover {
                        cursor: pointer;
                        color: $main_red;
                    }
                }
            }
        }
    }
    .no-image {
        border: 2px solid $black;
    }
</style>