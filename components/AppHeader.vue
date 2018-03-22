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
            <nuxt-link to="/">Dashboard</nuxt-link>
          </li>
          <li class="f-ml8 m-app-header-nav__item">
            <nuxt-link to="/customers">Kunden</nuxt-link>
          </li>
          <li class="f-ml8 m-app-header-nav__item">
            <nuxt-link to="/exercise-groups">Übungen</nuxt-link>
          </li>
          <li class="f-ml8 m-app-header-nav__item">
            <nuxt-link to="/workouts">Trainingspläne</nuxt-link>
          </li>
          <li class="f-ml8 m-app-header-nav__item">
            <details v-on:click="showUserSubmenu = !showUserSubmenu">
              <summary>
                <icon name="user-circle" scale="2" color="blue"></icon>
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
import { mapState } from 'vuex'

export default {
  props: {
    siteTitle: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState({
      leftAction: state => state.settings.leftAction,
      rightAction: state => state.settings.rightAction
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

    logout: async function () {
      try {
        await this.$auth.logout()
        this.$axios.setHeader('Authorization', null)
      } catch (error) {
        console.log(error)
      }
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
