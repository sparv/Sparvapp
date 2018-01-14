<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  computed: {
    ...mapState({
      token: 'authToken'
    })
  },

  mounted: function () {
    this.$store.commit('setApplicationTitle', 'Dashboard')
    this.$store.commit('setMobileAppBarLeftAction', false)
    this.$store.commit('setMobileAppBarRightAction', false)
  }
}
</script>
