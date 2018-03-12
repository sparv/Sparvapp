/* ------------------------------------------------------------------
||  Customers
------------------------------------------------------------------- */
export async function getAllClients ({ commit, state }) {
  const data = await this.$axios.$get('/customers')

  try {
    commit('SET_CLIENTS', data.customer_list)
  } catch (error) {
    console.log(error)
  }
}

export async function getSingleClient ({ commit, state }, id) {
  const data = await this.$axios.$get(`/customers/${id}`)

  try {
    commit('SET_SINGLE_CLIENT', data.customer)
  } catch (error) {
    console.log(error)
  }
}

export async function addNewClient ({ commit, state }, client) {
  await this.$axios.$post('/customers/', client)
}

export async function editClient ({ commit, dispatch, state }, payload) {
  await this.$axios.$put(`/customers/${payload.customer_id}`, payload.editedClient)

  try {
    dispatch('getSingleClient', payload.customer_id)
  } catch (error) {
    console.log(error)
  }
}

export async function deleteClient ({ commit, state }, payload) {
  await this.$axios.$delete(`/customers/${payload.customer_id}`, payload.surname)

  try {
    commit('DELETE_CLIENT', payload.customer_id)
  } catch (error) {
    console.log(error)
  }
}

/* ------------------------------------------------------------------
||  Exercises
------------------------------------------------------------------- */
export async function getAllExerciseGroups ({ commit, state }) {
  const data = await this.$axios.$get('/exercisegroups/')

  try {
    commit('SET_EXERCISE_GROUPS', data.exercise_groups_list)
  } catch (error) {
    console.log(error)
  }
}

export async function addNewExerciseGroup ({ commit, state }, group) {
  await this.$axios.$post('/exercisegroups/', group)
}

// export async function getSingleExerciseGroup ({ commit, state }, id) {
//   try {
//     var { exercisegroup } = await this.$axios.$get(`/exercisegroups/${id}`)
//     const { exercise_list } = await this.$axios.$get(`/exercisegroups/${id}/exercises`)
//     exercisegroup.exercises = exercise_list

//     commit('SET_SINGLE_EXERCISE_GROUPS', exercisegroup)
//   } catch (error) {
//     console.log(error)
//   }
// }

// export async function getSingleExercise ({ commit, state }, ids) {
//   try {
//     await this.$axios.$post(`/exercisegroups/${ids.groups}/exercises/${ids.exercise}`, )
//   } catch (error) {
//     console.log(error)
//   }
// }

export async function addNewExercise ({ commit, state }, data) {
  console.log(data.exercise)
  await this.$axios.$post(`/exercisegroups/${data.groupId}/exercises/`, data.exercise)
}

/* ------------------------------------------------------------------
||  User
------------------------------------------------------------------- */
export async function getAllUserData ({ commit, state }) {
  const data = await this.$axios.$get('/users')

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
