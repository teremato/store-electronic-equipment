/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";
import * as actions from "@store/actions/auth-actions"


export default {
    state: {
        token: '',
    },
    getters: {
        isAuth: (state) => {
            return (state.token) ? true : false
        },
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload;
        },
        removeToken(state) {
            state.token = ''
        },
    },
    actions: {
        async [actions.USER_LOGIN]({ commit }, form)  {
            return await $api.post('/auth/login', form)
                .then(({ data }) => {

                    commit('setUser', data.user)
                    commit('setToken', data.token)

                    return data
                })
        },
        async [actions.USER_REGISTER]({ commit }, form) {
            return $api.post('/auth/registration', form)
                .then(({ data }) => {

                    commit('setUser', data.user)
                    commit('setToken', data.token)

                    return data 
                })
        },
        async [actions.USER_LOGOUT]({ commit }) {
            await $api.post('auth/logout')
                .then(() => {

                    commit('removeToken')
                })
        }
    }
}