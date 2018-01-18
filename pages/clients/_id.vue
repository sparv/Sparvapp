<template>
  <section class="f-wrapper">
    <div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">
        <ul class="c-single-breadcrumb">
          <li class="c-single-breadcrumb__item c-single-breadcrumb__item--first">
            <nuxt-link to="/clients/">Kunden</nuxt-link>
            <span class="f-mh3">/</span>
          </li>
          <li class="c-single-breadcrumb__item">{{fullName}}</li>
        </ul>
      </h2>
      <div>
        <button v-on:click="showProfileSubmenu = !showProfileSubmenu" class="c-btn c-btn--icon">
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
        <div v-show="showProfileSubmenu" class="c-submenu">
          <ul class="c-submenu__list">
            <li class="c-submenu__item">
              <button @click="showSidebar">
                <svg class="f-mr5" fill="#15171A" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <span>Kunde bearbeiten</span>
              </button>
            </li>
            <li class="c-submenu__item c-submenu__item--important">
              <button data-a11y-dialog-show="deleteClient" v-on:click="showProfileSubmenu = !showProfileSubmenu">
                <svg class="f-mr5" fill="#F03D5D" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <span>Kunde löschen</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="c-card f-mb6 f-mb8-m f-pa6">
      <h2 class="">Basis Informationen</h2>
      <div class="o-grid">
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Vorname</h4>
            <span class="c-data-item__text">{{forename}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Nachname</h4>
            <span class="c-data-item__text">{{surname}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Geschlecht</h4>
            <span class="c-data-item__text">{{gender}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Alter</h4>
            <span class="c-data-item__text">{{age}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6 f-mb0-m">
          <div class="c-data-item">
            <h4 class="c-data-item__title">E-Mail-Adresse</h4>
            <span class="c-data-item__text">{{email}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Telefonnummer</h4>
            <span class="c-data-item__text">{{phone}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="c-card f-pa6">
      <span v-if="!notes" class="text-placeholder">Keine Notizen hinterlegt</span>
      <div v-if="notes">
        {{ notes }}
      </div>
    </div>
    <Sidebar :sidebarState="openSidebar" :user="userData" :isSendingRequest="isSendingRequest" @submitEditCustomer="editCustomer"></Sidebar>
    <Modal :surname="surname" @submitDeleteCustomerForm="deleteCustomer"></Modal>
  </section>
</template>

<script>
import axios from 'axios'
import A11yDialog from 'a11y-dialog'
import { mapState } from 'vuex'

import Modal from '~/components/Modal/DeleteClient.vue'
import Sidebar from '~/components/Sidebar/Clients/EditClient.vue'

export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  components: {
    Modal,
    Sidebar
  },

  asyncData ({ store, params }) {
    return axios({
      url: `http://localhost:4040/customers/${params.id}`,
      method: `GET`,
      headers: {
        'Authorization': `Bearer ${store.state.user.authToken}`
      }
    })
      .then((res) => {
        return res.data
      })
  },

  mounted: function () {
    /* eslint-disable */
    const el = document.getElementById('deleteClient')
    const dialog = new A11yDialog(el)
     /* eslint-enable */

    this.$store.commit('SET_APPLICATION_TITLE', 'Kunden')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  },

  computed: {
    ...mapState({
      openSidebar: state => state.settings.applicatonSidebar
    }),

    fullName: function () {
      return this.forename + ' ' + this.surname
    },

    userData: function () {
      return {
        forename: this.forename,
        surname: this.surname,
        gender: this.gender,
        age: this.age,
        email: this.email,
        phone: this.phone,
        notes: this.notes
      }
    }
  },

  data () {
    return {
      isSendingRequest: false,
      showProfileSubmenu: false,
      forename: '',
      surname: '',
      gender: '',
      age: '',
      email: '',
      phone: '',
      notes: ''
    }
  },

  methods: {
    showSidebar: function () {
      this.showProfileSubmenu = false
      this.$store.commit('SET_APPLICATION_SIDEBAR', true)
    },

    editCustomer: function (editedUserData) {
      this.isSendingRequest = true
      axios({
        url: `http://localhost:4040/customers/${this.customer_id}`,
        method: `PUT`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.user.authToken}`
        },
        data: {
          forename: editedUserData.forename,
          surname: editedUserData.surname,
          email: editedUserData.email,
          phone: editedUserData.phone,
          gender: editedUserData.gender,
          age: editedUserData.age,
          notes: editedUserData.notes
        }
      })
        .then(response => {
          console.log(response)
          this.isSendingRequest = false
        })
        .catch(error => {
          console.log(error)
          this.isSendingRequest = false
        })
    },

    deleteCustomer: function () {
      axios({
        url: `http://localhost:4040/customers/${this.customer_id}`,
        method: `DELETE`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.user.authToken}`
        },
        data: {
          surname: this.surname
        }
      })
        .then(response => {
          console.log(response)
          this.$router.push(`/clients`)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
