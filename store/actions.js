/* ------------------------------------------------------------------
||  Customers
------------------------------------------------------------------- */
export async function getAllClients ({ commit, state }) {
  try {
    const data = await this.$axios.$get('/customers')
    commit('SET_CLIENTS', data.customer_list)
  } catch (error) {
    console.log(error)
  }
}

export async function getSingleClient ({ commit, state }, id) {
  try {
    const data = await this.$axios.$get(`/customers/${id}`)
    commit('SET_SINGLE_CLIENT', data.customer)
  } catch (error) {
    console.log(error)
  }
}

export async function addNewClient ({ commit, state }, client) {
  try {
    await this.$axios.$post('/customers/', client)
  } catch (error) {
    console.log(error)
  }
}

export async function editClient ({ commit, dispatch, state }, payload) {
  try {
    await this.$axios.$put(`/customers/${payload.customer_id}`, payload.editedClient)
    dispatch('getSingleClient', payload.customer_id)
  } catch (error) {
    console.log(error)
  }
}

export async function deleteClient ({ commit, state }, payload) {
  try {
    await this.$axios.$delete(`/customers/${payload.customer_id}`, payload.surname)
    commit('DELETE_CLIENT', payload.customer_id)
  } catch (error) {
    console.log(error)
  }
}

/* ------------------------------------------------------------------
||  Exercises
------------------------------------------------------------------- */
export async function getAllExerciseGroups ({ commit, state }) {
  try {
    const data = await this.$axios.$get('/exercisegroups/')
    commit('SET_EXERCISE_GROUPS', data.exercise_groups_list)
  } catch (error) {
    console.log(error)
  }
}

export async function addNewExerciseGroup ({ commit, state }, group) {
  try {
    await this.$axios.$post('/exercisegroups/', group)
  } catch (error) {
    console.log(error)
  }
}

export async function getSingleExerciseGroup ({ commit, state }, id) {
  try {
    const { exercisegroup } = await this.$axios.$get(`/exercisegroups/${id}`)
    commit('SET_SINGLE_EXERCISE_GROUPS', exercisegroup)
  } catch (error) {
    console.log(error)
  }
}

export async function editExerciseGroup ({ commit, state }, payload) {
  try {
    await this.$axios.$put(`/exercisegroups/${payload.exercisegroup_id}`, { name: payload.name, description: payload.description })
  } catch (error) {
    console.log(error)
  }
}

export async function getSingleExercise ({ commit, state }, id) {
  try {
    const { exercise } = await this.$axios.$get(`/exercisegroups/exercises/${id}`)
    commit('SET_SINGLE_EXERCISE', exercise)
  } catch (error) {
    console.log(error)
  }
}

export async function addNewExercise ({ commit, state }, data) {
  try {
    await this.$axios.$post(`/exercisegroups/${data.id}/exercises/`, data.exercise)
  } catch (error) {
    console.log(error)
  }
}

export async function editExercise ({ commit, dispatch, state }, payload) {
  console.log(payload)
  try {
    await this.$axios.$put(`/exercisegroups/exercises/${payload.id}`, payload.exercise)
  } catch (error) {
    console.log(error)
  }
}

export async function deleteExercise ({ commit, state }, id) {
  try {
    await this.$axios.$delete(`/exercisegroups/exercises/${id}`)
  } catch (error) {
    console.log(error)
  }
}

export async function deleteExerciseGroup ({ commit, state }, id) {
  try {
    await this.$axios.$delete(`/exercisegroups/${id}`)
  } catch (error) {
    console.log(error)
  }
}

/* ------------------------------------------------------------------
||  User
------------------------------------------------------------------- */
export async function getAllUserData ({ commit, state }) {
  try {
    const user = await this.$axios.$get('/users')
    commit(`SET_USER_RELATION_ID`, user.relation_id)
    commit(`SET_USER_FORENAME`, user.forename)
    commit(`SET_USER_SURNAME`, user.surname)
    commit(`SET_USER_EMAIL`, user.email)
  } catch (error) {
    console.log(error)
  }
}
