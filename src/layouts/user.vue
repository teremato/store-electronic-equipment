<template>
    <div class="user__layout">
        <aside class="user_layout-aside">
            
            <template v-for="(item, index) in sideBar" :key="index">
                <router-link :to="'/user/' + userId + item.route">

                    <!-- <icon :icon="item.icon"/> -->
                    {{ item.name }}
                </router-link>
            </template>
        </aside>
        <router-view :key="$route"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "app-user-layout",
    data() {
        return {
            /** 
             * TODO: Добавить иконки для каждого поля
             */
            sideBar: [
                { name: 'Моя страница', route: '/', icon: 'person-circle'},
                { name: 'Лента', route: '/feed', icon: 'newspaper'},
                { name: 'Друзья', route: '/friends', icon: 'person-lines-fill' },
                { name: 'Мои игры', route: '/', icon: 'mouse3'},
                { name: 'Мои фотки', route: '/photos', icon: 'images'},
                { name: 'Сообщества', route: '/', icon: 'people'},
                { name: 'Настройки', route: '/', icon: 'nut' },
            ]
        }
    },
    computed: {
        ...mapGetters({
            userId: "userId"
        })
    }
}
</script>

<style lang="scss" scoped>
    .user__layout {
        display: flex;
        width: $default_user_container;

        margin: 0 auto;
        margin-top: $sp_20;
        margin-bottom: $sp_20;

        .user_layout-aside {
            @include flex-vertical;
            @include box-size(auto, 20%);
            gap: $sp_10;
            // margin-right: $sp_20;

            a {
                @include flex-default;
                // @include icon(18px);
                // gap: $sp_10;

                transition: $transition;
                &:hover { color: $main_red; }
            }
        }
    }
</style>