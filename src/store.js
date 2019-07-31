import Vue from 'vue'
import Vuex from 'vuex'
// import { testApi } from "./common/api";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // test: ''
    },
    mutations: {
        // getTest (state, payload) {
        //     // console.log(payload.data.data.msg)
        //     state.test = payload.data.data.msg
        // }
    },
    getters: {

    },
    actions: {
        // getTest ({ commit }) {
        //     testApi().then(res => {
        //         // console.log(res)
        //         commit('getTest', res)
        //     })
        // }
    }
})