<template>
	<div>
    <h1>Clients</h1>
	</div>
</template>

<script>
	import axios from 'axios'
	import { mapGetters } from 'vuex'

	export default {
		layout: 'application',
		middleware: `validate`,
	}
</script>
