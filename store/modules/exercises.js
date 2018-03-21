import * as types from '../mutation-types'

const state = {
  exerciseGroups: [],
  currentExerciseGroup: {},
  currentExercise: {}
}

const getters = {
  allExerciseGroups: state => state.exerciseGroups,
  exerciseGroup: state => state.currentExerciseGroup,
  exercise: state => state.currentExercise
}

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
  mutations
}
