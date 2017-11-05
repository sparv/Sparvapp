import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			siteTitle: '',
			applicatonSidebar: false,
			mobileAppBarLeftAction: false,
			mobileAppBarRightAction: false,
			isAuthenticated: false,
			sessionID: ``,
			email: ``,
			name: ``
		},
		mutations: {
			setApplicationTitle (state, string) {
				state.siteTitle = string
			},
			setApplicationSidebar (state, bool) {
				state.applicatonSidebar = bool
			},
			setMobileAppBarLeftAction (state, bool) {
				state.mobileAppBarLeftAction = bool
			},
			setMobileAppBarRightAction (state, bool) {
				state.mobileAppBarRightAction = bool
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
			getApplicationSidebar (state) {
				return state.applicatonSidebar
			},
			getMobileAppBarLeftAction (state) {
				return state.mobileAppBarLeftAction
			},
			getMobileAppBarRightAction (state) {
				return state.mobileAppBarRightAction
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
