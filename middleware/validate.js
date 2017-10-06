import axios from 'axios'

export default function ({ store, redirect }) {
	const validate = new Promise((resolve, reject) => {
		const sessionId = store.getters.getSessionId
		if (sessionId == undefined) { return redirect(`/eeee`) }

		axios({
			url: `http://localhost:4040/validate`,
			method: `post`,
			headers: {
				'Authorization': `Bearer ${sessionId}`
			}
		}).then((response) => {
			if (!response.data.isAuthenticated) {
				reject()
			} else {
				resolve()
			}
		})
	}).catch(() => {
		return redirect(`/eeee`)
	})

	return validate
}
