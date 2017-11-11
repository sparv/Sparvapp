<template>
  <div>
    <LandingpageHeader></LandingpageHeader>
    <main class="landingpage-content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import LandingpageHeader from '~/components/LandingpageHeader.vue'
export default {
  components: {
    LandingpageHeader
  }
}
</script>