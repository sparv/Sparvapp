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
          <li class="c-single-breadcrumb__item">Armbeugen Gerät</li>
        </ul>
      </h2>
      <div>
        <button v-on:click="showProfileSubmenu = !showProfileSubmenu" class="c-btn c-btn--icon">
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
        <div v-show="showProfileSubmenu" class="c-submenu">
          <ul class="c-submenu__list">
            <li class="c-submenu__item">
              <button @click="showSidebar">
                <svg class="f-mr5" fill="#15171A" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <span>Übung bearbeiten</span>
              </button>
            </li>
            <li class="c-submenu__item c-submenu__item--important">
              <button data-a11y-dialog-show="deleteExercise" v-on:click="showProfileSubmenu = !showProfileSubmenu">
                <svg class="f-mr5" fill="#F03D5D" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <span>Übung löschen</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <div class="o-grid">
        <div class="o-grid__item f-w-third-m">
          <div class="c-card f-mb6 f-mb0 f-pa7">
            <div class="f-mb6">
              <img src="~/assets/images/exercise-icon-big.svg" class="f-db f-w-100" alt="">
            </div>
            <span class="token f-db f-w-100">Einsteigerlevel</span>
          </div>
        </div>
        <div class="o-grid__item f-w-two-thirds-m">
          <div class="c-card f-pa7">
            <h3>Beschreibung</h3>
            <p class="f-ma0">Marketers/advertisers usually focus their efforts on the people responsible for making the purchase. In many cases, this is an effective approach but in other cases it can make for a totally useless marketing campaign.</p>
          </div>
        </div>
      </div>
    </div>

    <Sidebar :sidebarState="openSidebar"></Sidebar>
    <Modal name="Armbeugen Gerät"></Modal>
  </section>
</template>

<script>
import axios from 'axios'
import A11yDialog from 'a11y-dialog'
import { mapGetters } from 'vuex'

import Modal from '~/components/Modal/Exercises/DeleteExercise.vue'
import Sidebar from '~/components/Sidebar/Exercises/EditExercise.vue'

export default {
  layout: 'application',
  middleware: `validate`,

  components: {
    Modal,
    Sidebar
  },

  mounted: function () {
    /* eslint-disable */
    const el = document.getElementById('deleteExercise')
    const dialog = new A11yDialog(el)
    /* eslint-enable */

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
      showProfileSubmenu: false,
      name: ""
    }
  },

  methods: {
    showSidebar: function () {
      this.showProfileSubmenu = false
      this.$store.commit('setApplicationSidebar', true)
    }
  }
}
</script>
