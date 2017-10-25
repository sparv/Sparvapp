<template>
  <div>
    <AppHeader :username="getName"></AppHeader>
    <main class="application-content">
      <nuxt/>
    </main>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
	import axios from 'axios'
	import { mapGetters } from 'vuex'

  import AppHeader from '~/components/AppHeader.vue'
  import Tabbar from '~/components/Tabbar.vue'

	export default {
		middleware: `validate`,

    components: {
      AppHeader,
      Tabbar
    },
		
		computed: {
			...mapGetters([
				`getEmail`,
				`getName`
			])
		}
	}
</script>
