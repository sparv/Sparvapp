<template>
	<div>
		<h1>Profile</h1>
		<p v-if="getAuthentication">You are logged in as {{ getUser }}</p>
		<p v-if="!getAuthentication">Invalid user credentials</p>
		<button v-on:click="checkAuth">Check auth</button>
		<router-link to="secret">Secret Area</router-link>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import axios from 'axios'

	export default {
		middleware: `auth`,
		computed: mapGetters([
			`getAuthentication`,
			`getUser`
		]),
		methods: {
			checkAuth: function () {
				const token = this.$store.getters.getSessionId

				axios({
					url: `http://localhost:4040/checkauth`,
					method: `post`,
					headers: {
						'Authorization': `Bearer ${token}`
					}
				}).then(response => {
					console.log(response)
				})
			}
		}
	}
</script>
