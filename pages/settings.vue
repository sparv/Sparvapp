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
import { mapGetters } from 'vuex'

export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  mounted: function () {
    this.$store.commit('setApplicationTitle', 'Einstellungen')
    this.$store.commit('setMobileAppBarLeftAction', false)
    this.$store.commit('setMobileAppBarRightAction', false)
  },

  computed: {
    ...mapGetters({
      siteTitle: 'getApplicationTitle'
    })
  }
}
</script>
