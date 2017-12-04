<template>
  <div>
    <div class="c-card f-mb8">
      <div class="c-card__header f-ph6">
        <h3 class="f-ma0 c-card__header-title">Account-Einstellungen</h3>
      </div>
      <div class="c-card__content f-pv6 f-ph4 f-pv7-m f-ph6-m">
        <form @submit.prevent="submitForm">
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="forename">Vorname</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('forename') }" id="forename" :value="forename" ref="forename" name="forename" type="text">
            <span v-show="errors.has('forename')" class="c-input__error-msg">{{ errors.first('forename') }}</span>
          </div>
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="surname">Nachname</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('surname') }" id="surname" :value="surname" ref="surname" name="surname" type="text">
            <span v-show="errors.has('surname')" class="c-input__error-msg">{{ errors.first('surname') }}</span>
          </div>
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="email">E-Mail-Adresse</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('email') }" id="email" :value="email" ref="email" name="email" type="email" v-validate="'email'">
            <span v-show="errors.has('email')" class="c-input__error-msg">{{ errors.first('email') }}</span>
          </div>
          <div class="f-cf">
            <button class="c-btn c-btn--primary f-w-100 f-w-auto-m f-fr-m">Änderungen speichern</button>
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
import A11yDialog from 'a11y-dialog'
import { unsetToken } from '~/utils/auth.js'

import Modal from '~/components/Modal/DeleteUser.vue'

export default {
  components: {
    Modal
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

  data () {
    return {
      forename: '',
      surname: '',
      email: ''
    }
  },

  methods: {
    submitForm: function () {
      var updatedData = {}

      if (this.$refs.forename.value !== this.forename) {
        this.forename = this.$refs.forename.value
        updatedData.forename = this.$refs.forename.value
      }

      if (this.$refs.surname.value !== this.surname) {
        this.surname = this.$refs.surname.value
        updatedData.surname = this.$refs.surname.value
      }

      if (this.$refs.email.value !== this.email) {
        this.email = this.$refs.email.value
        updatedData.email = this.$refs.email.value
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
          console.log(response)
        })
        .catch(error => {
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
