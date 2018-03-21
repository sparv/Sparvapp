<template>
  <section class="f-wrapper">
		<div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">Kunden</h2>
      <button class="c-btn c-btn--primary" @click="showSidebar">Neuen Kunden hinzufügen</button>
    </div>

    <div class="c-table-flow__list">
      <nuxt-link :to="'/customers/' + customer.customer_id" class="c-table-flow__item f-mb3" v-for="(customer, index) in customers" v-bind:item="customer" v-bind:index="index" v-bind:key="customer.id">
        <TableFlowCellBasic label="Nachname" :text="customer.surname"></TableFlowCellBasic>
        <TableFlowCellBasic label="E-Mail-Adresse" :text="customer.email"></TableFlowCellBasic>
        <TableFlowCellBasic label="Telefonnummer" :text="customer.phone"></TableFlowCellBasic>
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

  components: {
    Sidebar,
    TableFlowCellBasic
  },

  fetch ({ store }) {
    return store.dispatch('getCustomers')
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
      customers: 'allCustomers'
    })
  },

  methods: {
    showSidebar: function () {
      this.$store.commit('SET_APPLICATION_SIDEBAR', true)
    },

    addNewCustomer: async function (customer) {
      this.$store.commit('SET_SENDING_REQUEST', true)

      try {
        await this.$store.dispatch('addCustomer', customer)
        await this.$store.dispatch('getCustomers')

        this.$store.commit('SET_APPLICATION_SIDEBAR', false)
        this.$store.commit('SET_SENDING_REQUEST', false)
      } catch (error) {
        console.log(error)
        this.$store.commit('SET_SENDING_REQUEST', false)
      }
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
