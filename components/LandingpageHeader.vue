<template>
  <header class="m-site-header">
    <div class="m-site-header__top">
      <h1 class="f-ma0">
        <nuxt-link to="/" class="f-db">
          <img src="~/assets/images/logo.svg" class="f-db" alt="Logo von Sparv">
        </nuxt-link>
      </h1>
      <button class="m-site-header__toggle" v-on:click="mobileNavigationShow = !mobileNavigationShow">
        <svg v-if="!mobileNavigationShow" class="f-db" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        <svg v-else class="f-db" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </button>
    </div>
    <div class="m-site-header__bottom" v-bind:class="{ 'm-site-header__bottom--open': mobileNavigationShow }">
      <nuxt-link to="/login" class="c-btn c-btn--white f-mb5 f-w-100 f-mb0-m f-mr7-m f-w-auto-m">Login</nuxt-link>
      <nuxt-link to="/signup" class="c-btn c-btn--white f-w-100 f-mb0-m f-w-auto-m">Registrierung</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      mobileNavigationShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.m-site-header {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px 16px;
  height: auto;

  @media (min-width: 860px) {
    flex-direction: row;
    padding: 0 48px;
    height: 96px;
  }
}

.m-site-header__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;

  @media (min-width: 860px) {
    margin-bottom: 0;
  }
}

.m-site-header__toggle {
  background: none;
  border: none;
  @media (min-width: 860px) {
    display: none;
  }
}

.m-site-header__bottom {
  display: none;
  width: 100%;
  @media (min-width: 860px) {
    display: flex;
    width: auto;
  }
}

.m-site-header__bottom--open {
  display: block;
  @media (min-width: 860px) {
    display: flex;
  }
}
</style>
