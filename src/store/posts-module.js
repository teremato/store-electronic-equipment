/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";


export default {
    actions: {
        async createPost({ commit }, form) {
            return await $api.post("/posts/create", form)
                .then(({ data }) => {
                    return data
                })
        },
        async getUserPost({ commit }) {
            return await $api.get("/posts/user")
                .then(({ data }) => {
                    return data
                })
        },
        async likePost({ commit }, { id }) {
            return await $api.post(`/posts/like/${id}`)
                .then(({ data }) => {
                    return data
                })
        },
        async addFavoritePost({ commit }, { id }) {
            return await $api.post(`/posts/favorite/${id}`)
                .then(({ data }) => {
                    return data
                })
        }

    }
}