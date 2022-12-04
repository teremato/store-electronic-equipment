/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";
import * as actions from "@store/actions/games-actions"


export default {
    actions: {
        async [actions.GET_GAMES]({ commit }, params = {}) {
            return await $api.get('/games', { params: params })
                .then(({ data }) => { return data })
        },
        async [actions.GET_GAME_ITEM]({ commit }, { slug }) {
            return await $api.get(`/games/${slug}`)
                .then(({ data }) => { return data })
        },
        async [actions.GET_GAME_ITEM_ALBUM]({ commit }, { slug }) {
            return await $api.get(`/games/album/${slug}`)
                .then(({ data }) => { return data })
        },
        async [actions.SEARCH_GAME]({ commit }, params = {}) {
            return await $api.get('/search', { params: params })
                .then(({ data }) => { return data })
        }
    }
}
