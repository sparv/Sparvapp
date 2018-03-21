<template>
  <section class="f-wrapper">
		<div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">
        <ul class="c-single-breadcrumb">
          <li class="c-single-breadcrumb__item c-single-breadcrumb__item--first">
            <nuxt-link to="/expercises/">Übungen</nuxt-link>
            <span class="f-mh3">/</span>
          </li>
          <li class="c-single-breadcrumb__item">{{exerciseGroup.name}}</li>
        </ul>
      </h2>
      <nuxt-link :to="'/exercises/groups/' + exerciseGroup.exercisegroup_id + '/add'" class="c-btn c-btn--primary">Neue Übung hinzufügen</nuxt-link>

      <ProfileHeadMenu editLabel="Übungsgruppe bearbeiten" removeLabel="Übungsgruppe löschen" :link="'/exercises/groups/' + exerciseGroup.exercisegroup_id + '/edit'" @deletePageSourceTrigger="showModal" />
    </div>

    <div class="c-table-flow__list">
      <nuxt-link :to="'/exercises/' + exercise.exercise_id" class="c-table-flow__item f-mb3" v-for="(exercise, index) in exerciseGroup.exercises" v-bind:item="exercise" v-bind:index="index" v-bind:key="exercise.exercise_id">
        <div class="c-table-flow__item-data f-mb4 f-mb0-m f-ph6-m">
          <span>
            <img src="~/assets/images/exercise-icon.svg" class="f-db" alt="">
          </span>
        </div>
        <div class="c-table-flow__item-data f-mb4 f-mb0-m f-ph6-m f-flex-auto f-flex-grow">
          <h4 class="c-table-flow__item-title">Name</h4>
          <span class="c-table-flow__item-text">{{exercise.name}}</span>
        </div>
        <div class="c-table-flow__item-data f-mb4 f-mb0-m f-ph6-m">
          <span class="token token--positiv">{{exercise.level}}</span>
        </div>
      </nuxt-link>
    </div>
    <modal name="deleteExerciseGroup" height="auto">
      <ModalContent confirmationValue="Arme"
        title="Gruppe löschen"
        summary="Bist Du Dir sicher, dass du diese Gruppe löschen möchtest? Das Löschen kann nicht rückgängig gemacht werden."
        formLabel="Gib den Namen der Gruppe zur Bestätigung ein"
        submitButtonText="Gruppe löschen"
        @hideModal="hideModal"
        @formSubmitted="deleteExerciseGroup"
      />
    </modal>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import ModalContent from '~/components/Modal/DeleteMaster.vue'
import ProfileHeadMenu from '~/components/ProfileHeadMenuLink.vue'

export default {
  layout: 'application',

  components: {
    ModalContent,
    ProfileHeadMenu
  },

  fetch ({ store, params }) {
    return store.dispatch('getSingleExerciseGroup', params.id)
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest,
      openSidebar: state => state.settings.applicatonSidebar
    }),

    ...mapGetters({
      exerciseGroup: 'exerciseGroup'
    })
  },

  mounted: function () {
    this.$store.commit('SET_APPLICATION_TITLE', 'Kunden')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  },

  data () {
    return {
      showProfileSubmenu: false
    }
  },

  methods: {
    showModal: function () {
      this.$modal.show('deleteExerciseGroup')
    },

    hideModal: function () {
      this.$modal.hide('deleteExerciseGroup')
    },

    deleteExerciseGroup: function () {}
  }
}
</script>
