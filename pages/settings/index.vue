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
import { mapState, mapGetters } from 'vuex'

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
    return store.dispatch('getUser')
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest
    }),

    ...mapGetters({
      user: 'user'
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

    submitForm: async function (event) {
      const data = {
        meta: {
          email: this.email,
          forename: this.forename,
          surname: this.surname
        }
      }

      this.$store.commit('SET_SENDING_REQUEST', true)

      try {
        await this.$store.dispatch('editUserMeta', data)
        this.$store.commit('SET_SENDING_REQUEST', false)
      } catch (error) {
        console.log(error)
        this.$store.commit('SET_SENDING_REQUEST', false)
      }
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
