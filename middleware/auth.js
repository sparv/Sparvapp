import axios from 'axios'

export default function ({ req, store, redirect }) {
	let formData = ``

	const getFormCredentials = new Promise((resolve, reject) => {
		if (req == undefined) { return redirect(`/`) }

		req.on(`data`, (data) => {
			formData += data
		})

		req.on(`end`, () => {
			console.log(req.cookie)
			console.log(formData)
			const formDataArray = formData.split(`&`)
			let user = ``
			let password = ``

			formDataArray.forEach((item) => {
				;(item.indexOf(`email=`) !== -1) ? user = item.replace(`email=`, ``) : null
				;(item.indexOf(`password=`) !== -1) ? password = item.replace(`password=`, ``) : null
			})

			axios({
				url: `http://localhost:4040/login`,
				method: `post`,
				data: {
					email: user,
					password: password
				},
				withCredentials: true
			}).then((nestResponse) => {
				console.log(nestResponse.data)
				store.commit(`setAuthentication`, nestResponse.data.auth)
				store.commit(`setSessionId`, nestResponse.data.token) //rename setSessionId to be clearer that it is jwt token auth
				store.commit(`setUsername`, nestResponse.data.user)
				resolve()
			})
		})
	})

	return getFormCredentials
}
