<template>
  <section class="f-pv8 f-ph5 f-pa12-m">
		<div class="f-wrapper f-wrapper--login">
    	<div class="c-card f-pv6 f-ph5 f-pa8-m">
				<LoginHeader title="Registrierung"></LoginHeader>
      	<form v-on:submit.prevent="registerSubmit">
        	<div class="f-mb7">
          	<label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
          	<input class="c-input f-w-100" :class="{'c-input--error': errors.has('email') }" v-model="email" v-validate="'required|email'" name="email" type="text">
						<span v-show="errors.has('email')" class="c-input__error-msg">{{ errors.first('email') }}</span>
        	</div>
        	<div class="f-mb7">
          	<label class="c-label f-db f-mb3" for="">Passwort</label>
          	<input class="c-input f-w-100" :class="{'c-input--error': errors.has('password') }" v-model="password" v-validate="'required'" name="password" type="password">
						<span v-show="errors.has('password')" class="c-input__error-msg">{{ errors.first('password') }}</span>
        	</div>
        	<button class="c-btn c-btn--primary f-w-100">Account erstellen</button>
      	</form>
    	</div>
  	</div>
	</section>
</template>

<script>
import axios from "axios";
import moment from "moment";

import LoginHeader from "~/components/LoginHeader.vue";

export default {
  layout: "landingpage",
  head: {
    title: "Sign Up",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  },

  components: {
    LoginHeader
  },

  data: function() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    registerSubmit: function(event) {
      this.$validator
        .validateAll()
        .then(validationState => {
          if (validationState) {
            axios({
              url: `http://localhost:4040/users`,
              method: `POST`,
              data: {
                email: this.email,
                password: this.password
              }
            })
            .then(response => {
              this.$store.commit(`setAuthUser`, response.data);
              this.$router.push(`/dashboard`);
            })
            .catch(error => {
              console.log(error);
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
