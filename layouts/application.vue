<template>
  <div>
    <AppHeader :siteTitle="siteTitle"></AppHeader>
    <main class="application-content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  },

  computed: {
    ...mapState({
      siteTitle: state => state.metadata.siteTitle
    })
  }
}
</script>
