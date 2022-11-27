import { createStore } from 'vuex'

import GamesModule from "@store/games-module";
import UserModule from '@store/user-module';
import AuthModule from '@store/auth-module';
import MediaModule from '@store/media-module';
import PostsModule from '@store/posts-module';
import friendModule from '@store/friend-module';
import feedModule from '@store/feed-module';


export default createStore({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        GamesModule,
        UserModule,
        AuthModule,
        MediaModule,
        PostsModule,
        friendModule,
        feedModule
    }
})
