/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";

export default {
    actions: {
        async addUserMedia({ commit }, { id, photo }) {
            return await $api.post("user/media/create/" + id, photo)
                .then(({ data }) => {
                    return data
                })
        }
    }
}