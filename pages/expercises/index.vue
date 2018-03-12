<template>
  <section class="f-wrapper">
    <div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">Übungen</h2>
      <button class="c-btn c-btn--primary" @click="showSidebar">Neue Gruppe hinzufügen</button>
    </div>
    <div class="o-grid">
      <div class="o-grid__item f-w-50-ns f-w-33-l" v-for="(group, index) in exerciseGroups" v-bind:item="group" v-bind:index="index" v-bind:key="group.exercisegroup_id">
        <nuxt-link :to="'/expercises/groups/' + group.exercisegroup_id" class="f-db f-mb6 f-mb8-m c-card c-group-item" :style="{ borderColor: group.groupColor }">
          <h3 class="c-group-item__title">{{group.name}}</h3>
          <p class="c-group-item__description">{{group.description}}</p>
          <span class="c-group-item__caption">{{group.experciseCount}} Übungen</span>
        </nuxt-link>
      </div>
    </div>
    <Sidebar :sidebarState="openSidebar" :isSendingRequest="isSendingRequest" @submitNewExerciseGroup="addNewExerciseGroup"></Sidebar>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Sidebar from '~/components/Sidebar/Exercises/AddExerciseGroup.vue'

export default {
  layout: 'application',

  components: {
    Sidebar
  },

  fetch ({ store }) {
    return store.dispatch('getAllExerciseGroups')
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest,
      openSidebar: state => state.settings.applicatonSidebar
    }),

    ...mapGetters({
      exerciseGroups: 'allExerciseGroups'
    })
  },

  mounted: function () {
    this.$store.commit('SET_APPLICATION_TITLE', 'Übungen')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  },

  data () {
    return {}
  },

  methods: {
    showSidebar: function () {
      this.$store.commit('SET_APPLICATION_SIDEBAR', true)
    },

    addNewExerciseGroup: async function (exerciseGroup) {
      this.$store.commit('SET_SENDING_REQUEST', true)

      try {
        await this.$store.dispatch('addNewExerciseGroup', exerciseGroup)
        this.$store.dispatch('getAllExerciseGroups')
        this.$store.commit('SET_APPLICATION_SIDEBAR', false)
        this.$store.commit('SET_SENDING_REQUEST', false)
      } catch (error) {
        console.log(error.message)
        this.$store.commit('SET_SENDING_REQUEST', false)
      }
    }
  }
}
</script>
