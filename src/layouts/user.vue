<template>
    <div class="user__layout">
        <aside class="user_layout-aside">
            <template v-for="(item, index) in sideBar" :key="index">
                <router-link :to="`/user/${item.route}`">
                    <!-- <icon icon=""/> -->
                    {{ item.name }}
                </router-link>
            </template>
        </aside>
        <router-view/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
    name: "app-user-layout",
    data() {
        return {
            /** 
             * TODO:Добавить иконки для каждого поля
             */
            sideBar: [
                { name: 'Моя страница', route: '/'},
                { name: 'Лента', route: '/'},
                { name: 'Друзья', route: 'friends' },
                { name: 'Мои игры', route: '/'},
                { name: 'Мои фотки', route: '/'},
                { name: 'Сообщества', route: '/'},
                { name: 'Настройки', route: '/' },
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
            gap: $sp_5;

            a {
                transition: $transition;

                &:hover { color: $main_red; }
            }
        }
    }
</style>