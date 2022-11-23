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
        }
    }
}