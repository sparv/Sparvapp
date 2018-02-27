<template>
  <section class="f-wrapper">
		<div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">Trainingspläne</h2>
      <button class="c-btn c-btn--primary" @click="showSidebar">Neuen Trainingsplan hinzufügen</button>
    </div>

    <div class="c-table-flow__list">
      <nuxt-link :to="'/workouts/' + workout.id" class="c-table-flow__item f-mb3" v-for="(workout, index) in workouts" v-bind:item="workout" v-bind:index="index" v-bind:key="workout.id">
        <TableFlowCellBasic label="Bezeichnung" :text="workout.title"></TableFlowCellBasic>
        <TableFlowCellBasic label="Kunde" :text="workout.client"></TableFlowCellBasic>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import TableFlowCellBasic from '~/components/Table/TableFlowCellBasic.vue'

export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  components: {
    TableFlowCellBasic
  },

  mounted: function () {
    this.$store.commit('SET_APPLICATION_TITLE', 'Trainingspläne')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest,
      openSidebar: state => state.settings.applicatonSidebar
    })
  },

  data () {
    return {
      workouts: [{
        'id': 1,
        'title': 'Bla',
        'client': 'Bla'
      }, {
        'id': 2,
        'title': 'Bla',
        'client': 'Bla'
      }, {
        'id': 3,
        'title': 'Bla',
        'client': 'Bla'
      }, {
        'id': 4,
        'title': 'Bla',
        'client': 'Bla'
      }]
    }
  },

  methods: {
    showSidebar: function () {
      this.$store.commit('SET_APPLICATION_SIDEBAR', true)
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
