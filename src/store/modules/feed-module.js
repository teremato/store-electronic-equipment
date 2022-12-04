/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";
import * as actions from "@store/actions/feed-actions"


export default {
    actions: {

        async [actions.GET_NEW_FEED]({ commit }, params) {
            return await $api.get("user/feed", { params: params })
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.GET_FRIEND_FEED]({ commit }, params) {
            return await $api.get("user/feed/friends", { params: params })
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.GET_POPULARITY_FEED]({ commit }, params) {
            return await $api.get("user/feed/popularity", { params: params })
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.GET_FAVORITE_FEED]({ commit }, params) {
            return await $api.get("user/feed/favorite", { params: params })
                .then(({ data }) => {
                    return data
                })
        },
    }
}