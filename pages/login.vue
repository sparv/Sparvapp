<template>
	<div>
	<h1>Login</h1>
	<div>
		<label>Mail:</label>
		<input v-model="loginEmail" />
	</div>
	<div>
		<label>Password:</label>
		<input v-model="loginPassword" type="password" />
	</div>
	<button v-on:click="login">Login</button>
	</div>
</template>

<script>
	import axios from 'axios'
	import moment from 'moment'

	export default {
		data: function () {
			return {
				loginEmail: ``,
				loginPassword: ``
			}
		},
		methods: {
			login: function (event) {
				const inputEmailString = this.loginEmail.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

				if (inputEmailString == null) {
					window.alert(`please enter valid email`)
				} else {
					axios({
						url: `http://localhost:4040/login`,
						method: `post`,
						data: {
							email: this.loginEmail,
							password: this.loginPassword
						},
						withCredentials: false //needed?
					}).then((response) => {
						console.log(response)
						if (response.data.auth) {
							const expirationDate = `${moment().add(1, `months`).utc().format(`ddd, D MMM YYYY hh:mm:ss`)} GMT`
							console.log(expirationDate)

							this.$store.commit(`setAuthentication`, response.data.auth)
							this.$store.commit(`setSessionId`, response.data.token) //rename setSessionId to be clearer that it is jwt token auth
							this.$store.commit(`setEmail`, response.data.user)
							this.$store.commit(`setName`, response.data.name)
							document.cookie = `token=${response.data.token} ;expires=${expirationDate}`
							this.$router.push(`/secret`)
						}
					})
				}
			}
		}
	}
</script>
