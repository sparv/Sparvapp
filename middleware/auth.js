import axios from 'axios'

export default function ({ req, res, redirect, store }) {
	let formData = ``

	const getFormCredentials = new Promise((resolve, reject) => {
		req.on(`data`, (data) => {
			formData += data
		})

		req.on(`end`, () => {
			console.log(formData)
			const formDataArray = formData.split(`&`)
			let user = ``
			let password = ``

			formDataArray.forEach((item) => {
				;(item.indexOf(`email=`) !== -1) ? user = item.replace(`email=`, ``) : null
				;(item.indexOf(`password=`) !== -1) ? password = item.replace(`password=`, ``) : null
			})

			console.log(`User: ${user}`)
			console.log(`Password: ${password}`)

			axios.post(`http://localhost:4040/login`, {
				email: user,
				password: password
			}).then((nestResponse) => {
				console.log(nestResponse.data.auth)
				store.commit(`setAuthentication`, nestResponse.data.auth)
				store.commit(`setSessionId`, nestResponse.data.session)
				resolve()
			})
		})
	})

	return getFormCredentials
	//return axios.post(`localhost:4040/`)
	//console.log(req.body.email)
	//console.log(res)
	//return redirect(`/profile`)
}
