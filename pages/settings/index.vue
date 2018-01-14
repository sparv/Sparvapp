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
            <input class="c-input f-w-100" id="forename" :value="forename" name="forename" type="text">
          </div>
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="surname">Nachname</label>
            <input class="c-input f-w-100" id="surname" :value="surname" name="surname" type="text">
          </div>
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="email">E-Mail-Adresse</label>
            <input class="c-input f-w-100" id="email" :value="email" name="email" type="email">
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
        <button class="c-btn c-btn--error" data-a11y-dialog-show="deleteUser">Account endgültig löschen</button>
      </div>
    </div>
    <Modal @submitDeleteUserForm="deleteUser"></Modal>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import A11yDialog from 'a11y-dialog'
import { unsetToken } from '~/utils/auth.js'

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

  asyncData ({ store }) {
    return axios({
      url: `http://localhost:4040/users`,
      method: `GET`,
      headers: {
        'Authorization': `Bearer ${store.state.authToken}`
      }
    })
      .then((res) => {
        const forename = res.data.forename !== null ? res.data.forename : ''
        const surname = res.data.surname !== null ? res.data.surname : ''
        const email = res.data.email !== null ? res.data.email : ''

        return {
          forename: forename,
          surname: surname,
          email: email
        }
      })
  },

  mounted: function () {
    /* eslint-disable */
    const el = document.getElementById('deleteUser')
    const dialog = new A11yDialog(el)
    /* eslint-enable */
  },

  computed: {
    ...mapState({
      isSendingRequest: 'isSendingRequest'
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
    submitForm: function (event) {
      var updatedData = {}

      this.formSuccess = false
      this.formError = false
      this.$store.commit('setIsSendingRequest', true)

      if (event.target.forename.value !== this.forename) {
        this.forename = event.target.forename.value
        updatedData.forename = event.target.forename.value
      }

      if (event.target.surname.value !== this.surname) {
        this.surname = event.target.surname.value
        updatedData.surname = event.target.surname.value
      }

      if (event.target.email.value !== this.email) {
        this.email = event.target.email.value
        updatedData.email = event.target.email.value
      }

      axios({
        url: `http://localhost:4040/users`,
        method: `PUT`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.authToken}`
        },
        data: {
          meta: updatedData
        }
      })
        .then(response => {
          updatedData = {}
          this.formSuccess = true
          this.formSuccessMessage = response.data.message
          this.$store.commit('setIsSendingRequest', false)
          console.log(response)
        })
        .catch(error => {
          this.formError = true
          this.formErrorMessage = error.response.statusText
          this.$store.commit('setIsSendingRequest', false)
          console.log(error)
        })
    },

    deleteUser: function (password) {
      axios({
        url: 'http://localhost:4040/users',
        method: `DELETE`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.authToken}`
        },
        data: {
          password: password
        }
      })
        .then(response => {
          console.log(response)
          this.$store.commit(`setAuthUser`, null)
          this.$store.commit(`setAuthToken`, '')
          unsetToken()
          this.$router.push(`/`)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
