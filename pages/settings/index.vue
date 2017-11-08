<template>
  <div>
    <div class="c-card f-mb8">
      <div class="c-card__header f-ph6">
        <h3 class="f-ma0 c-card__header-title">Account-Einstellungen</h3>
      </div>
      <div class="c-card__content f-pv6 f-ph4 f-pv7-m f-ph6-m">
        <form @submit.prevent="submitForm">
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="">Vorname</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('user.forename') }" v-model="user.forename" name="user.forename" type="text">
            <span v-show="errors.has('user.forename')" class="c-input__error-msg">{{ errors.first('user.forename') }}</span>
          </div>
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="">Nachname</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('user.surname') }" v-model="user.surname" name="user.surname" type="text">
            <span v-show="errors.has('user.surname')" class="c-input__error-msg">{{ errors.first('user.surname') }}</span>
          </div>
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('user.email') }" v-model="user.email" v-validate="'email'" name="user.email" type="email">
            <span v-show="errors.has('user.email')" class="c-input__error-msg">{{ errors.first('user.email') }}</span>
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
    <Modal elementId="deleteUser" 
            :user="user"
            icon="/images/delete.svg"
            iconDescription="Test"
            title="Kunde löschen"
            description="Bist Du Dir sicher, dass du diesen Kunden löschen möchtest? Das Löschen kann nicht rückgängig gemacht werden. Bitte gebe zur Bestätigung den Nachnamen des Kunden ein." label="Gib den Nachname des Kunden zur Bestätigung ein"
            buttonText="Kunde löschen"></Modal>
  </div>
</template>

<script>
import axios from "axios";
import A11yDialog from "a11y-dialog";
import { mapGetters } from "vuex";

import Modal from "~/components/Modal/DeleteUser.vue";

export default {
  components: {
    Modal
  },

  computed: {
    ...mapGetters({
      user: 'getAuthUser'
    })
  },

  mounted: function() {
    const el = document.getElementById('deleteUser');
    const dialog = new A11yDialog(el);
  },

  methods: {
    submitForm: function() {
      axios({
        url: `http://localhost:4040/users`,
        method: `PUT`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.authUser.token}`
        },
        data: {
          forename: this.user.forename,
          surname: this.user.surname,
          email: this.user.email
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
    }
  }
};
</script>