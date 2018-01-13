<template>
  <transition name="show-sidebar">
    <div v-if="sidebarState">
      <div class="c-sidebar">
        <div class="c-sidebar__header">
          <button class="c-sidebar__close" @click="hideSidebar">
            <img src="~/assets/images/close.svg" alt="">
          </button>
          <h2 class="f-ma0">Neuen Kunden hinzufügen</h2>
        </div>
        <form @submit.prevent="submitForm">
          <div class="c-sidebar__content">
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="forename">Vorname</label>
              <input class="c-input f-w-100" id="forename" name="forename" type="text" v-model="forename">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="surname">Nachname</label>
              <input class="c-input f-w-100" id="surname" name="surname" type="text" v-model="surname">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="email">E-Mail-Adresse</label>
              <input class="c-input f-w-100" :class="{'c-input--error': errors.has('email') }" id="email" name="email" type="email" v-model="email" v-validate="'email'">
              <span v-show="errors.has('email')" class="c-input__error-msg">{{ errors.first('email') }}</span>
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="phone">Telefonnummer</label>
              <input class="c-input f-w-100" id="phone" name="phone" type="phone" v-model="phone">
            </div>
            <div class="f-mb6 f-mb7-m">
              <fieldset>
                <legend>Geschlecht</legend>
                <div class="f-mb3">
                  <label for="gender_male"><input class="f-mr3" type="radio" name="gender" value="male" id="gender_male" v-model="gender" checked>Männlich</label>
                </div>
                <div class="f-mb3">
                  <label for="gender_female"><input class="f-mr3" type="radio" name="gender" value="female" id="gender_female" v-model="gender" >Weiblich</label>
                </div>
                <div class="f-mb3">
                  <label for="gender_neutral"><input class="f-mr3" type="radio" name="gender" value="neutral" id="gender_neutral" v-model="gender" >keine Angaben</label>
                </div>
              </fieldset>
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="age">Alter</label>
              <input class="c-input f-w-100" id="age" name="age" type="text" v-model="age">
            </div>
            <div>
              <label class="c-label f-db f-mb3" for="notes">Notiz</label>
              <textarea class="c-input c-input--textarea" id="notes" name="notes" v-model="notes"></textarea>
            </div>
          </div>
          <div class="c-sidebar__footer">
            <span class="c-btn c-btn--text" @click="hideSidebar">Abbrechen</span>
            <LoadingButton class="c-btn c-btn--primary f-w-100 f-w-auto-m" :isSendingRequest="isSendingRequest" buttonText="Kunde hinzufügen" />
          </div>
        </form>
      </div>
      <div class="c-sidebar-dimmer"></div>
    </div>
  </transition>
</template>

<script>
import LoadingButton from '~/components/Buttons/LoadingButton.vue'

export default {
  components: {
    LoadingButton
  },

  props: {
    isSendingRequest: {
      type: Boolean,
      required: true
    },
    sidebarState: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      forename: '',
      surname: '',
      email: '',
      phone: '',
      gender: '',
      age: '',
      notes: ''
    }
  },

  methods: {
    submitForm: function () {
      const newCustomer = {
        forename: this.forename,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        gender: this.gender,
        age: this.age,
        notes: this.notes
      }

      this.$validator.validateAll()
        .then(validationState => {
          if (validationState) {
            this.$emit('submitNewCustomer', newCustomer)
            this.forename = '',
            this.surname = '',
            this.email = '',
            this.phone = '',
            this.gender = '',
            this.age = '',
            this.notes = ''
          }
        })
    },

    hideSidebar: function () {
      this.$store.commit('setApplicationSidebar', false)
    }
  }
}
</script>
