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
import { mapState } from 'vuex'

import LoginHeader from '~/components/LoginHeader.vue'
import FormError from '~/components/Form/FormError.vue'
import LoadingButton from '~/components/Buttons/LoadingButton.vue'

export default {
  layout: 'authPage',

  components: {
    FormError,
    LoginHeader,
    LoadingButton
  },

  mounted: function () {
    console.log(this.$auth.state.user)
    console.log(this.$auth.token)
    console.log(this.$auth.state.loggedIn)
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
    async submitForm () {
      this.$store.commit('SET_SENDING_REQUEST', true)

      try {
        await this.$auth.login({
          data: {
            email: this.email,
            password: this.password
          }
        })

        console.log(this.$auth.token)
        console.log(this.$auth.state.user)
        console.log(this.$auth.state.loggedIn)

        // this.$store.commit(`SET_USER_RELATION_ID`, data.relation_id)
        // this.$store.commit(`SET_USER_FORENAME`, data.forname)
        // this.$store.commit(`SET_USER_SURNAME`, data.surname)
        // this.$store.commit(`SET_USER_EMAIL`, data.email)
        this.$store.commit('SET_SENDING_REQUEST', false)
      } catch (error) {
        console.log(error)
        const responseError = error.response

        this.formError = true
        this.formErrorMessage = responseError.data.message
        this.$store.commit('SET_SENDING_REQUEST', false)
      }
    }
  }
}
</script>
