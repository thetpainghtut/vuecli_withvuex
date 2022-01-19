import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');

export default new Vuex.Store({
  state: {
    loadingStatus: true,
    countries: []
  },
  mutations: {
    SET_LOADING_STATUS(state,status){
      state.loadingStatus = status
    },
    SET_COUNTRIES(state, countries){
      state.countries = countries
    }
  },
  actions: {
    getData(context){
      axios.get('https://restcountries.com/v3.1/all')
          .then(response => {
            context.commit('SET_LOADING_STATUS',false)
            context.commit('SET_COUNTRIES',response.data)
          })
    }
  },
  modules: {
  }
})
