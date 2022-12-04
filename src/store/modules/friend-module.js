/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";
import * as actions from "@store/actions/friends-actions"


export default {
    actions: {
        
        async [actions.GET_USER_FRIENDS]({ commit }, { id }) {
            return await $api.get(`/friends/${id}`)
                .then(({ data }) => { return data })
        },
        async [actions.GET_ACCEPT_FRIENDS]({ commit }) {
            return await $api.post("/friends/accept")
                .then(({ data }) => { return data })
        },
        async [actions.ADD_FRIEND]({ commit }, { id }) {
            return await $api.post(`/friends/add/${id}`)
                .then(({ data }) => { return data })
        },
        async [actions.ACCEPT_FRIEND]({ commit }, { id }) {
            return await $api.post(`/friends/accept/${id}`)
                .then(({ data }) => { return data })
        },
        async [actions.REMOVE_FRIEND]({ commit }, { id }) {
            return await $api.post(`/friends/remove/${id}`)
                .then(({ data }) => { return data })

        }
    }
}