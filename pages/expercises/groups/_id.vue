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
      <div>
        <button class="c-btn c-btn--primary f-mr6" @click="showSidebar('add')">Neue Übung hinzufügen</button>
        <button v-on:click="showProfileSubmenu = !showProfileSubmenu" class="c-btn c-btn--icon">
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
        <div v-show="showProfileSubmenu" class="c-submenu">
          <ul class="c-submenu__list">
            <li class="c-submenu__item">
              <button @click="showSidebar('edit')">
                <svg class="f-mr5" fill="#15171A" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <span>Gruppe bearbeiten</span>
              </button>
            </li>
            <li class="c-submenu__item c-submenu__item--important">
              <button data-a11y-dialog-show="deleteExerciseGroup" v-on:click="showProfileSubmenu = !showProfileSubmenu">
                <svg class="f-mr5" fill="#F03D5D" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <span>Gruppe löschen</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
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
    <Modal name="Arme"></Modal>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import A11yDialog from 'a11y-dialog'

import AddSidebar from '~/components/Sidebar/Exercises/AddExercise.vue'
import EditSidebar from '~/components/Sidebar/Exercises/EditExerciseGroup.vue'
import Modal from '~/components/Modal/Exercises/deleteExerciseGroup.vue'

export default {
  layout: 'application',
  middleware: `validate`,

  components: {
    AddSidebar,
    EditSidebar,
    Modal
  },

  computed: {
    ...mapGetters({
      openSidebar: 'getApplicationSidebar'
    })
  },

  mounted: function () {
    /* eslint-disable */
    const el = document.getElementById('deleteExerciseGroup')
    const dialog = new A11yDialog(el)
    /* eslint-enable */

    this.$store.commit('setApplicationTitle', 'Kunden')
    this.$store.commit('setMobileAppBarLeftAction', false)
    this.$store.commit('setMobileAppBarRightAction', true)
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
    showSidebar: function (triggerType) {
      this.$store.commit('setApplicationSidebar', true)

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
