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
      <ProfileHeadMenu editLabel="Kunden bearbeiten" removeLabel="Kunden löschen" deleteModalTrigger="deleteClient" @deletePageSourceTrigger="showModal" />
    </div>
    <div class="c-card f-mb6 f-mb8-m f-pa6">
      <h2 class="">Basis Informationen</h2>
      <div class="o-grid">
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Vorname</h4>
            <span class="c-data-item__text">{{client.forename}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Nachname</h4>
            <span class="c-data-item__text">{{client.surname}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Geschlecht</h4>
            <span class="c-data-item__text">{{client.gender}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Alter</h4>
            <span class="c-data-item__text">{{client.age}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6 f-mb0-m">
          <div class="c-data-item">
            <h4 class="c-data-item__title">E-Mail-Adresse</h4>
            <span class="c-data-item__text">{{client.email}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Telefonnummer</h4>
            <span class="c-data-item__text">{{client.phone}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="c-card f-pa6">
      <span v-if="!client.notes" class="text-placeholder">Keine Notizen hinterlegt</span>
      <div v-if="client.notes">
        {{ client.notes }}
      </div>
    </div>
    <Sidebar :sidebarState="openSidebar" :user="client" :isSendingRequest="isSendingRequest" @submitEditCustomer="editCustomer"></Sidebar>
    <modal name="deleteClient" height="auto">
      <ModalContent :confirmationValue="client.surname"
        title="Kunde löschen"
        summary="Bist Du Dir sicher, dass du diesen Kunden löschen möchtest? Das Löschen kann nicht rückgängig gemacht werden."
        formLabel="Gib den Titel des Trainingsplans zur Bestätigung ein"
        submitButtonText="Kunde löschen"
        @hideModal="hideModal"
        @formSubmitted="deleteCustomer"
      />
    </modal>
  </section>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

import ModalContent from '~/components/Modal/DeleteMaster.vue'
import ProfileHeadMenu from '~/components/ProfileHeadMenu.vue'
import Sidebar from '~/components/Sidebar/Clients/EditClient.vue'

export default {
  layout: 'application',

  components: {
    ModalContent,
    Sidebar,
    ProfileHeadMenu
  },

  fetch ({ store, params }) {
    return store.dispatch('getSingleClient', params.id)
  },

  mounted: function () {
    console.log(this.$auth.state.user)
    console.log(this.$auth.token)
    console.log(this.$auth.state.loggedIn)

    this.$store.commit('SET_APPLICATION_TITLE', 'Kunden')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest,
      openSidebar: state => state.settings.applicatonSidebar,
      client: state => state.clients.currentProfile
    }),

    fullName: function () {
      return this.client.forename + ' ' + this.client.surname
    }
  },

  methods: {
    showModal: function () {
      this.$modal.show('deleteClient')
    },

    hideModal: function () {
      this.$modal.hide('deleteClient')
    },

    editCustomer: function (editedUserData) {
      const id = this.client.customer_id
      this.$store.commit('SET_SENDING_REQUEST', true)

      axios({
        url: `http://localhost:4040/customers/${id}`,
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
          this.$store.dispatch('getSingleClient', id)
          this.$store.commit('SET_SENDING_REQUEST', false)
        })
        .catch(error => {
          console.log(error)
          this.$store.commit('SET_SENDING_REQUEST', false)
        })
    },

    deleteCustomer: function () {
      this.$store.commit('SET_SENDING_REQUEST', true)
      axios({
        url: `http://localhost:4040/customers/${this.client.customer_id}`,
        method: `DELETE`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.user.authToken}`
        },
        data: {
          surname: this.client.surname
        }
      })
        .then(response => {
          console.log(response)
          this.$store.commit('SET_SENDING_REQUEST', false)
          this.$router.push(`/clients`)
        })
        .catch(error => {
          console.log(error)
          this.$store.commit('SET_SENDING_REQUEST', false)
        })
    }
  }
}
</script>
