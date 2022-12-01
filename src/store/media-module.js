/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";

export default {
    actions: {
        async getUserMedia({ commit }, {id, params}) {

            return await $api.get(`user/${id}/media/`, { params: params })
                .then(({ data }) => {
                    return data
                })
        },
        async addUserMedia({ commit }, { id, photo }) {
            
            return await $api.post("user/media/create/" + id, photo)
                .then(({ data }) => {
                    return data
                })
        }
    }
}