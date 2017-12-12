<template>
  <header class="m-app-header">
    <div class="m-app-header-content--mobile">
      <nuxt-link to="#" class="m-app-header__action-left" v-if="leftAction">
        <img src="~/assets/images/arrow_left.svg" alt="">
      </nuxt-link>
      <h1 class="f-ma0">{{siteTitle}}</h1>
      <div class="m-app-header__action-right" v-if="rightAction" @click="showSidebar">
        <img src="~/assets/images/add.svg" alt="">
      </div>
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
            <nuxt-link to="/expercises">Übungen</nuxt-link>
          </li>
          <li class="f-ml8 m-app-header-nav__item">
            <details v-on:click="showUserSubmenu = !showUserSubmenu">
              <summary>
                <svg class="f-db" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </summary>
            </details>
            <div v-if="showUserSubmenu" class="c-submenu">
              <ul class="c-submenu__list">
                <li class="c-submenu__item">
                  <nuxt-link to="/settings/" v-on:click.native="showUserSubmenu = !showUserSubmenu">Einstellungen</nuxt-link>
                </li>
                <li class="c-submenu__item">
                  <span v-on:click="logout">Logout</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { unsetToken } from '~/utils/auth.js'

export default {
  props: {
    siteTitle: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters({
      user: 'getAuthUser',
      leftAction: 'getMobileAppBarLeftAction',
      rightAction: 'getMobileAppBarRightAction'
    })
  },

  data: function () {
    return {
      showUserSubmenu: false
    }
  },

  methods: {
    showSidebar: function () {
      this.$store.commit('setApplicationSidebar', true)
    },

    logout: function (event) {
      this.$store.commit(`setAuthUser`, null)
      this.$store.commit(`setAuthToken`, '')
      unsetToken()
      this.$router.push(`/`)
    }
  }
}
</script>


<style lang="scss" scoped>
.m-app-header {
  position: fixed;
  width: 100%;
  z-index: 10;

  @media (min-width: 860px) {
    position: static;
  }
}

.m-app-header__action-left {
  position: absolute;
  top: 16px;
  left: 8px;
}

.m-app-header__action-right {
  position: absolute;
  top: 16px;
  right: 8px;
}
</style>
