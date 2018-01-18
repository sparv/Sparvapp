<template>
  <div></div>
</template>

<script>
export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  mounted: function () {
    this.$store.commit('SET_APPLICATION_TITLE', 'Dashboard')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', false)
  }
}
</script>
