<template>
	<div>
		<p>super secret</p>
		<button v-on:click="logout">Logout</button>
	</div>
</template>

<script>
	export default {
		middleware: `validate`,
		methods: {
			logout: function (event) {
				document.cookie = null
				this.$store.commit(`setAuthentication`, false)
				this.$store.commit(`setSessionId`, null) //rename setSessionId to be clearer that it is jwt token auth
				this.$store.commit(`setUsername`, null)
				this.$router.push(`/`)
			}
		}
	}
</script>
