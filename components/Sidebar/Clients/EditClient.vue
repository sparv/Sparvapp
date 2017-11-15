<template>
  <transition name="show-sidebar">
    <div v-if="sidebarState">
      <div class="c-sidebar">
        <div class="c-sidebar__header">
          <button class="c-sidebar__close" @click="hideSidebar">
            <img src="~/assets/images/close.svg" alt="">
          </button>
          <h2 class="f-ma0">Kunde bearbeiten</h2>
        </div>
        <form @submit.prevent="submitForm">
          <div class="c-sidebar__content">
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Vorname</label>
              <input class="c-input f-w-100" name="vorname" type="text" :value="this.user.forename" ref="forename">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Nachname</label>
              <input class="c-input f-w-100" name="nachname" type="text" :value="this.user.surname" ref="surname">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
              <input class="c-input f-w-100" name="e-mail-adresse" type="email" :value="this.user.email" ref="email">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Telefonnummer</label>
              <input class="c-input f-w-100" name="telefonnummer" type="phone" :value="this.user.phone" ref="phone">
            </div>
            <div class="f-mb6 f-mb7-m">
              <fieldset>
                <legend>Geschlecht</legend>
                <div class="f-mb3">
                  <label for="gender_male"><input class="f-mr3" type="radio" name="gender" value="male" id="gender_male" checked>Männlich</label>
                </div>
                <div class="f-mb3">
                  <label for="gender_female"><input class="f-mr3" type="radio" name="gender" value="female" id="gender_female">Weiblich</label>
                </div>
                <div class="f-mb3">
                  <label for="gender_neutral"><input class="f-mr3" type="radio" name="gender" value="no_details" id="gender_neutral">keine Angaben</label>
                </div>
              </fieldset>
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Alter</label>
              <input class="c-input f-w-100" name="telefonnummer" type="text" :value="this.user.age" ref="age">
            </div>
            <div>
              <label class="c-label f-db f-mb3" for="">Notiz</label>
              <textarea class="c-input c-input--textarea" id="" name="notes" :value="this.user.notes" ref="notes"></textarea>
            </div>
          </div>
          <div class="c-sidebar__footer">
            <span class="c-btn c-btn--text" @click="hideSidebar">Abbrechen</span>
            <button class="c-btn c-btn--primary f-w-100 f-w-auto-m">Änderungen speichern</button>
          </div>
        </form>
      </div>
      <div class="c-sidebar-dimmer"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    sidebarState: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },

  methods: {
    submitForm: function () {
      const editedCustomer = {
        forename: this.$refs.forename.value,
        surname: this.$refs.surname.value,
        email: this.$refs.email.value,
        phone: this.$refs.phone.value,
        age: this.$refs.age.value,
        notes: this.$refs.notes.value
      }

      this.$emit('submitEditCustomer', editedCustomer)
      this.$store.commit('setApplicationSidebar', false)
    },

    hideSidebar: function () {
      this.$store.commit('setApplicationSidebar', false)
    }
  }
}
</script>
