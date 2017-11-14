<template>
  <div>
    <AppHeader :siteTitle="siteTitle"></AppHeader>
    <main class="application-content">
      <nuxt/>
    </main>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppHeader from '~/components/AppHeader.vue'
import Tabbar from '~/components/Tabbar.vue'

export default {
  components: {
    AppHeader,
    Tabbar
  },

  computed: {
    ...mapGetters({
      siteTitle: 'getApplicationTitle'
    })
  }
}
</script>
