<template>
  <div>
    <div class="m-app-control f-mb10">
      <h2 class="f-ma0">Einstellungen</h2>
    </div>
    <div class="m-app-settings">
      <div class="o-grid">
        <div class="o-grid__item f-w-third">
          <aside class="c-sidebar-menu">
            <ul class="c-sidebar-menu__list">
              <li class="c-sidebar-menu__item f-mb5">
                <nuxt-link to="/settings">Persönliche Einstellungen</nuxt-link>
              </li>
              <li class="c-sidebar-menu__item">
                <nuxt-link to="/settings/security">Sicherheit</nuxt-link>
              </li>
            </ul>
          </aside>
        </div>
        <div class="o-grid__item f-w-two-thirds">
          <nuxt-child/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import axios from 'axios'
	import { mapGetters } from 'vuex'

	export default {
		layout: 'application',
		middleware: `validate`
	}
</script>
