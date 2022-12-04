/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";
import * as actions from "@store/actions/user-actions"

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
        },
        user: (state) => {
            return state.user
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        async [actions.GET_USER]({ commit }, token) {
            return await $api.get("/user/")
                .then(({ data }) => {

                    commit('setToken', token)
                    commit('setUser', data.user)

                    return data.user
                })
        },
        async [actions.GET_USER_BY_ID]({ commit }, id) {
            return await $api.get(`/user/` + id)
                .then(({ data }) => {
                    return data.user
                })
        },
        async [actions.CHANGE_AVATAR]({ commit }, photo) {
            return await $api.post("/user/avatar", photo)
                .then(({ data }) => {
                    return data.avatar
                })
        },
        async [actions.CHANGE_STATUS]({ commit }, form) {
            return await $api.post('/user/status', form)
                .then(({ data }) => {
                    return data.status
                })
        },
        async [actions.GET_USER_SETTINGS]({ commit }) {
            return await $api.get('user/options')
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.UPDATE_USER_SETTINGS]({ commit }, form) {
            return await $api.post('user/options', form)
                .then(({ data }) => {
                    return data
                })
        }
    }
}