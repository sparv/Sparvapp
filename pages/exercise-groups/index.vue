<template>
  <section class="f-wrapper">
    <div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">Übungen</h2>
      <nuxt-link to="/exercise-groups/add" class="c-btn c-btn--primary">Neue Gruppe hinzufügen</nuxt-link>
    </div>
    <div class="o-grid">
      <div class="o-grid__item f-w-50-ns f-w-33-l" v-for="(group, index) in exerciseGroups" v-bind:item="group" v-bind:index="index" v-bind:key="group.exercisegroup_id">
        <nuxt-link :to="'/exercise-groups/' + group.exercisegroup_id" class="f-db f-mb6 f-mb8-m c-card c-group-item" :style="{ borderColor: group.color }">
          <h3 class="c-group-item__title">{{group.name}}</h3>
          <p class="c-group-item__description">{{group.description}}</p>
          <span class="c-group-item__caption">{{group.experciseCount}} Übungen</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  layout: 'application',

  fetch ({ store }) {
    return store.dispatch('getExerciseGroups')
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest
    }),

    ...mapGetters({
      exerciseGroups: 'allExerciseGroups'
    })
  },

  mounted: function () {
    this.$store.commit('SET_APPLICATION_TITLE', 'Übungen')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  }
}
</script>
