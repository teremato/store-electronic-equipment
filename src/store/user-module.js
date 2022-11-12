/* eslint-disable no-unused-vars */
import { $api } from "@services/axios-rest-client";

export default {
    actions: {
        async userLogin({ commit }, form)  {
            return await $api.post('/login', form)
                .then(({ data }) => { return data })
        },
        async userRegister({ commit }, form) {
            return $api.post('/register', form)
                .then(({ data }) => { return data } )
        }
    }
}