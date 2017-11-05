<template>
  <section class="f-wrapper">
		<div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">Kunden</h2>
      <button class="c-btn c-btn--primary" @click="showSidebar">Neuen Kunden hinzufügen</button>
    </div>

    <div class="c-table-flow__list">
      <nuxt-link :to="'/clients/' + client.id" class="c-table-flow__item f-mb3" v-for="(client, index) in clients" v-bind:item="client" v-bind:index="index" v-bind:key="client.id">
        <TableFlowCellBasic label="Name" :text="client.name"></TableFlowCellBasic>
        <TableFlowCellBasic label="E-Mail-Adresse" :text="client.email"></TableFlowCellBasic>
        <TableFlowCellBasic label="Telefonnummer" :text="client.phoneNumber"></TableFlowCellBasic>
      </nuxt-link>
    </div>
    <Sidebar :sidebarState="openSidebar"></Sidebar>
  </section>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

import Sidebar from "~/components/Sidebar/Clients/AddClient.vue";
import TableFlowCellBasic from "~/components/Table/TableFlowCellBasic.vue";

export default {
  layout: "application",
  middleware: `validate`,

  components: {
    Sidebar,
    TableFlowCellBasic
  },

  mounted: function() {
    this.$store.commit("setApplicationTitle", "Kunden");
    this.$store.commit("setMobileAppBarLeftAction", false);
    this.$store.commit("setMobileAppBarRightAction", true);
  },

  computed: {
    ...mapGetters({
      openSidebar: "getApplicationSidebar"
    })
  },

  data() {
    return {
      clients: [
        {
          id: "1",
          name: "Ursula Adler",
          email: "adler5683@gmail.com",
          phoneNumber: "(0131) 550 7943"
        },
        {
          id: "2",
          name: "Christopher Ankunding",
          email: "christopher.ankunding@aol.com",
          phoneNumber: "(0117) 957 0202"
        },
        {
          id: "3",
          name: "Ivo Arnold",
          email: "ivo4278arnold@me.com",
          phoneNumber: "(0117) 420 1973"
        },
        {
          id: "4",
          name: "Ivo Arnold",
          email: "ivo4278arnold@me.com",
          phoneNumber: "(0117) 420 1973"
        },
        {
          id: "5",
          name: "Ivo Arnold",
          email: "ivo4278arnold@me.com",
          phoneNumber: "(0117) 420 1973"
        },
        {
          id: "6",
          name: "Ivo Arnold",
          email: "ivo4278arnold@me.com",
          phoneNumber: "(0117) 420 1973"
        }
      ]
    };
  },

  methods: {
    showSidebar: function() {
      this.$store.commit("setApplicationSidebar", true);
    }
  }
};
</script>

<style lang="scss" scoped>
.f-wrapper {
  padding: 0;
  @media (min-width: 860px) {
    padding: 0 24px;
  }
}

.c-table-flow__item {
  display: flex;
  flex-wrap: wrap;
  padding: 16px 8px 0 8px;
  color: #15171a;
  font-size: 14px;
  text-decoration: none;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.24s ease-in-out;

  &:hover,
  &:focus {
    background-color: #f5f7fa;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16),
      0 2px 8px 0 rgba(0, 0, 0, 0.12);
  }

  @media (min-width: 860px) {
    align-items: center;
    padding: 24px 0px;
    height: 80px;
    font-size: 16px;
    border-radius: 5px;
  }
}
</style>
