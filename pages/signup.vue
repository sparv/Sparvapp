<template>
  <section class="f-pv8 f-ph5 f-pa12-m">
    <div class="f-wrapper f-wrapper--login">
      <div class="c-card f-pv6 f-ph5 f-pa8-m">
        <LoginHeader title="Registrierung"></LoginHeader>
        <FormError v-show="formError" :message="formErrorMessage" />
        <form v-on:submit.prevent="submitForm">
          <div class="f-mb7">
            <label class="c-label f-db f-mb3" for="">Vorname</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('forename') }" id="forename" name="forename" type="forename" v-model="forename" v-validate="'required'">
            <span v-show="errors.has('forename')" class="c-input__error-msg">{{ errors.first('forename') }}</span>
        	</div>
          <div class="f-mb7">
            <label class="c-label f-db f-mb3" for="">Nachname</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('surname') }" id="surname" name="surname" type="surname" v-model="surname" v-validate="'required'">
            <span v-show="errors.has('surname')" class="c-input__error-msg">{{ errors.first('surname') }}</span>
        	</div>
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
          <LoadingButton class="c-btn c-btn--primary f-w-100" :isSendingRequest="isSendingRequest" buttonText="Account erstellen" />
      	</form>
    	</div>
  	</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'

import LoginHeader from '~/components/LoginHeader.vue'
import FormError from '~/components/Form/FormError.vue'
import LoadingButton from '~/components/Buttons/LoadingButton.vue'

export default {
  auth: false,
  layout: 'authPage',

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
      forename: '',
      surname: '',
      email: '',
      password: ''
    }
  },

  methods: {
    async submitForm () {
      this.$store.commit('SET_SENDING_REQUEST', true)

      try {
        const user = await this.$axios.$post('/users/', {
          forename: this.forename,
          surname: this.surname,
          email: this.email,
          password: this.password
        })

        if (user) {
          await this.$auth.login({
            data: {
              email: this.email,
              password: this.password
            }
          })
          this.$store.commit('SET_SENDING_REQUEST', false)
        } else {
          console.log('Sign Up - Redirection Error.')
        }
      } catch (error) {
        const response = error.response

        this.formError = true
        this.formErrorMessage = response.data.message
        this.$store.commit('SET_SENDING_REQUEST', false)
      }
    }
  }
}
</script>
