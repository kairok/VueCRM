import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import firebase from 'firebase/app'

//import { register } from 'register-service-worker';

import info from './info'
import category from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      //debugger
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {
    
    async fetchCurrency() {
      const key = '0355a5653a3136702b05ba0bdf7d6486' //process.env.VUE_APP_FIXER
      const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
      return await res.json()
    },

    async login({ commit}, {email,password}) {
      try {
          await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
          console.log(e)
          commit('setError', e)
          throw e
      }
    },
    async logout ({commit}) {
      await firebase.auth().signOut()
      commit('clearInfo')
    },
    async register({dispatch, commit}, {email,password, name}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 1000,
          name: name
        })
        } catch (e) {
         console.log(e)
          commit('setError', e)
           throw e
        }
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    }
  },
  modules: {
    auth, info , category
  }
})
