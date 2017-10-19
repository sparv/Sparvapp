<template>
  <section class="f-pa12">
		<div class="f-wrapper f-wrapper--login">
    	<div class="c-card f-pa8">
      	<div class="c-card__header--login">
        	<h2 class="display-2">Registrierung</h2>
      	</div>
      	<form v-on:submit.prevent="registerSubmit">
        	<div class="f-mb7">
          	<label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
          	<input class="c-input f-w-100" v-model="email" type="email">
        	</div>
        	<div class="f-mb7">
          	<label class="c-label f-db f-mb3" for="">Passwort</label>
          	<input class="c-input f-w-100" v-model="password" type="password">
        	</div>
        	<button class="c-btn c-btn--primary f-w-100">Account erstellen</button>
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
			title: 'Sign Up',
			meta: [
				{ hid: 'description', name: 'description', content: 'Home page description' }
			]
		},
		layout: 'landingpage',
		data: function () {
			return {
				name: ``,
        email: ``,
				password: ``
			}
		},
		methods: {
			registerSubmit: function (event) {
        const inputEmailString = this.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
				
        if (inputEmailString == null) {
					window.alert(`please enter valid email`)
				} else if (this.password.length == 0) {
					window.alert(`please enter password`)
				} else {
					axios({
						url: `http://localhost:4040/register`,
						method: `post`,
						data: {
							email: this.email,
							password: this.password,
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
