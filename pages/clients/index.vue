<template>
  <section class="f-wrapper">
		<div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">Kunden</h2>
      <button class="c-btn c-btn--primary" @click="showSidebar">Neuen Kunden hinzufügen</button>
    </div>

    <div class="c-table-flow__list">
      <nuxt-link :to="'/clients/' + client.customer_id" class="c-table-flow__item f-mb3" v-for="(client, index) in clients" v-bind:item="client" v-bind:index="index" v-bind:key="client.id">
        <TableFlowCellBasic label="Nachname" :text="client.surname"></TableFlowCellBasic>
        <TableFlowCellBasic label="E-Mail-Adresse" :text="client.email"></TableFlowCellBasic>
        <TableFlowCellBasic label="Telefonnummer" :text="client.phone"></TableFlowCellBasic>
      </nuxt-link>
    </div>
    <Sidebar :sidebarState="openSidebar" :isSendingRequest="isSendingRequest" @submitNewCustomer="addNewCustomer"></Sidebar>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import Sidebar from '~/components/Sidebar/Clients/AddClient.vue'
import TableFlowCellBasic from '~/components/Table/TableFlowCellBasic.vue'

export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  components: {
    Sidebar,
    TableFlowCellBasic
  },

  fetch ({ store }) {
    return store.dispatch('getAllClients')
  },

  mounted: function () {
    this.$store.commit('SET_APPLICATION_TITLE', 'Kunden')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest,
      openSidebar: state => state.settings.applicatonSidebar
    }),

    ...mapGetters({
      clients: 'allClients'
    })
  },

  methods: {
    showSidebar: function () {
      this.$store.commit('SET_APPLICATION_SIDEBAR', true)
    },

    addNewCustomer: function (customer) {
      this.$store.commit('SET_SENDING_REQUEST', true)
      this.$store.dispatch('addNewClient', customer)
        .then(() => {
          this.$store.dispatch('getAllClients')
          this.$store.commit('SET_APPLICATION_SIDEBAR', false)
          this.$store.commit('SET_SENDING_REQUEST', false)
        })
        .catch(error => {
          this.$store.commit('SET_SENDING_REQUEST', false)
          console.log(error.message)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.f-wrapper {
  padding: 0;
  @media (min-width: 860px) {
    padding: 0 24px;
  }
}
</style>
