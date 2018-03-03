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
      <ProfileHeadMenu editLabel="Übung bearbeiten" removeLabel="Übung löschen" />
    </div>

    <div>
      <div class="o-grid">
        <div class="o-grid__item f-w-third-m">
          <div class="c-card f-mb6 f-mb0 f-pa7">
            <div class="f-mb6">
              <img src="~/assets/images/exercise-icon-big.svg" class="f-db f-w-100" alt="">
            </div>
            <span class="f-db f-w-100 token token--positiv">Einsteigerlevel</span>
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
import A11yDialog from 'a11y-dialog'
import { mapState } from 'vuex'

import ProfileHeadMenu from '~/components/ProfileHeadMenu.vue'
import Modal from '~/components/Modal/Exercises/DeleteExercise.vue'
import Sidebar from '~/components/Sidebar/Exercises/EditExercise.vue'

export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  components: {
    Modal,
    Sidebar,
    ProfileHeadMenu
  },

  mounted: function () {
    /* eslint-disable */
    const el = document.getElementById('deleteExercise')
    const dialog = new A11yDialog(el)
    /* eslint-enable */

    this.$store.commit('SET_APPLICATION_TITLE', 'Kunden')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  },

  computed: {
    ...mapState({
      openSidebar: state => state.settings.applicatonSidebar
    })
  },

  data () {
    return {
      showProfileSubmenu: false,
      name: ''
    }
  },

  methods: {
    showSidebar: function () {
      this.showProfileSubmenu = false
      this.$store.commit('SET_APPLICATION_SIDEBAR', true)
    }
  }
}
</script>
