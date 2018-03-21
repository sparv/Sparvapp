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
            <span class="c-data-item__text">{{customer.forename}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Nachname</h4>
            <span class="c-data-item__text">{{customer.surname}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Geschlecht</h4>
            <span class="c-data-item__text">{{customer.gender}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Alter</h4>
            <span class="c-data-item__text">{{customer.age}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6 f-mb0-m">
          <div class="c-data-item">
            <h4 class="c-data-item__title">E-Mail-Adresse</h4>
            <span class="c-data-item__text">{{customer.email}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Telefonnummer</h4>
            <span class="c-data-item__text">{{customer.phone}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="c-card f-pa6">
      <span v-if="!customer.notes" class="text-placeholder">Keine Notizen hinterlegt</span>
      <div v-if="customer.notes">
        {{ customer.notes }}
      </div>
    </div>
    <Sidebar :sidebarState="openSidebar" :user="customer" :isSendingRequest="isSendingRequest" @submitEditCustomer="editCustomer"></Sidebar>
    <modal name="deleteClient" height="auto">
      <ModalContent :confirmationValue="customer.surname"
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
    return store.dispatch('getCustomer', params.id)
  },

  mounted: function () {
    this.$store.commit('SET_APPLICATION_TITLE', 'Kunden')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest,
      openSidebar: state => state.settings.applicatonSidebar,
      customer: state => state.customers.currentCustomer
    }),

    fullName: function () {
      return this.customer.forename + ' ' + this.customer.surname
    }
  },

  methods: {
    showModal: function () {
      this.$modal.show('deleteClient')
    },

    hideModal: function () {
      this.$modal.hide('deleteClient')
    },

    editCustomer: async function (data) {
      const id = this.client.customer_id
      this.$store.commit('SET_SENDING_REQUEST', true)

      try {
        await this.$axios.$put(`/customers/${id}`, data)
        this.$store.dispatch('getSingleClient', id)
        this.$store.commit('SET_SENDING_REQUEST', false)
      } catch (error) {
        console.log(error)
        this.$store.commit('SET_SENDING_REQUEST', false)
      }
    },

    deleteCustomer: async function () {
      this.$store.commit('SET_SENDING_REQUEST', true)

      try {
        await this.$axios.$delete(`/customers/${this.customer.customer_id}`)
        this.$store.commit('SET_SENDING_REQUEST', false)
        this.$router.push(`/customers`)
      } catch (error) {
        console.log(error)
        this.$store.commit('SET_SENDING_REQUEST', false)
      }
    }
  }
}
</script>
