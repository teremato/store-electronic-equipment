/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";


export default {
    actions: {
        
        async getUserFriends({ commit }, { id }) {
            return await $api.get(`/friends/${id}`)
                .then(({ data }) => { return data })
        },
        async getAcceptFriends({ commit }) {
            return await $api.post("/friends/accept")
                .then(({ data }) => { return data })
        },
        async addFriend({ commit }, { id }) {
            return await $api.post(`/friends/add/${id}`)
                .then(({ data }) => { return data })
        },
        async acceptFriend({ commit }, { id }) {
            return await $api.post(`/friends/accept/${id}`)
                .then(({ data }) => { return data })
        },
        async removeFriend({ commit }, { id }) {
            return await $api.post(`/friends/remove/${id}`)
                .then(({ data }) => { return data })

        }
    }
}