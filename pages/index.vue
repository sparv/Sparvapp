<template>
  <div></div>
</template>

<script>
export default {
  layout: 'application',

  mounted: function () {
    console.log('Token' + this.$auth.token)
    console.log('user' + this.$auth.state.user)
    console.log('loggedIn' + this.$auth.state.loggedIn)

    this.$store.commit('SET_APPLICATION_TITLE', 'Dashboard')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', false)
  }
}
</script>
