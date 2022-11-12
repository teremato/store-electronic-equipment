import { createStore } from 'vuex'

import GamesModule from "@store/games-module";
import UserModule from './user-module';


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
      GamesModule,
      UserModule
  }
})
