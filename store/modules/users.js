/* ------------------------------------------------------------------
||  Users
------------------------------------------------------------------- */
import * as types from '../mutation-types'

const state = {
  relation_id: '',
  forename: '',
  surname: '',
  email: ''
}

/* ------------------------------------------------------------------
||  Users - Getters
------------------------------------------------------------------- */
const getters = {
  user: state => state
}

/* ------------------------------------------------------------------
||  Users - Actions
------------------------------------------------------------------- */
const actions = {
  async getUser ({ commit, state }) {
    try {
      const user = await this.$axios.$get('/users')
      commit(`SET_USER_RELATION_ID`, user.relation_id)
      commit(`SET_USER_FORENAME`, user.forename)
      commit(`SET_USER_SURNAME`, user.surname)
      commit(`SET_USER_EMAIL`, user.email)
    } catch (error) {
      console.log(error)
    }
  },

  async editUserMeta ({ commit, state }, data) {
    try {
      await this.$axios.$put(`/users/`, data)
    } catch (error) {
      console.log(error)
    }
  }
}

/* ------------------------------------------------------------------
||  Users - Mutations
------------------------------------------------------------------- */
const mutations = {
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
  getters,
  actions,
  mutations
}
