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

  // Create A Customer
  async addCustomer ({ commit, state }, data) {
    try {
      await this.$axios.$post('/customers/', data)
    } catch (error) {
      console.log(error)
    }
  },

  // Get All Customers
  async getCustomers ({ commit, state }) {
    try {
      const data = await this.$axios.$get('/customers')
      commit('SET_CUSTOMERS', data.customer_list)
    } catch (error) {
      console.log(error)
    }
  },

  // Get One Customer
  async getCustomer ({ commit, state }, id) {
    try {
      const data = await this.$axios.$get(`/customers/${id}`)
      commit('SET_CUSTOMER', data.customer)
    } catch (error) {
      console.log(error)
    }
  },

  // Edit One Customer
  async editCustomer ({ commit, dispatch, state }, data) {
    try {
      await this.$axios.$patch(`/customers/${data.customer_id}`, data.editedClient)
      dispatch('getSingleClient', data.customer_id)
    } catch (error) {
      console.log(error)
    }
  },

  // Delete One Customer
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
  [types.SET_CUSTOMERS] (state, customers) {
    state.allCustomers = customers
  },

  [types.SET_CUSTOMER] (state, customer) {
    state.currentCustomer = customer
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
