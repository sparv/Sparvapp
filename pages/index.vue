<template>
	<div>
		<h2>INDEX</h2>
		<p>loading...</p>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		mounted: function () {
			let cookie = document.cookie
			//changing scope variable to be cleaner code
			const scope = this

			if ((cookie == ``) && (cookie.indexOf(`token=`) == -1)) {
				console.log(`no cookie set`)
				this.$router.push(`/login`)
			} else {
				console.log(`cookie set`)
				const token = cookie.replace(`token=`, ``)
				console.log(`Cookietoken: ${token}`)

				axios({
					url: `http://localhost:4040/checkauth`,
					method: `post`,
					headers: {
						'Authorization': `Bearer ${token}`
					}
				}).then(response => {
					console.log(response)
					if (response.data.isAuthenticated) {
						console.log(`auth: ${response.data.isAuthenticated}`)
						scope.$store.commit(`setAuthentication`, response.data.isAuthenticated)
						scope.$store.commit(`setSessionId`, token) //rename setSessionId to be clearer that it is jwt token auth
						scope.$store.commit(`setUsername`, response.data.username)
						console.log(`commmited to store`)
						scope.$router.push(`/secret`)
					} else {
						scope.$router.push(`/login`)
					}
				})

			}
		}
	}
</script>

<style>

</style>
