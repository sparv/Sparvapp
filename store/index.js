import axios from 'axios'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      siteTitle: '',
      applicatonSidebar: false,
      mobileAppBarLeftAction: false,
      mobileAppBarRightAction: false,

      authUser: null,
      authToken: '',

      clients: []
    },

    mutations: {
      setApplicationTitle (state, string) {
        state.siteTitle = string
      },
      setApplicationSidebar (state, bool) {
        state.applicatonSidebar = bool
      },
      setMobileAppBarLeftAction (state, bool) {
        state.mobileAppBarLeftAction = bool
      },
      setMobileAppBarRightAction (state, bool) {
        state.mobileAppBarRightAction = bool
      },
      setAuthUser (state, user) {
        state.authUser = user
      },
      setAuthToken (state, string) {
        state.authToken = string
      },

      UPDATE_SINGLE_CLIENT (state, client) {
        const clientIndex = state.clients.findIndex((c => c.customer_id == client.customer_id));
        state.clients[clientIndex] = client
      },

      UPDATE_CLIENTS (state, clients) {
        state.clients = clients
      }
    },

    actions: {
      getSingleClient({ commit, state }, param) {
        axios({
          url: `http://localhost:4040/customers/${param}`,
          method: `GET`,
          headers: {
            'Authorization': `Bearer ${state.authToken}`
          }
        })
        .then((response) => {
          const client = response.data
          commit("UPDATE_SINGLE_CLIENT", client)
        })
        .catch(error => {
          console.log(error)
        })
      },

      getAllClients({ commit, state }) {
        axios({
          url: `http://localhost:4040/customers`,
          method: `GET`,
          headers: {
            'Authorization': `Bearer ${state.authToken}`
          }
        })
        .then((response) => {
          const clients = response.data.customer_list
          commit("UPDATE_CLIENTS", clients)
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  })
}

export default createStore
