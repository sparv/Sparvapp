import * as types from '../mutation-types'

const state = {
  exerciseGroups: [],
  currentExerciseGroup: {}
}

const getters = {
  allExerciseGroups: state => state.exerciseGroups,
  exerciseGroup: state => state.currentExerciseGroup
}

const mutations = {
  [types.SET_EXERCISE_GROUPS] (state, exerciseGroups) {
    state.exerciseGroups = exerciseGroups
  },

  [types.SET_SINGLE_EXERCISE_GROUPS] (state, exerciseGroups) {
    state.currentExerciseGroup = exerciseGroups
  }
}

export default {
  state,
  getters,
  mutations
}
