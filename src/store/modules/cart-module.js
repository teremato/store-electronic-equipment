/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";
import * as actions from "@store/actions/cart-actions"


export default {
    actions: {
        async [actions.GET_USER_CART]({ commit }) {
            return await $api.get("/cart")
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.ADD_TO_CART]({commit}, { id }) {
            return await $api.post(`/cart/add/${id}`)
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.REMOVE_FROM_CART]({ commit }, id) {
            return await $api.delete(`/cart/remove/${id}`)
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.DECREMENT_COUNT]({ commit }, id) {
            return await $api.delete(`cart/count/${id}`)
                .then(({ data }) => {
                    return data
                })
        }
    }
}