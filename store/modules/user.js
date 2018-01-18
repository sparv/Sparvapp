import * as types from '../mutation-types'

const state = {
  authToken: '',
  relation_id: '',
  forename: '',
  surname: '',
  email: ''
}

const mutations = {
  [types.SET_USER_AUTH_TOKEN] (state, string) {
    state.authToken = string
  },
  [types.SET_USER_RELATION_ID] (state, string) {
    state.relation_id = string
  },
  [types.SET_USER_FORENAME] (state, string) {
    state.forename = string
  },
  [types.SET_USER_SURNAME] (state, string) {
    state.surname = string
  },
  [types.SET_USER_EMAIL] (state, string) {
    state.email = string
  }
}

export default {
  state,
  mutations
}
