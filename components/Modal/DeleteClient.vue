<template>
  <div id="deleteClient" class="dialog" aria-hidden="true">
    <div class="dialog-overlay " tabindex="-1" data-a11y-dialog-hide></div>
    <div class="dialog-content" role="dialog" aria-labelledby="dialog-title">
      <div role="document">
        <button class="dialog-close" type="button" data-a11y-dialog-hide aria-label="Close this dialog window">
          <img class="f-db" src="~/assets/images/close.svg" alt="" height="24" width="24">
        </button>
        <div class="dialog__header f-mb7">
          <span class="dialog__icon f-mr6">
            <img src="/images/delete.svg" alt="" width="32" height="32">
          </span>
          <h3 class="f-mb0 display-3">Kunde löschen</h3>
        </div>
        <p>Bist Du Dir sicher, dass du diesen Kunden löschen möchtest? Das Löschen kann nicht rückgängig gemacht werden. Bitte gebe zur Bestätigung den Nachnamen des Kunden ein.</p>
        <form @submit.prevent="submitForm">
          <div class="f-mb7">
            <label class="c-label f-db f-mb3" for="">Gib den Nachname des Kunden zur Bestätigung ein</label>
            <input class="c-input f-w-100" name="text" type="text" v-model="nameInput">
          </div>
          <div class="f-fr">
            <button class="c-btn c-btn--text" data-a11y-dialog-hide>Abbrechen</button>
            <button class="c-btn c-btn--error" v-if="this.nameInput === name">Kunde löschen</button>
            <button class="c-btn c-btn--error" v-else disabled>Kunde löschen</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    customerId: {
      type: String,
      required: true
    },
  },

  computed: {
    ...mapGetters({
      user: 'getAuthUser'
    })
  },

  data: function() {
    return {
      nameInput: ""
    }
  },

  methods: {
    submitForm: function() {
      axios({
        url: `http://localhost:4040/customers/${this.customerId}`,
        method: `DELETE`,
        headers: {
          'Authorization': `Bearer ${this.user.token}`
        },
        data: {
          surname: this.nameInput
        }
      })
      .then(response => {
        console.log(response)
        this.$router.push(`/clients`);
      })
      .catch(error => {
        console.log(error)
      });
    }
  }
};
</script>
