<template>
  <div id="deleteExerciseGroup" class="dialog" aria-hidden="true">
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
          <h3 class="f-mb0 display-3">Gruppe löschen</h3>
        </div>
        <p>Bist Du Dir sicher, dass du diese Gruppe löschen möchtest? Das Löschen kann nicht rückgängig gemacht werden. Bitte gebe zur Bestätigung den Namen der Gruppe ein.</p>
        <form @submit.prevent="submitForm">
          <div class="f-mb7">
            <label class="c-label f-db f-mb3" for="">Gib den Namen der Gruppe zur Bestätigung ein</label>
            <input class="c-input f-w-100" name="text" type="text" v-model="nameInput">
          </div>
          <div class="f-fr">
            <button class="c-btn c-btn--text" data-a11y-dialog-hide>Abbrechen</button>
            <button class="c-btn c-btn--error" v-if="this.nameInput === name">Gruppe löschen</button>
            <button class="c-btn c-btn--error" v-else disabled>Gruppe löschen</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters({
      user: 'getAuthUser'
    })
  },

  data: function () {
    return {
      nameInput: ''
    }
  }
}
</script>
