/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";


export default {
    actions: {
        async getGames({ commit }, params = {}) {
            return await $api.get('/games', { params: params })
                .then(({ data }) => { return data })

        },
        async getGameItem({ commit }, { slug }) {
            return await $api.get(`/games/${slug}`)
                .then(({ data }) => { return data })
        },
        async getGameItemAlbum({ commit }, { slug }) {
            return await $api.get(`/games/album/${slug}`)
                .then(({ data }) => { return data })
        }
    }
}
