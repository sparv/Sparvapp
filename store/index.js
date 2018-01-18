import Vuex from 'vuex'
import * as actions from './actions'

import user from './modules/user'
import clients from './modules/clients'
import metadata from './modules/metadata'
import settings from './modules/settings'

const createStore = () => {
  return new Vuex.Store({
    actions,
    modules: {
      metadata,
      settings,
      user,
      clients
    }
  })
}

export default createStore
