<template>
  <div class="dialog-content">
    <button @click="hideModal" class="dialog-close" type="button" aria-label="Close this dialog window">
      <img class="f-db" src="~/assets/images/close.svg" alt="" height="24" width="24">
    </button>
    <div class="dialog__header f-mb7">
      <span class="dialog__icon dialog__icon--delete f-mr6">
        <img src="/images/delete.svg" alt="" width="32" height="32">
      </span>
      <h3 class="f-mb0 display-3">{{title}}</h3>
    </div>
    <p>{{summary}}</p>
    <form @submit.prevent="submitForm">
      <div class="f-mb7">
        <label class="c-label f-db f-mb3" for="">{{formLabel}}</label>
        <input class="c-input f-w-100" name="text" :type="formType" v-model="formInputModel">
      </div>
      <div class="f-fr">
        <button class="c-btn c-btn--text" @click="hideModal">Abbrechen</button>
        <button class="c-btn c-btn--error" v-if="this.formInputModel === confirmationValue">{{submitButtonText}}</button>
        <button class="c-btn c-btn--error" v-else disabled>{{submitButtonText}}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    confirmationValue: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    formLabel: {
      type: String,
      required: true
    },
    formType: {
      type: String,
      default: 'text'
    },
    submitButtonText: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      formInputModel: ''
    }
  },

  methods: {
    hideModal () {
      this.$emit('hideModal')
    },

    submitForm () {
      this.$emit('formSubmitted')
    }
  }
}
</script>
