<template>
	<div>
		<p>super secret</p>
		<button v-on:click="logout">Logout</button>

		<p>Current user: {{ getUser }}</p>

		<router-link to="/settings">Settings</router-link>
	</div>
</template>

<script>
	import axios from 'axios'
	import { mapGetters } from 'vuex'

	export default {
		middleware: `validate`,
		computed: {
			...mapGetters([
				`getUser`
			])
		},
		methods: {
			logout: function (event) {
				document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
				this.$store.commit(`setAuthentication`, false)
				this.$store.commit(`setSessionId`, null) //rename setSessionId to be clearer that it is jwt token auth
				this.$store.commit(`setUsername`, null)
				this.$router.push(`/`)
			}
		}
	}
</script>
