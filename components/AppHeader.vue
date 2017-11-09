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
            <details v-on:click="showUserSubmenu = !showUserSubmenu">
              <summary>
                <img class="f-db" src="https://avatars3.githubusercontent.com/u/1376207?s=40&amp;v=4" height="24" width="24" alt="Profilbilder angemeldeten Nutzers">
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
import { mapGetters } from "vuex";
export default {
  props: {
    siteTitle: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters({
      user: "getAuthUser",
      leftAction: "getMobileAppBarLeftAction",
      rightAction: "getMobileAppBarRightAction"
    })
  },

  data: function() {
    return {
      showUserSubmenu: false
    };
  },

  methods: {
    showSidebar: function() {
      this.$store.commit("setApplicationSidebar", true);
    },

    logout: function(event) {
      this.$store.commit(`setAuthUser`, null);
      this.$router.push(`/`);
    }
  }
};
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
