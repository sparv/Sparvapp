<template>
  <div class="dialog-content">
    <button @click="$emit('close')" class="dialog-close" type="button" aria-label="Close this dialog window">
      <img class="f-db" src="~/assets/images/close.svg" alt="" height="24" width="24">
    </button>
    <div class="dialog__header f-mb7">
      <span class="dialog__icon f-mr6">
        <img src="/images/edit.svg" alt="" width="24" height="24">
      </span>
      <h3 class="f-mb0 display-3">Übungseinstellungen anpassen</h3>
    </div>
    <p>Gib die gewünschten Werte für die Übung <strong>{{title}}</strong> ein. Die angepassten Werte werden im aktuellen Trainingsplan übernommen.</p>
    <form @submit.prevent="submitForm">
      <div class="f-mb7">
        <label class="c-label f-db f-mb3" for="">Gewicht</label>
        <input class="c-input f-w-100" name="text" type="text" :value="weight">
      </div>
      <div class="f-mb7">
        <label class="c-label f-db f-mb3" for="">Wiederholungen</label>
        <input class="c-input f-w-100" name="text" type="text" :value="repetitions">
      </div>
      <div class="f-fr">
        <button class="c-btn c-btn--primary">Änderungen speichern</button>
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
    },
    weight: {
      type: Number,
      required: true
    },
    repetitions: {
      type: Number,
      required: true
    }
  },

  methods: {
    submitForm: function () {
      console.log('DELETE!!!')
    }
  }
}
</script>
