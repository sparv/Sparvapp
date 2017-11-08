import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			siteTitle: '',
			applicatonSidebar: false,
			mobileAppBarLeftAction: false,
			mobileAppBarRightAction: false,

			authUser: null
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
			setAuthUser (state, user) {
				state.authUser = user
			},
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
			getAuthUser (state) {
				return state.authUser
			},
		}
	})
}

export default createStore
