/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";
import * as actions from "@store/actions/media-actions";


export default {
    actions: {
        async [actions.GET_USER_MEDIA]({ commit }, {id, params}) {

            return await $api.get(`user/${id}/media/`, { params: params })
                .then(({ data }) => {
                    return data
                })
        },
        async [actions.ADD_USER_MEDIA]({ commit }, { id, photo }) {
            
            return await $api.post("user/media/create/" + id, photo)
                .then(({ data }) => {
                    return data
                })
        }
    }
}