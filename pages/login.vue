<template>
	<div>
	<p>Login</p>
	<div>
		<label>Mail:</label>
		<input v-model="email"/>
	</div>
	<div>
		<label>Password:</label>
		<input v-model="password" type="password"/>
	</div>
	<div>
		<button v-on:click="login">
			Login
		</button>

		<button v-on:click="register">
			Register
		</button>
	</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import moment from 'moment'

	export default {
		data: function () {
			return {
				email: ``,
				password: ``
			}
		},
		methods: {
			login: function (event) {
				axios({
					url: `http://localhost:4040/login`,
					method: `post`,
					data: {
						email: this.email,
						password: this.password
					},
					withCredentials: false //needed?
				}).then((response) => {
					console.log(response)
					if (response.data.auth) {
						const expirationDate = `${moment().add(1, `months`).utc().format(`ddd, D MMM YYYY hh:mm:ss`)} GMT`
						console.log(expirationDate)

						this.$store.commit(`setAuthentication`, response.data.auth)
						this.$store.commit(`setSessionId`, response.data.token) //rename setSessionId to be clearer that it is jwt token auth
						this.$store.commit(`setUsername`, response.data.user)
						document.cookie = `token=${response.data.token} ;expires=${expirationDate}`
						this.$router.push(`/secret`)
					}
				})
			},
			register: function (event) {
				axios({
					url: `http://localhost:4040/register`,
					method: `post`,
					data: {
						email: this.email,
						password: this.password
					},
					withCredentials: false //needed?
				}).then((response) => {
					console.log(response)
				})
			}
		}
	}
</script>
