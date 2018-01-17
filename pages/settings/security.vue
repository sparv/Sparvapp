<template>
<div>
  <div class="c-card f-mb8">
    <div class="c-card__header f-ph6">
      <h3 class="f-ma0 c-card__header-title">Passwort ändern</h3>
    </div>
    <div class="c-card__content f-pv7 f-ph6">
      <FormError v-if="formError" :message="formErrorMessage" />
      <FormSuccess v-if="formSuccess" :message="formSuccessMessage" />
      <form @submit.prevent="submitForm">
        <div class="f-mb7">
          <label class="c-label f-db f-mb3" for="">Altes Passwort</label>
          <input class="c-input f-w-100" :class="{'c-input--error': errors.has('oldPassword') }" v-model="oldPassword" v-validate="'required'" name="oldPassword" type="password">
          <span v-show="errors.has('oldPassword')" class="c-input__error-msg">{{ errors.first('oldPassword') }}</span>
        </div>
        <div class="f-mb7">
          <label class="c-label f-db f-mb3" for="">Neues Passwort</label>
          <input class="c-input f-w-100" :class="{'c-input--error': errors.has('newPassword') }" v-model="newPassword" v-validate="'required'" name="newPassword" type="password">
          <span v-show="errors.has('newPassword')" class="c-input__error-msg">{{ errors.first('newPassword') }}</span>
        </div>
        <div class="f-cf">
          <div class="f-w-100 f-w-auto-m f-fr-m">
            <LoadingButton class="c-btn c-btn--primary f-w-100" :isSendingRequest="isSendingRequest" buttonText="Neues Passwort speichern" />
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

import FormError from '~/components/Form/FormError.vue'
import FormSuccess from '~/components/Form/FormSuccess.vue'
import LoadingButton from '~/components/Buttons/LoadingButton.vue'

export default {
  components: {
    FormError,
    FormSuccess,
    LoadingButton
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest
    })
  },

  data: function () {
    return {
      formSuccess: false,
      formSuccessMessage: '',
      formError: false,
      formErrorMessage: '',
      oldPassword: '',
      newPassword: ''
    }
  },

  methods: {
    submitForm: function () {
      this.formSuccess = false
      this.formError = false
      this.$store.commit('setIsSendingRequest', true)

      axios({
        url: `http://localhost:4040/users`,
        method: `PUT`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.user.authToken}`
        },
        data: {
          security: {
            password_old: this.oldPassword,
            password_new: this.newPassword
          }
        }
      })
        .then(response => {
          this.formSuccess = true
          this.formSuccessMessage = response.data.message
          this.$store.commit('setIsSendingRequest', false)
          console.log(response)
        })
        .catch(error => {
          this.formError = true
          this.formErrorMessage = error.response.statusText
          this.$store.commit('setIsSendingRequest', false)
          console.log(error.response)
        })
    }
  }
}
</script>
