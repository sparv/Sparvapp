<template>
	<div>
		<div>
			<label>Mail:</label>
			<input v-model="userSettings.email" v-bind:placeholder="getEmail" />
		</div>
		<div>
			<label>Password:</label>
			<input v-model="userSettings.password" placeholder="Type in new password"/>
		</div>
		<div>
			<label>Name: </label>
			<input v-model="userSettings.name" v-bind:placeholder="getName"/>
		</div>
		<button v-on:click="updateUserSettings">Update user data</button>
		<router-link to="/secret">Secret</router-link>
	</div>
</template>

<script>
	import axios from 'axios'
	import moment from 'moment'
	import { mapGetters } from 'vuex'

	export default {
		asyncData ({ store }) {
			return axios({
				url: `http://localhost:4040/validate`,
				method: `post`,
				headers: {
					'Authorization': `Bearer ${store.getters.getSessionId}`
				}
			}).then((response) => {
				console.log(response)
			})
		},

		computed: {
			...mapGetters([
				`getEmail`,
				`getName`
			])
		},

		data: function () {
			return {
				userSettings: {
					name: this.getName,
					email: this.getEmail,
					password: ``
				}
			}
		},

		methods: {
			updateUserSettings: function (event) {
				console.log(this.$store.getters.getEmail)
				console.log(this.userSettings.email)
				console.log(this.userSettings.password)

				const data = {
					current: {
						email: this.$store.getters.getEmail,
						name: this.$store.getters.getName
					},

					update: {
						email: this.userSettings.email,
						password: this.userSettings.password,
						name: this.userSettings.name
					}
				}

				axios({
					url: `http://localhost:4040/update`,
					method: `post`,
					data: data,
					withCredentials: false
				}).then((response) => {
					console.log(`Update response`)
					console.log(response)
					if (response.data.isUpdated) {
						console.log(`isUpdated`)
						console.log(this.$store.getters.getEmail)
						console.log(response.data)
						this.$store.commit(`setEmail`, response.data.email)
						this.$store.commit(`setName`, response.data.name)
						this.$store.commit(`setSessionId`, response.data.token)

						const expirationDate = `${moment().add(1, `months`).utc().format(`ddd, D MMM YYYY hh:mm:ss`)} GMT`
						document.cookie = `token=${response.data.token} ;expires=${expirationDate}`
					}
				})
			},
		}
	}
</script>
