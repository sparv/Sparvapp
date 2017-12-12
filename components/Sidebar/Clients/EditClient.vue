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
              <input class="c-input f-w-100" name="forename" type="text" :value="this.user.forename">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Nachname</label>
              <input class="c-input f-w-100" name="surname" type="text" :value="this.user.surname">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
              <input class="c-input f-w-100" name="email" type="email" :value="this.user.email">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Telefonnummer</label>
              <input class="c-input f-w-100" name="phone" type="phone" :value="this.user.phone">
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
                  <label for="gender_neutral"><input class="f-mr3" type="radio" name="gender" value="neutral" id="gender_neutral">keine Angaben</label>
                </div>
              </fieldset>
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Alter</label>
              <input class="c-input f-w-100" name="age" type="text" :value="this.user.age">
            </div>
            <div>
              <label class="c-label f-db f-mb3" for="">Notiz</label>
              <textarea class="c-input c-input--textarea" id="" name="notes" :value="this.user.notes"></textarea>
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
    submitForm: function (event) {
      const editedCustomer = {
        forename: event.target.forename.value,
        surname: event.target.surname.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        gender: event.target.gender.value,
        age: event.target.age.value,
        notes: event.target.notes.value
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
