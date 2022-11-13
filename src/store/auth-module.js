/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";


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
        async userLogin({ commit }, form)  {
            return await $api.post('/auth/login', form)
                .then(({ data }) => {

                    commit('setUser', data.user)
                    commit('setToken', data.token)

                    return data
                })
        },
        async userRegister({ commit }, form) {
            return $api.post('/auth/register', form)
                .then(({ data }) => {

                    commit('setUser', data.user)
                    commit('setToken', data.token)

                    return data 
                })
        },
        async userLogout({ commit }) {
            await $api.post('auth/logout')
                .then(() => {

                    commit('removeToken')
                })
        }
    }
}