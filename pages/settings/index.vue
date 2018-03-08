<template>
  <div>
    <div class="c-card f-mb8">
      <div class="c-card__header f-ph6">
        <h3 class="f-ma0 c-card__header-title">Account-Einstellungen</h3>
      </div>
      <div class="c-card__content f-pv6 f-ph4 f-pv7-m f-ph6-m">
        <FormError v-if="formError" :message="formErrorMessage" />
        <FormSuccess v-if="formSuccess" :message="formSuccessMessage" />
        <form @submit.prevent="submitForm">
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="forename">Vorname</label>
            <input class="c-input f-w-100" id="forename" v-model="user.forename" name="forename" type="text">
          </div>
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="surname">Nachname</label>
            <input class="c-input f-w-100" id="surname" v-model="user.surname" name="surname" type="text">
          </div>
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="email">E-Mail-Adresse</label>
            <input class="c-input f-w-100" id="email" v-model="user.email" name="email" type="email">
          </div>
          <div class="f-cf">
            <div class="f-w-100 f-w-auto-m f-fr-m">
              <LoadingButton class="c-btn c-btn--primary f-w-100" :isSendingRequest="isSendingRequest" buttonText="Änderungen speichern" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="c-card">
      <div class="c-card__header f-ph6">
        <h3 class="f-ma0 c-card__header-title">Account löschen</h3>
      </div>
      <div class="c-card__content f-pv7 f-ph6">
        <p>Möchten Sie wirklich Ihren Account endgültig löschen?</p>
        <button class="c-btn c-btn--error" @click="showDeleteModal">Account endgültig löschen</button>
      </div>
    </div>
    <Modal @submitDeleteUserForm="deleteUser"></Modal>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

import Modal from '~/components/Modal/DeleteUser.vue'
import FormError from '~/components/Form/FormError.vue'
import FormSuccess from '~/components/Form/FormSuccess.vue'
import LoadingButton from '~/components/Buttons/LoadingButton.vue'

export default {
  components: {
    Modal,
    FormError,
    FormSuccess,
    LoadingButton
  },

  fetch ({ store }) {
    return store.dispatch('getAllUserData')
  },

  computed: {
    ...mapState({
      user: state => state.user,
      isSendingRequest: state => state.settings.isSendingRequest
    })
  },

  data () {
    return {
      formSuccess: false,
      formSuccessMessage: '',
      formError: false,
      formErrorMessage: ''
    }
  },

  methods: {
    showDeleteModal: function () {
      this.$modal.show('deleteUser')
    },

    submitForm: function (event) {
      this.formSuccess = false
      this.formError = false
      this.$store.commit('SET_SENDING_REQUEST', true)

      axios({
        url: `http://localhost:4040/users`,
        method: `PUT`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.user.authToken}`
        },
        data: {
          meta: {
            forename: this.forename,
            surname: this.surname,
            email: this.email
          }
        }
      })
        .then(response => {
          this.formSuccess = true
          this.formSuccessMessage = response.data.message
          this.$store.commit('SET_SENDING_REQUEST', false)
          console.log(response)
        })
        .catch(error => {
          this.formError = true
          this.formErrorMessage = error.response.statusText
          this.$store.commit('SET_SENDING_REQUEST', false)
          console.log(error)
        })
    },

    deleteUser: function (password) {
      axios({
        url: 'http://localhost:4040/users',
        method: `DELETE`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.user.authToken}`
        },
        data: {
          password: password
        }
      })
        .then(response => {
          console.log(response)
          this.$store.commit(`SET_USER_AUTH_TOKEN`, '')
          this.$auth.logout()
          this.$router.push(`/`)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
