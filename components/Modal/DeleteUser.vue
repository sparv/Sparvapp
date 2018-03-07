<template>
  <modal name="deleteUser" height="auto">
    <div class="dialog-content">
      <button @click="hideModal" class="dialog-close" type="button" aria-label="Close this dialog window">
        <img class="f-db" src="~/assets/images/close.svg" alt="" height="24" width="24">
      </button>
      <div class="dialog__header f-mb7">
        <span class="dialog__icon dialog__icon--delete f-mr6">
          <img src="/images/delete.svg" alt="" width="32" height="32">
        </span>
        <h3 class="f-mb0 display-3">Deinen Account löschen</h3>
      </div>
      <p>Bist Du Dir sicher, dass Du Deinen Account löschen möchtest? Das Löschen kann nicht rückgängig gemacht werden.</p>
      <form @submit.prevent="submitForm">
        <div class="f-mb7">
          <label class="c-label f-db f-mb3" for="password">Gib Dein Passwort zur Bestätigung ein</label>
          <input class="c-input f-w-100" name="password" id="password" type="password" v-model="password">
        </div>
      </form>
      <div class="f-fr">
        <button class="c-btn c-btn--text" @click="hideModal">Abbrechen</button>
        <button class="c-btn c-btn--error" @click="submitForm">Account löschen</button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data: function () {
    return {
      password: ''
    }
  },

  methods: {
    hideModal () {
      this.$modal.hide('deleteUser')
    },

    submitForm: function () {
      this.$emit('submitDeleteUserForm', this.password)
    }
  }
}
</script>
