export async function getAllClients ({ commit, state }) {
  const data = await this.$axios.$get('/customers', {
    headers: { 'Authorization': `Bearer ${state.user.authToken}` }
  })

  try {
    commit('SET_CLIENTS', data.customer_list)
  } catch (error) {
    console.log(error)
  }
}

export async function getSingleClient ({ commit, state }, id) {
  const data = await this.$axios.$get(`/customers/${id}`, {
    headers: { 'Authorization': `Bearer ${state.user.authToken}` }
  })

  try {
    commit('SET_SINGLE_CLIENT', data.customer)
  } catch (error) {
    console.log(error)
  }
}

export async function addNewClient ({ commit, state }, client) {
  await this.$axios.$post('/customers/', {
    headers: { 'Authorization': `Bearer ${state.user.authToken}` },
    data: client
  })
}

export async function editClient ({ commit, dispatch, state }, payload) {
  await this.$axios.$put(`/customers/${payload.customer_id}`, {
    headers: { 'Authorization': `Bearer ${state.user.authToken}` },
    data: payload.editedClient
  })

  try {
    dispatch('getSingleClient', payload.customer_id)
  } catch (error) {
    console.log(error)
  }
}

export async function deleteClient ({ commit, state }, payload) {
  await this.$axios.$delete(`/customers/${payload.customer_id}`, {
    headers: { 'Authorization': `Bearer ${state.user.authToken}` },
    data: payload.surname
  })

  try {
    commit('DELETE_CLIENT', payload.customer_id)
  } catch (error) {
    console.log(error)
  }
}

export async function getAllUserData ({ commit, state }) {
  const data = await this.$axios.$get('/users', {
    headers: { 'Authorization': `Bearer ${state.user.authToken}` }
  })

  try {
    const user = data
    commit(`SET_USER_RELATION_ID`, user.relation_id)
    commit(`SET_USER_FORENAME`, user.forename)
    commit(`SET_USER_SURNAME`, user.surname)
    commit(`SET_USER_EMAIL`, user.email)
  } catch (error) {
    console.log(error)
  }
}
