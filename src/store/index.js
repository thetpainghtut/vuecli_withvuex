import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state,data){
      // not push if equal id, ++qty
      state.cart.push(data);
    }
  },
  actions: {
    addtocart(state,payload){
      state.commit('ADD_TO_CART',payload)
    }
  },
  modules: {
  }
})
