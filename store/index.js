import Vuex from 'vuex'

import users from './modules/users'
import metadata from './modules/metadata'
import settings from './modules/settings'
import customers from './modules/customers'
import exercises from './modules/exercises'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      users,
      metadata,
      settings,
      customers,
      exercises
    }
  })
}

export default createStore
