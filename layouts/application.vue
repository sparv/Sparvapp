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
import { mapState } from 'vuex'

import AppHeader from '~/components/AppHeader.vue'
import Tabbar from '~/components/Tabbar.vue'

export default {
  components: {
    AppHeader,
    Tabbar
  },

  computed: {
    ...mapState({
      siteTitle: 'siteTitle'
    })
  }
}
</script>
