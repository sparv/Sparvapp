import * as types from '../mutation-types'

const state = {
  all: [],
  currentProfile: {}
}

const getters = {
  allClients: state => state.all
}

const mutations = {
  [types.SET_CLIENTS] (state, clients) {
    state.all = clients
  },

  [types.SET_SINGLE_CLIENT] (state, client) {
    state.currentProfile = client
  },

  [types.DELETE_CLIENT] (state, id) {
    const clientIndex = state.all.findIndex(c => c.customer_id === id)
    state.splice(clientIndex, 1)
  }
}

export default {
  state,
  getters,
  mutations
}
