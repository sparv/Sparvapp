<template>
	<section class="f-pv8 f-ph5 f-pa12-m">
		<div class="f-wrapper f-wrapper--login">
			<div class="c-card f-pv6 f-ph5 f-pa8-m">
				<div class="c-card__header--login f-mb6 f-mb8-m">
					<h2 class="display-2 f-mb5 f-mb6-m">Login</h2>
				</div>
				<form v-on:submit.prevent="loginSubmit">
					<div class="f-mb7">
						<label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
						<input class="c-input f-w-100" v-model="email" type="email">
					</div>
					<div class="f-mb7">
						<label class="c-label f-db f-mb3" for="">Passwort</label>
						<input class="c-input f-w-100" v-model="password" type="password">
					</div>
					<button class="c-btn c-btn--primary f-w-100">Einloggen</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'
	import moment from 'moment'

	export default {
		head: {
			title: 'Login',
			meta: [
				{ hid: 'description', name: 'description', content: 'Home page description' }
			]
		},
		layout: 'landingpage',
		data: function () {
			return {
				email: ``,
				password: ``
			}
		},
		methods: {
			loginSubmit: function (event) {
				const inputEmailString = this.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

				if (inputEmailString == null) {
					window.alert(`please enter valid email`)
				} else {
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
