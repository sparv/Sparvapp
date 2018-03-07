<template>
  <div class="dialog-content">
    <button @click="$emit('close')" class="dialog-close" type="button" aria-label="Close this dialog window">
      <img class="f-db" src="~/assets/images/close.svg" alt="" height="24" width="24">
    </button>
    <div class="dialog__header f-mb7">
      <span class="dialog__icon dialog__icon--delete f-mr6">
        <img src="/images/delete.svg" alt="" width="32" height="32">
      </span>
      <h3 class="f-mb0 display-3">Übung entfernen</h3>
    </div>
    <p>Bist Du Dir sicher, dass du diese Übung aus dem Trainingsplan {{workoutTitle}} entfernen möchtest?</p>
    <div class="f-fr">
      <button class="c-btn c-btn--text" @click="$emit('close')">Abbrechen</button>
      <button class="c-btn c-btn--error">Übung aus Trainingsplan entfernen</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    workoutTitle: {
      type: String,
      required: true
    }
  }
}
</script>
