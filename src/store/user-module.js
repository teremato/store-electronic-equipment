/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";

export default {
    state: {
        user: {}
    },
    getters: {
        userId: (state) => {
            return state.user.id
        },
        userName: (state) => {
            return state.user.name
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        async getUser({ commit }, token) {
            return await $api.get("/user/")
                .then(({ data }) => {

                    commit('setToken', token)
                    commit('setUser', data.user)

                    return data.user
                })
        },
        async getUserById({ commit }, id) {
            return await $api.get(`/user/` + id)
                .then(({ data }) => {
                    return data.user
                })
        },
        async changeAvatar({ commit }, photo) {
            return await $api.post("/user/avatar", photo)
                .then(({ data }) => {
                    return data.avatar
                })
        },
        async changeStatus({ commit }, form) {
            return await $api.post('/user/status', form)
                .then(({ data }) => {
                    return data.status
                })
        }
    }
}