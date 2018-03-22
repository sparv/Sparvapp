/* ------------------------------------------------------------------
||  Metadata
------------------------------------------------------------------- */
import * as types from '../mutation-types'

const state = {
  siteTitle: ''
}

/* ------------------------------------------------------------------
||  Metadata - Mutations
------------------------------------------------------------------- */
const mutations = {
  [types.SET_APPLICATION_TITLE] (state, string) {
    state.siteTitle = string
  }
}

export default {
  state,
  mutations
}
