<template>
  <div id="deleteUser" class="dialog" aria-hidden="true">
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
          <h3 class="f-mb0 display-3">Deinen Account löschen</h3>
        </div>
        <p>Bist Du Dir sicher, dass Du Deinen Account löschen möchtest? Das Löschen kann nicht rückgängig gemacht werden.</p>
        <div class="f-mb7">
          <label class="c-label f-db f-mb3" for="">Gib Deinen Nachname zur Bestätigung ein</label>
          <input class="c-input f-w-100" name="text" type="text" v-model="name">
        </div>
        <div class="f-fr">
          <button class="c-btn c-btn--text" data-a11y-dialog-hide>Abbrechen</button>
          <button class="c-btn c-btn--error" v-if="this.name === surname" @click="submitForm">Account löschen</button>
          <button class="c-btn c-btn--error" v-else disabled>Account löschen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    surname: {
      type: String,
      required: true
    }
  },

  data: function () {
    return {
      name: ''
    }
  },

  methods: {
    submitForm: function () {
      this.$emit('submitDeleteUserForm')
    }
  }
}
</script>
