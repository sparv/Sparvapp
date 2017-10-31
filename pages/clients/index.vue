<template>
  <section class="f-wrapper">
		<div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">Kunden</h2>
      <button class="c-btn c-btn--primary" @click="openSidebar = !openSidebar">Neuen Kunden hinzufügen</button>
    </div>

    <div class="c-table-flow__list">
      <nuxt-link :to="'/clients/' + client.id" class="c-table-flow__item f-mb3" v-for="(client, index) in clients" v-bind:item="client" v-bind:index="index" v-bind:key="client.id">
        <div class="c-table-flow__item-data f-mb4 f-mb0-m f-ph6-m">
          <h4 class="c-table-flow__item-title">Name</h4>
          <span>{{ client.name }}</span>
        </div>
        <div class="c-table-flow__item-data f-mb4 f-mb0-m f-ph6-m">
          <h4 class="c-table-flow__item-title">E-Mail-Adresse</h4>
          <span>{{ client.email }}</span>
        </div>
        <div class="c-table-flow__item-data f-ph6-m">
          <h4 class="c-table-flow__item-title">Telefonnummer</h4>
          <span>{{ client.phoneNumber }}</span>
        </div>
      </nuxt-link>
    </div>
    <Sidebar :openState="openSidebar" @update="updateModalState"></Sidebar>
  </section>
</template>

<script>
	import axios from 'axios'
  import { mapGetters } from 'vuex'
  
  import Sidebar from '~/components/Sidebar/Clients/AddClient.vue'

	export default {
		layout: 'application',
    middleware: `validate`,

    components: {
			Sidebar
		},
    
    data () {
      return {
        openSidebar: false,
        clients: [{
          id: "1",
          name: 'Ursula Adler',
          email: 'adler5683@gmail.com',
          phoneNumber: '(0131) 550 7943'
        },{
          id: "2",
          name: 'Christopher Ankunding',
          email: 'christopher.ankunding@aol.com',
          phoneNumber: '(0117) 957 0202'
        },{
          id: "3",
          name: 'Ivo Arnold',
          email: 'ivo4278arnold@me.com',
          phoneNumber: '(0117) 420 1973'
        }]
      }
    },

    methods: {
      updateModalState: function(data) {
        this.openSidebar = data
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
  
  .c-table-flow__item {
    display: flex;
    flex-wrap: wrap;
    padding: 16px 8px;
    color: #15171a;
    font-size: 14px;
    text-decoration: none;
	  background-color: #ffffff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.12);
    transition: all 0.24s ease-in-out;
    
    &:hover, &:focus {
      background-color: #f5f7fa;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16), 0 2px 8px 0 rgba(0, 0, 0, 0.12);
    }

    @media (min-width: 860px) {
      align-items: center;
      padding: 24px 0px;
      height: 80px;
      font-size: 16px;
      border-radius: 5px;
    }
  }

  .c-table-flow__item-data {
    width: 50%;
    @media (min-width: 860px) {
      flex: 1 1 0;
      width: auto;
    }
  }

  .c-table-flow__item-title {
    margin: 0 0 2px;
    font-size: 12px;
	  font-weight: bold;
	  line-height: 1.29;
	  letter-spacing: 0.7px;
    color: #727375;
    @media (min-width: 860px) {
      font-size: 14px;
    }
  }

</style>
