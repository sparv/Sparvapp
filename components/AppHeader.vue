<template>
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
            <details v-on:click="showUserSubmenu = !showUserSubmenu">
              <summary>
                <img :alt="username" class="f-db" src="https://avatars3.githubusercontent.com/u/1376207?s=40&amp;v=4" height="24" width="24">
              </summary>
            </details>
            <div v-if="showUserSubmenu" class="c-submenu">
              <ul class="c-submenu__list">
                <li class="c-submenu__item">
                  <nuxt-link to="/settings/" class="">Einstellungen</nuxt-link>
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
export default {
  props: ['username'],
  
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
