<template>
  <div>
    <header class="m-app-header">
      <div class="m-app-header-content--mobile">
        <h1 class="f-ma0">Dashboard</h1>
      </div>
      <div class="m-app-header-content--desktop">
        <h1 class="f-db f-ma0">
          <nuxt-link to="/" class="f-db">
            <img src="~/assets/images/logo.svg" alt="">
          </nuxt-link>
        </h1>
        <nav class="m-app-header-nav">
          <ul class="m-app-header-nav__list">
            <li class="m-app-header-nav__item">
              <nuxt-link to="/dashboard">Dashboard</nuxt-link>
            </li>
            <li class="f-ml8 m-app-header-nav__item">
              <nuxt-link to="/clients">Kunden</nuxt-link>
            </li>
            <li class="f-ml8 m-app-header-nav__item">
              <button v-on:click="showUserSubmenu = !showUserSubmenu">
                <img src="https://d3iw72m71ie81c.cloudfront.net/female-17.jpg" width="32" height="32" alt="">
                <span>{{ getName }}</span>
              </button>
              <div v-if="showUserSubmenu" class="c-submenu">
                <ul class="c-submenu__list">
                  <li class="c-submenu__item">
                    <nuxt-link to="/settings/" class="">Einstellungen</nuxt-link>
                  </li>
                  <li class="c-submenu__item">
                    <button v-on:click="logout">Logout</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="application-content">
      <nuxt/>
    </main>
    <div class="m-tabbar">
      <div class="o-grid o-grid--full">
        <div class="o-grid__item f-w-33">
          <div class="m-tabbar__item f-pa2 f-pt3">
            <nuxt-link to="/dashboard" class="f-db">
              <svg class="f-db f-mb2" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
              <span class="f-db m-tabbar__item-text">Dashboard</span>
            </nuxt-link>
          </div>
        </div>
        <div class="o-grid__item f-w-33">
          <div class="m-tabbar__item f-pa2 f-pt3">
            <nuxt-link to="/clients" class="f-db">
              <svg class="f-db f-mb2" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              <span class="f-db m-tabbar__item-text">Kunden</span>
            </nuxt-link>
          </div>
        </div>
        <div class="o-grid__item f-w-33">
          <div class="m-tabbar__item f-pa2 f-pt3">
            <nuxt-link to="/settings" class="f-db">
              <svg class="f-db f-mb2" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
              <span class="f-db m-tabbar__item-text">Einstellungen</span>
            </nuxt-link>
          </div>
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
		middleware: `validate`,
		
		computed: {
			...mapGetters([
				`getEmail`,
				`getName`
			])
		},

		data: function () {
			return {
        title: `Test`,
        showUserSubmenu: false
			}
		},

		methods: {
			logout: function (event) {
				document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
				this.$store.commit(`setAuthentication`, false)
				this.$store.commit(`setSessionId`, null) //rename setSessionId to be clearer that it is jwt token auth
				this.$store.commit(`setEmail`, null)
				this.$store.commit(`setName`, null)
				this.$router.push(`/`)
			}
		}
	}
</script>
