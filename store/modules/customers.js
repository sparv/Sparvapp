/* ------------------------------------------------------------------
||  Customers
------------------------------------------------------------------- */
import * as types from '../mutation-types'

const state = {
  allCustomers: [],
  currentCustomer: {}
}

/* ------------------------------------------------------------------
||  Customers - Getters
------------------------------------------------------------------- */
const getters = {
  allCustomers: state => state.allCustomers
}

/* ------------------------------------------------------------------
||  Customers
------------------------------------------------------------------- */
const actions = {
  async getCustomers ({ commit, state }) {
    try {
      const data = await this.$axios.$get('/customers')
      commit('SET_CLIENTS', data.customer_list)
    } catch (error) {
      console.log(error)
    }
  },

  async getCustomer ({ commit, state }, id) {
    try {
      const data = await this.$axios.$get(`/customers/${id}`)
      commit('SET_SINGLE_CLIENT', data.customer)
    } catch (error) {
      console.log(error)
    }
  },

  async addCustomer ({ commit, state }, data) {
    try {
      await this.$axios.$post('/customers/', data)
    } catch (error) {
      console.log(error)
    }
  },

  async editCustomer ({ commit, dispatch, state }, data) {
    try {
      await this.$axios.$put(`/customers/${data.customer_id}`, data.editedClient)
      dispatch('getSingleClient', data.customer_id)
    } catch (error) {
      console.log(error)
    }
  },

  async deleteCustomer ({ commit, state }, id) {
    try {
      await this.$axios.$delete(`/customers/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
}

/* ------------------------------------------------------------------
||  Customers - Mutations
------------------------------------------------------------------- */
const mutations = {
  [types.SET_CLIENTS] (state, customers) {
    state.allCustomers = customers
  },

  [types.SET_SINGLE_CLIENT] (state, customer) {
    state.currentCustomer = customer
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
