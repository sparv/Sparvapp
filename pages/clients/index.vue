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
    <Sidebar :sidebarState="openSidebar" @submitNewCustomer="addNewCustomer"></Sidebar>
  </section>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

import Sidebar from '~/components/Sidebar/Clients/AddClient.vue'
import TableFlowCellBasic from '~/components/Table/TableFlowCellBasic.vue'

export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  components: {
    Sidebar,
    TableFlowCellBasic
  },

  asyncData ({ store }) {
    return axios({
      url: `http://localhost:4040/customers`,
      method: `GET`,
      headers: {
        'Authorization': `Bearer ${store.state.authToken}`
      }
    })
      .then((res) => {
        return { clients: res.data.customer_list }
      })
  },

  mounted: function () {
    this.$store.commit('setApplicationTitle', 'Kunden')
    this.$store.commit('setMobileAppBarLeftAction', false)
    this.$store.commit('setMobileAppBarRightAction', true)
  },

  computed: {
    ...mapGetters({
      openSidebar: 'getApplicationSidebar'
    })
  },

  data () {
    return {
      clients: []
    }
  },

  methods: {
    showSidebar: function () {
      this.$store.commit('setApplicationSidebar', true)
    },

    addNewCustomer: function (customer) {
      axios({
        url: `http://localhost:4040/customers`,
        method: `POST`,
        headers: {
          'Authorization': `Bearer ${this.$store.state.authToken}`
        },
        data: customer
      })
        .then(response => {
          this.clients.push(customer)
          this.$store.commit('setApplicationSidebar', false)
        })
        .catch(error => {
          console.log(error)
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
