import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			siteTitle: '',
			isAuthenticated: false,
			sessionID: ``,
			email: ``,
			name: ``
		},
		mutations: {
			setApplicationTitle (state, string) {
				state.siteTitle = string
			},
			setAuthentication (state, bool) {
				state.isAuthenticated = bool
			},
			setSessionId (state, string) {
				state.sessionID = string
			},
			setEmail (state, string) {
				state.email = string
			},
			setName (state, string) {
				state.name = string
			}
		},
		getters: {
			getApplicationTitle (state) {
				return state.siteTitle
			},
			getAuthentication (state) {
				return state.isAuthenticated
			},
			getEmail (state) {
				return state.email
			},
			getSessionId (state) {
				return state.sessionID
			},
			getName (state) {
				return state.name
			}
		}
	})
}

export default createStore
