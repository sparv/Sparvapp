<template>
  <div>
    <header class="m-app-header">
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
            <nuxt-link to="/settings">Einstellungen</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="application-content">
      <section class="f-wrapper">
        <nuxt/>
      </section>
    </main>
  </div>
</template>
