<template>
  <div>

  <h1>Register</h1>
	<div>
		<label>Mail:</label>
		<input v-model="registerEmail" />
	</div>
	<div>
		<label>Name:</label>
		<input v-model="registerName" />
	</div>
	<div>
		<label>Password:</label>
		<input v-model="registerPassword" type="password" />
	</div>
	<button v-on:click="register">Register</button>
  </div>
</template>

<script>
	import axios from 'axios'
	import moment from 'moment'

	export default {
		data: function () {
			return {
				registerName: ``,
        registerEmail: ``,
				registerPassword: ``
			}
		},
		methods: {
			register: function (event) {
        const inputEmailString = this.registerEmail.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
				
        if (inputEmailString == null) {
					window.alert(`please enter valid email`)
				} else if (this.registerPassword.length == 0) {
					window.alert(`please enter password`)
				} else {
					axios({
						url: `http://localhost:4040/register`,
						method: `post`,
						data: {
							email: this.registerEmail,
							password: this.registerPassword,
							name: this.registerName
						},
						withCredentials: false //needed?
					}).then((response) => {
						console.log(response)
					})
				}
			}
		}
	}
</script>
