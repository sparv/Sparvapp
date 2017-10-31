<template>
  <div>
    <div class="c-card f-mb8">
      <div class="c-card__header f-ph6">
        <h3 class="f-ma0 c-card__header-title">Account-Einstellungen</h3>
      </div>
      <div class="c-card__content f-pv6 f-ph4 f-pv7-m f-ph6-m">
        <form>
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="">Name</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('userSettings.name') }" v-model="userSettings.name" name="userSettings.name" type="text">
            <span v-show="errors.has('userSettings.name')" class="c-input__error-msg">{{ errors.first('userSettings.name') }}</span>
          </div>
          <div class="f-mb6 f-mb7-m">
            <label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('userSettings.email') }" v-model="userSettings.email" v-validate="'email'" name="userSettings.email" type="email">
            <span v-show="errors.has('userSettings.email')" class="c-input__error-msg">{{ errors.first('userSettings.email') }}</span>
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
            icon="/images/delete.svg"
            iconDescription="Test"
            title="Kunde löschen"
            description="Bist Du Dir sicher, dass du diesen Kunden löschen möchtest? Das Löschen kann nicht rückgängig gemacht werden. Bitte gebe zur Bestätigung den Nachnamen des Kunden ein." label="Gib den Nachname des Kunden zur Bestätigung ein"
            buttonText="Kunde löschen"></Modal>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import A11yDialog from "a11y-dialog";
import { mapGetters } from "vuex";

import Modal from '~/components/Modal.vue'

export default {
  asyncData({ store }) {
    return axios({
      url: `http://localhost:4040/validate`,
      method: `post`,
      headers: {
        Authorization: `Bearer ${store.getters.getSessionId}`
      }
    }).then(response => {
      console.log(response);
    });
  },

  components: {
    Modal
  },

  computed: {
    ...mapGetters([`getEmail`, `getName`])
  },

  mounted: function() {
    const el = document.getElementById('deleteUser');
    const dialog = new A11yDialog(el);
  },

  data: function() {
    return {
      userSettings: {
        name: "",
        email: ""
      }
    };
  }
};
</script>