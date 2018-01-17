<template>
  <div></div>
</template>

<script>
export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  mounted: function () {
    this.$store.commit('setApplicationTitle', 'Dashboard')
    this.$store.commit('setMobileAppBarLeftAction', false)
    this.$store.commit('setMobileAppBarRightAction', false)
  }
}
</script>
