import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			isAuthenticated: false,
			sessionID: ``,
			username: ``
		},
		mutations: {
			setAuthentication (state, bool) {
				state.isAuthenticated = bool
			},
			setSessionId (state, string) {
				state.sessionID = string
			},
			setUsername (state, string) {
				state.username = string
			}
		},
		getters: {
			getAuthentication (state) {
				return state.isAuthenticated
			},
			getUser (state) {
				return state.username
			},
			getSessionId (state) {
				return state.sessionID
			}
		}
	})
}

export default createStore
