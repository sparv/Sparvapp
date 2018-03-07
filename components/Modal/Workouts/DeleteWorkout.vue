<template>
  <div class="dialog-content">
    <button @click="$emit('close')" class="dialog-close" type="button" aria-label="Close this dialog window">
      <img class="f-db" src="~/assets/images/close.svg" alt="" height="24" width="24">
    </button>
    <div class="dialog__header f-mb7">
      <span class="dialog__icon dialog__icon--delete f-mr6">
        <img src="/images/delete.svg" alt="" width="32" height="32">
      </span>
      <h3 class="f-mb0 display-3">Trainingsplan löschen</h3>
    </div>
    <p>Bist Du Dir sicher, dass du diesen Trainingsplan löschen möchtest? Das Löschen kann nicht rückgängig gemacht werden.</p>
    <form @submit.prevent="submitForm">
      <div class="f-mb7">
        <label class="c-label f-db f-mb3" for="">Gib den Titel des Trainingsplans zur Bestätigung ein</label>
        <input class="c-input f-w-100" name="text" type="text" v-model="name">
      </div>
      <div class="f-fr">
        <button class="c-btn c-btn--text" @click="$emit('close')">Abbrechen</button>
        <button class="c-btn c-btn--error" v-if="this.name === title">Trainingsplan löschen</button>
        <button class="c-btn c-btn--error" v-else disabled>Trainingsplan löschen</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    title: {
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
      console.log('DELETE!!!')
    }
  }
}
</script>
