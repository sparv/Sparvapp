import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			isAuthenticated: false,
			sessionID: ``
		},
		mutations: {
			setAuthentication (state, bool) {
				state.isAuthenticated = bool
			},
			setSessionId (state, string) {
				state.sessionID = string
			}
		}
	})
}

export default createStore
