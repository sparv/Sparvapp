/* ------------------------------------------------------------------
||  Exercises
------------------------------------------------------------------- */
import * as types from '../mutation-types'

const state = {
  exerciseGroups: [],
  currentExerciseGroup: {},
  currentExercise: {}
}

/* ------------------------------------------------------------------
||  Exercises - Getters
------------------------------------------------------------------- */
const getters = {
  allExerciseGroups: state => state.exerciseGroups,
  exerciseGroup: state => state.currentExerciseGroup,
  exercise: state => state.currentExercise
}

/* ------------------------------------------------------------------
||  Exercises - Actions
------------------------------------------------------------------- */
const actions = {
  async addExerciseGroup ({ commit, state }, group) {
    try {
      await this.$axios.$post('/exercisegroups/', group)
    } catch (error) {
      console.log(error)
    }
  },

  async getExerciseGroups ({ commit, state }) {
    try {
      const data = await this.$axios.$get('/exercisegroups/')
      commit('SET_EXERCISE_GROUPS', data.exercise_groups_list)
    } catch (error) {
      console.log(error)
    }
  },

  async getExerciseGroup ({ commit, state }, id) {
    try {
      const { exercisegroup } = await this.$axios.$get(`/exercisegroups/${id}`)
      commit('SET_SINGLE_EXERCISE_GROUPS', exercisegroup)
    } catch (error) {
      console.log(error)
    }
  },

  async editExerciseGroup ({ commit, state }, payload) {
    const groupData = {
      name: payload.name,
      description: payload.description,
      color: payload.color
    }

    try {
      await this.$axios.$patch(`/exercisegroups/${payload.exercisegroup_id}`, groupData)
    } catch (error) {
      console.log(error)
    }
  },

  async deleteExerciseGroup ({ commit, state }, id) {
    try {
      await this.$axios.$delete(`/exercisegroups/${id}`)
    } catch (error) {
      console.log(error)
    }
  },

  async addExercise ({ commit, state }, data) {
    try {
      await this.$axios.$post(`/exercisegroups/${data.id}/exercises/`, data.exercise)
    } catch (error) {
      console.log(error)
    }
  },

  async getExercise ({ commit, state }, id) {
    try {
      const { exercise } = await this.$axios.$get(`/exercisegroups/exercises/${id}`)
      commit('SET_SINGLE_EXERCISE', exercise)
    } catch (error) {
      console.log(error)
    }
  },

  async editExercise ({ commit, dispatch, state }, payload) {
    try {
      await this.$axios.$patch(`/exercisegroups/exercises/${payload.id}`, payload.exercise)
    } catch (error) {
      console.log(error)
    }
  },

  async deleteExercise ({ commit, state }, id) {
    try {
      await this.$axios.$delete(`/exercisegroups/exercises/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
}

/* ------------------------------------------------------------------
||  Exercises - Mutations
------------------------------------------------------------------- */
const mutations = {
  [types.SET_EXERCISE_GROUPS] (state, exerciseGroups) {
    state.exerciseGroups = exerciseGroups
  },

  [types.SET_SINGLE_EXERCISE_GROUPS] (state, exerciseGroups) {
    state.currentExerciseGroup = exerciseGroups
  },
  [types.SET_SINGLE_EXERCISE] (state, exerciseGroups) {
    state.currentExercise = exerciseGroups
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
