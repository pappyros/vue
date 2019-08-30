import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import modules from './modules'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state :{
    signUpModal : false,
    id : "",
    password :"",
    email : "",
    name : ""
  },
  getters:{
    getSignUpModal(state){
      return state.signUpModal
    }
  },
  mutations:{
    switSignInModal(state){
      state.signUpModal = !state.signUpModal
    }

  }

})
