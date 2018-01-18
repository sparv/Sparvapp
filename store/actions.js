import axios from 'axios'

export const getAllClients = ({ commit, state }) => {
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
        commit('SET_CLIENTS', clients)
        resolve()
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}

export const getSingleClient = ({ commit, state }, id) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:4040/customers/${id}`,
      method: `GET`,
      headers: {
        'Authorization': `Bearer ${state.user.authToken}`
      }
    })
      .then((response) => {
        console.log(response)
        const client = response.data
        commit('SET_SINGLE_CLIENT', client)
        resolve()
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}

export const addNewClient = ({ commit, state }, client) => {
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
        reject(error)
      })
  })
}

export const editClient = ({ commit, dispatch, state }, payload) => {
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
}

export const deleteClient = ({ commit, state }, payload) => {
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

export const getAllUserData = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:4040/users`,
      method: `GET`,
      headers: {
        'Authorization': `Bearer ${state.user.authToken}`
      }
    })
      .then((response) => {
        const user = response.data
        commit(`SET_USER_RELATION_ID`, user.relation_id)
        commit(`SET_USER_FORENAME`, user.forename)
        commit(`SET_USER_SURNAME`, user.surname)
        commit(`SET_USER_EMAIL`, user.email)
        resolve()
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}
