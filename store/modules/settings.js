import * as types from '../mutation-types'

const state = {
  applicatonSidebar: false,
  mobileAppBarLeftAction: false,
  mobileAppBarRightAction: false,
  isSendingRequest: false
}

const mutations = {
  [types.SET_APPLICATION_SIDEBAR] (state, bool) {
    state.applicatonSidebar = bool
  },

  [types.SET_MOBILE_APPBAR_LEFT_ACTION] (state, bool) {
    state.mobileAppBarLeftAction = bool
  },

  [types.SET_MOBILE_APPBAR_RIGHT_ACTION] (state, bool) {
    state.mobileAppBarRightAction = bool
  },

  [types.SET_SENDING_REQUEST] (state, bool) {
    state.isSendingRequest = bool
  }
}

export default {
  state,
  mutations
}
