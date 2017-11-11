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
              <label class="c-label f-db f-mb3" for="">Vorname</label>
              <input class="c-input f-w-100" name="vorname" type="text" v-model="forename">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Nachname</label>
              <input class="c-input f-w-100" name="nachname" type="text" v-model="surname">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
              <input class="c-input f-w-100" name="e-mail-adresse" type="email" v-model="email">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Telefonnummer</label>
              <input class="c-input f-w-100" name="telefonnummer" type="phone" v-model="phone">
            </div>
            <div class="f-mb6 f-mb7-m">
              <fieldset>
                <legend>Geschlecht</legend>
                <div class="f-mb3">
                  <label for="gender_male"><input class="f-mr3" type="radio" name="gender" value="1" id="gender_male" v-model="gender" checked>Männlich</label>
                </div>
                <div class="f-mb3">
                  <label for="gender_female"><input class="f-mr3" type="radio" name="gender" value="2" id="gender_female" v-model="gender" >Weiblich</label>
                </div>
                <div class="f-mb3">
                  <label for="gender_neutral"><input class="f-mr3" type="radio" name="gender" value="3" id="gender_neutral" v-model="gender" >keine Angaben</label>
                </div>
              </fieldset>
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Alter</label>
              <input class="c-input f-w-100" name="telefonnummer" type="text" v-model="age">
            </div>
            <div>
              <label class="c-label f-db f-mb3" for="">Notiz</label>
              <textarea class="c-input c-input--textarea" name="" id=""></textarea>
            </div>
          </div>
          <div class="c-sidebar__footer">
            <span class="c-btn c-btn--text" @click="hideSidebar">Abbrechen</span>
            <button class="c-btn c-btn--primary f-w-100 f-w-auto-m">Kunde hinzufügen</button>
          </div>
        </form>
      </div>
      <div class="c-sidebar-dimmer"></div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  props: {
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
      age: ''
    }
  },

  methods: {
    submitForm: function () {
      const newClient = {
        forename: this.forename,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        gender: this.gender,
        age: this.age
      }

      axios({
        url: `http://localhost:4040/customers`,
        method: `POST`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.authUser.token}`
        },
        data: newClient
      })
        .then(response => {
          this.pushData(newClient)

          this.forename = ''
          this.surname = ''
          this.email = ''
          this.phone = ''
          this.gender = ''
          this.age = ''

          this.$store.commit('setApplicationSidebar', false)
        })
        .catch(error => {
          console.log(error)
        })
    },

    hideSidebar: function () {
      this.$store.commit('setApplicationSidebar', false)
    },

    pushData: function (data) {
      this.$emit('pushDataToList', data)
    }
  }
}
</script>
