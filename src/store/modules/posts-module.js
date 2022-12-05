/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";
import * as actions from "@store/actions/posts-actions"


export default {
    actions: {
        async [actions.CREATE_POST]({ commit }, form) {
            return await $api.post("/posts/create", form)
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.GET_USER_POST]({ commit }) {
            return await $api.get("/posts/user")
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.LIKE_POST]({ commit }, { id }) {
            return await $api.post(`/posts/like/${id}`)
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.ADD_FAVORITE_POST]({ commit }, { id }) {
            return await $api.post(`/posts/favorite/${id}`)
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.REMOVE_POST]({ commit }, { id }) {
            return await $api.delete(`/posts/delete/${id}`)
                .then(({ data }) => {
                    return data
                })
        }

    }
}