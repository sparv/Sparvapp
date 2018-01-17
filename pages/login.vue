<template>
	<section class="f-pv8 f-ph5 f-pa12-m">
		<div class="f-wrapper f-wrapper--login">
			<div class="c-card f-pv6 f-ph5 f-pa8-m">
				<LoginHeader title="Login" />
				<FormError v-show="formError" :message="formErrorMessage" />
        <form v-on:submit.prevent="submitForm">
					<div class="f-mb7">
						<label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
						<input class="c-input f-w-100" :class="{'c-input--error': errors.has('email') }" id="email" name="email" type="email" v-model="email" v-validate="'required|email'">
						<span v-show="errors.has('email')" class="c-input__error-msg">{{ errors.first('email') }}</span>
					</div>
					<div class="f-mb7">
						<label class="c-label f-db f-mb3" for="">Passwort</label>
						<input class="c-input f-w-100" :class="{'c-input--error': errors.has('password') }" id="password" name="password" type="password" v-model="password" v-validate="'required'">
						<span v-show="errors.has('password')" class="c-input__error-msg">{{ errors.first('password') }}</span>
					</div>
					<LoadingButton class="c-btn c-btn--primary f-w-100" :isSendingRequest="isSendingRequest" buttonText="Einloggen" />
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { setToken } from '~/utils/auth.js'

import LoginHeader from '~/components/LoginHeader.vue'
import FormError from '~/components/Form/FormError.vue'
import LoadingButton from '~/components/Buttons/LoadingButton.vue'

export default {
  layout: 'landingpage',

  components: {
    FormError,
    LoginHeader,
    LoadingButton
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest
    })
  },

  data: function () {
    return {
      formError: false,
      formErrorMessage: '',
      email: '',
      password: ''
    }
  },

  methods: {
    submitForm: function () {
      this.$validator.validateAll()
        .then(validationState => {
          if (validationState) {
            this.$store.commit('setIsSendingRequest', true)
            axios({
              url: `http://localhost:4040/login`,
              method: `POST`,
              data: {
                email: this.email,
                password: this.password
              }
            })
              .then(response => {
                this.$store.commit(`setAuthUser`, response.data)
                this.$store.commit(`setAuthToken`, response.data.token)
                this.$store.commit('setIsSendingRequest', false)
                setToken(response.data.token, { expires: 1 })
                this.$router.push(`/dashboard`)
              })
              .catch(error => {
                console.log(error)
                const response = error.response

                this.formError = true
                this.formErrorMessage = response.data.message
                this.$store.commit('setIsSendingRequest', false)
              })
          }
        })
        .catch(error => {
          console.log(error)
          this.formError = true
          this.$store.commit('setIsSendingRequest', false)
        })
    }
  }
}
</script>
