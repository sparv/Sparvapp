<template>
  <section class="f-wrapper">
    <div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">{{siteTitle}}</h2>
    </div>
    <div class="m-app-settings">
      <div class="o-grid">
        <div class="o-grid__item f-w-third-m">
          <aside class="c-sidebar-menu f-mb7">
            <ul class="c-sidebar-menu__list">
              <li class="c-sidebar-menu__item f-mb5">
                <nuxt-link to="/settings">Persönliche Einstellungen</nuxt-link>
              </li>
              <li class="c-sidebar-menu__item">
                <nuxt-link to="/settings/security">Sicherheit</nuxt-link>
              </li>
            </ul>
          </aside>
        </div>
        <div class="o-grid__item f-w-two-thirds-m">
          <nuxt-child/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'application',

  mounted: function () {
    this.$store.commit('SET_APPLICATION_TITLE', 'Einstellungen')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', false)
  },

  computed: {
    ...mapState({
      siteTitle: state => state.metadata.siteTitle
    })
  }
}
</script>
