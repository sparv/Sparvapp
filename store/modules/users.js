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
  async loginUser ({ commit, state }, data) {
    try {
      await this.$auth.login({ data })
    } catch (error) {
      console.log(error)
    }
  },

  async signUpUser ({ dispatch, commit, state }, data) {
    try {
      const user = await this.$axios.$post('/users/', data)

      if (user) {
        await dispatch('loginUser', { email: data.email, password: data.password })
      }
    } catch (error) {
      console.log(error)
    }
  },

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

  async getRefreshToken ({ commit, state }) {
    console.log('Okay!')
    try {
      const data = await this.$axios.$put('/authentication')
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  },

  async editUserMeta ({ commit, state }, data) {
    try {
      await this.$axios.$put('/users', data)
    } catch (error) {
      console.log(error)
    }
  },

  async editUserSecurity ({ commit, state }, data) {
    try {
      await this.$axios.$put('/users', data)
    } catch (error) {
      console.log(error)
    }
  },

  async deleteUser ({ commit, state }, password) {
    try {
      await this.$axios.$delete('/users', password)
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
