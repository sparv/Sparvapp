import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			isAuthenticated: false
		},
		mutations: {
			setAuthentication (state, bool) {
				state.isAuthenticated = bool
			}
		}
	})
}

export default createStore
