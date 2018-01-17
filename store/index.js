import axios from 'axios'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      metadata: {
        siteTitle: ''
      },
      settings: {
        applicatonSidebar: false,
        mobileAppBarLeftAction: false,
        mobileAppBarRightAction: false,
        isSendingRequest: false
      },
      user: {
        authUser: null,
        authToken: ''
      },
      clients: []
    },

    mutations: {
      setApplicationTitle (state, string) {
        state.metadata.siteTitle = string
      },

      setApplicationSidebar (state, bool) {
        state.settings.applicatonSidebar = bool
      },
      setMobileAppBarLeftAction (state, bool) {
        state.settings.mobileAppBarLeftAction = bool
      },
      setMobileAppBarRightAction (state, bool) {
        state.settings.mobileAppBarRightAction = bool
      },
      setIsSendingRequest (state, bool) {
        state.settings.isSendingRequest = bool
      },

      setAuthUser (state, user) {
        state.user.authUser = user
      },
      setAuthToken (state, string) {
        state.user.authToken = string
      },

      UPDATE_CLIENTS (state, clients) {
        state.clients = clients
      },

      ADD_NEW_CLIENT (state, client) {
        state.clients.push(client)
      },

      DELETE_CLIENT (state, id) {
        const clientIndex = state.clients.findIndex(c => c.customer_id === id)
        state.clients.splice(clientIndex, 1)
      }
    },

    actions: {
      getAllClients ({ commit, state }) {
        return new Promise((resolve, reject) => {
          axios({
            url: `http://localhost:4040/customers`,
            method: `GET`,
            headers: {
              'Authorization': `Bearer ${state.user.authToken}`
            }
          })
            .then((response) => {
              const clients = response.data.customer_list
              commit('UPDATE_CLIENTS', clients)
              resolve()
            })
            .catch(error => {
              console.log(error)
              reject(error)
            })
        })
      },

      addNewClient ({ commit, state }, client) {
        return new Promise((resolve, reject) => {
          axios({
            url: `http://localhost:4040/customers`,
            method: `POST`,
            headers: {
              'Authorization': `Bearer ${state.user.authToken}`
            },
            data: client
          })
            .then((response) => {
              resolve()
            })
            .catch(error => {
              console.log(error)
              reject(error)
            })
        })
      },

      editClient ({ commit, dispatch, state }, payload) {
        return new Promise((resolve, reject) => {
          axios({
            url: `http://localhost:4040/customers/${payload.customer_id}`,
            method: `PUT`,
            headers: {
              'Authorization': `Bearer ${state.user.authToken}`
            },
            data: payload.editedClient
          })
            .then((response) => {
              console.log(response)
              dispatch('getSingleClient', payload.customer_id)
              resolve()
            })
            .catch(error => {
              console.log(error)
              reject(error)
            })
        })
      },

      deleteClient ({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
          axios({
            url: `http://localhost:4040/customers/${payload.customer_id}`,
            method: `DELETE`,
            headers: {
              'Authorization': `Bearer ${state.user.authToken}`
            },
            data: {
              surname: payload.surname
            }
          })
            .then(() => {
              commit('DELETE_CLIENT', payload.customer_id)
              resolve()
            })
            .catch(error => {
              console.log(error)
              reject(error)
            })
        })
      }
    }
  })
}

export default createStore
