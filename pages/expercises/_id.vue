<template>
  <section class="f-wrapper">
    <div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">
        <ul class="c-single-breadcrumb">
          <li class="c-single-breadcrumb__item c-single-breadcrumb__item--first">
            <nuxt-link to="/expercises/">Übungen</nuxt-link>
            <span class="f-mh3">/</span>
          </li>
          <li class="c-single-breadcrumb__item">
            <nuxt-link to="/expercises/groups/3/">Arme</nuxt-link>
            <span class="f-mh3">/</span>
          </li>
          <li class="c-single-breadcrumb__item">{{exercise.name}}</li>
        </ul>
      </h2>
      <ProfileHeadMenu editLabel="Übung bearbeiten" removeLabel="Übung löschen" @deletePageSourceTrigger="showModal" />
    </div>

    <div>
      <div class="o-grid">
        <div class="o-grid__item f-w-third-m">
          <div class="c-card f-mb6 f-mb0 f-pa7">
            <div class="f-mb6">
              <img src="~/assets/images/exercise-icon-big.svg" class="f-db f-w-100" alt="">
            </div>
            <span class="f-db f-w-100 token token--positiv">{{exercise.level}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-two-thirds-m">
          <div class="c-card f-pa7">
            <h3>Beschreibung</h3>
            <p class="f-ma0">{{exercise.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <Sidebar :sidebarState="openSidebar"></Sidebar>
    <modal name="deleteExercise" height="auto">
      <ModalContent :confirmationValue="exercise.name"
        title="Übung löschen"
        summary="Bist Du Dir sicher, dass du diese Übung löschen möchtest? Das Löschen kann nicht rückgängig gemacht werden."
        formLabel="Gib den Namen der Übung zur Bestätigung ein"
        submitButtonText="Übung löschen"
        @hideModal="hideModal"
        @formSubmitted="deleteExercise"
      />
    </modal>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import ModalContent from '~/components/Modal/DeleteMaster.vue'
import ProfileHeadMenu from '~/components/ProfileHeadMenu.vue'
import Sidebar from '~/components/Sidebar/Exercises/EditExercise.vue'

export default {
  layout: 'application',

  components: {
    ModalContent,
    Sidebar,
    ProfileHeadMenu
  },

  fetch ({ store, params }) {
    return store.dispatch('getSingleExercise', params.id)
  },

  mounted: function () {
    this.$store.commit('SET_APPLICATION_TITLE', 'Kunden')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  },

  computed: {
    ...mapState({
      openSidebar: state => state.settings.applicatonSidebar
    }),

    ...mapGetters({
      exercise: 'exercise'
    })
  },

  data () {
    return {
      showProfileSubmenu: false
    }
  },

  methods: {
    showModal: function () {
      this.$modal.show('deleteExercise')
    },

    hideModal: function () {
      this.$modal.hide('deleteExercise')
    },

    showSidebar: function () {
      this.showProfileSubmenu = false
      this.$store.commit('SET_APPLICATION_SIDEBAR', true)
    },

    deleteExercise: function () {
      this.$store.dispatch('deleteExercise', this.exercise_id)
    }
  }
}
</script>
