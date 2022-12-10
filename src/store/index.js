import { createStore,  } from 'vuex'

import GamesModule from "@store/modules/games-module";
import UserModule from '@/store/modules/user-module';
import AuthModule from '@/store/modules/auth-module';
import MediaModule from '@/store/modules/media-module';
import PostsModule from '@store/modules/posts-module';
import friendModule from '@store/modules/friend-module';
import feedModule from '@store/modules/feed-module';
import cartModule from '@store/modules/cart-module';

const store = createStore({
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
        feedModule,
        cartModule
    }
})

export default store