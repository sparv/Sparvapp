<template>
  <div></div>
</template>

<script>
import Cookie from 'js-cookie'
import { mapGetters } from 'vuex'

export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  computed: {
    ...mapGetters({
      token: 'getAuthToken'
    })
  },

  mounted: function () {
    this.$store.commit('setApplicationTitle', 'Dashboard')
    this.$store.commit('setMobileAppBarLeftAction', false)
    this.$store.commit('setMobileAppBarRightAction', false)
  }
}
</script>
