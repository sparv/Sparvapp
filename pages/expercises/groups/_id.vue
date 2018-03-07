<template>
  <section class="f-wrapper">
		<div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">
        <ul class="c-single-breadcrumb">
          <li class="c-single-breadcrumb__item c-single-breadcrumb__item--first">
            <nuxt-link to="/expercises/">Übungen</nuxt-link>
            <span class="f-mh3">/</span>
          </li>
          <li class="c-single-breadcrumb__item">Arme</li>
        </ul>
      </h2>
      <ProfileHeadMenu editLabel="Übungsgruppe bearbeiten" removeLabel="Übungsgruppe löschen" @deletePageSourceTrigger="showModal" />
    </div>

    <div class="c-table-flow__list">
      <nuxt-link :to="'/expercises/' + exercise.id" class="c-table-flow__item f-mb3" v-for="(exercise, index) in exercises" v-bind:item="exercise" v-bind:index="index" v-bind:key="exercise.id">
        <div class="c-table-flow__item-data f-mb4 f-mb0-m f-ph6-m">
          <span>
            <img src="~/assets/images/exercise-icon.svg" class="f-db" alt="">
          </span>
        </div>
        <div class="c-table-flow__item-data f-mb4 f-mb0-m f-ph6-m f-flex-auto f-flex-grow">
          <h4 class="c-table-flow__item-title">Name</h4>
          <span class="c-table-flow__item-text">{{exercise.title}}</span>
        </div>
        <div class="c-table-flow__item-data f-mb4 f-mb0-m f-ph6-m">
          <span class="token token--positiv">{{exercise.experciseLevel}}</span>
        </div>
      </nuxt-link>
    </div>
    <AddSidebar v-if="showAddSidebar" :sidebarState="openSidebar"></AddSidebar>
    <EditSidebar v-if="showEditSidebar" :sidebarState="openSidebar"></EditSidebar>
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
import { mapState } from 'vuex'

import ModalContent from '~/components/Modal/DeleteMaster.vue'
import ProfileHeadMenu from '~/components/ProfileHeadMenu.vue'
import AddSidebar from '~/components/Sidebar/Exercises/AddExercise.vue'
import EditSidebar from '~/components/Sidebar/Exercises/EditExerciseGroup.vue'

export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  components: {
    ModalContent,
    AddSidebar,
    EditSidebar,
    ProfileHeadMenu
  },

  computed: {
    ...mapState({
      openSidebar: state => state.settings.applicatonSidebar
    })
  },

  mounted: function () {
    this.$store.commit('SET_APPLICATION_TITLE', 'Kunden')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  },

  data () {
    return {
      showProfileSubmenu: false,
      showAddSidebar: false,
      showEditSidebar: false,
      exercises: [{
        id: 1,
        title: 'Armbeugen Gerät',
        experciseLevel: 'Einsteigerlevel'
      }]
    }
  },

  methods: {
    showModal: function () {
      this.$modal.show('deleteExerciseGroup')
    },

    hideModal: function () {
      this.$modal.hide('deleteExerciseGroup')
    },

    showSidebar: function (triggerType) {
      this.$store.commit('SET_APPLICATION_SIDEBAR', true)

      switch (triggerType) {
        case 'add':
          this.showAddSidebar = true
          this.showEditSidebar = false
          break
        case 'edit':
          this.showAddSidebar = false
          this.showEditSidebar = true

          this.showProfileSubmenu = !this.showProfileSubmenu
          break
        default:
          this.showAddSidebar = false
          this.showEditSidebar = false
      }
    },

    deleteExerciseGroup: function () {}
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
