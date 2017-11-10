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
              <input class="c-input f-w-100" name="vorname" type="text" :value="this.forename" ref="forename">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Nachname</label>
              <input class="c-input f-w-100" name="nachname" type="text" :value="this.surname" ref="surname">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
              <input class="c-input f-w-100" name="e-mail-adresse" type="email" :value="this.email" ref="email">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Telefonnummer</label>
              <input class="c-input f-w-100" name="telefonnummer" type="phone" :value="this.phone" ref="phone">
            </div>
            <div class="f-mb6 f-mb7-m">
              <fieldset>
                <legend>Geschlecht</legend>
                <div class="f-mb3">
                  <label for="gender_male"><input class="f-mr3" type="radio" name="gender" value="1" id="gender_male" checked>Männlich</label>
                </div>
                <div class="f-mb3">
                  <label for="gender_female"><input class="f-mr3" type="radio" name="gender" value="2" id="gender_female">Weiblich</label>
                </div>
                <div class="f-mb3">
                  <label for="gender_neutral"><input class="f-mr3" type="radio" name="gender" value="3" id="gender_neutral">keine Angaben</label>
                </div>
              </fieldset>
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Alter</label>
              <input class="c-input f-w-100" name="telefonnummer" type="text" :value="this.age" ref="age">
            </div>
            <div>
              <label class="c-label f-db f-mb3" for="">Notiz</label>
              <textarea class="c-input c-input--textarea" name="" id=""></textarea>
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
import axios from 'axios'
import { mapGetters } from "vuex";

export default {
  props: {
    sidebarState: {
      type: Boolean,
      required: true
    },
    customerId: {
      type: String,
      required: true
    },
    forename: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    }
  },
  
  methods: {
    submitForm: function() {
      axios({
        url: `http://localhost:4040/customers/${this.customerId}`,
        method: `PUT`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.authUser.token}`
        },
        data: {
          forename: this.$refs.forename.value == "" ? "" : this.$refs.forename.value,
          surname: this.$refs.surname.value == "" ? "" : this.$refs.surname.value,
          email: this.$refs.email.value == "" ? "" : this.$refs.email.value,
          phone: this.$refs.phone.value == "" ? "" : this.$refs.phone.value,
          age: this.$refs.age.value == "" ? "" : this.$refs.age.value
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
    },
    
    hideSidebar: function() {
      this.$store.commit("setApplicationSidebar", false);
    }
  }
};
</script>
