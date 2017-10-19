<template>
  <div>
    <header class="m-site-header">
      <h1 class="f-db f-ma0">
        <nuxt-link to="/" class="f-db">
          <img src="~/assets/images/logo.svg" alt="">
        </nuxt-link>
      </h1>
      <div>
        <nuxt-link to="/login" class="c-btn c-btn--white f-mr7">Login</nuxt-link>
        <nuxt-link to="/signup" class="c-btn c-btn--white">Registrierung</nuxt-link>
      </div>
    </header>
    <main class="landingpage-content">
      <nuxt/>
    </main>
  </div>
</template>
