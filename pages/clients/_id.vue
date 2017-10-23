<template>
  <section class="f-wrapper">
    <div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">
        <ul class="c-single-breadcrumb">
          <li class="c-single-breadcrumb__item c-single-breadcrumb__item--first">
            <nuxt-link to="/clients/">Kunden</nuxt-link>
            <span class="f-mh3">/</span>
          </li>
          <li class="c-single-breadcrumb__item">Christopher Ankunding</li>
        </ul>
      </h2>
      <div>
        <nuxt-link to="#" class="c-btn c-btn--primary f-mr6">Termin hinzufügen</nuxt-link>
        <nuxt-link to="#" class="c-btn c-btn--primary f-mr6">Trainingsplan anlegen</nuxt-link>
        <button v-on:click="showProfileSubmenu = !showProfileSubmenu" class="c-btn c-btn--icon">
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
        <div v-if="showProfileSubmenu" class="c-submenu">
          <ul class="c-submenu__list">
            <li class="c-submenu__item">
              <nuxt-link to="/clients/1/edit/" class="">Kunde bearbeiten</nuxt-link>
            </li>
            <li class="c-submenu__item">
              <nuxt-link to="/clients/1/delete/" class="">Kunde löschen</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="c-card f-pa6">
      <h2 class="">Basis Informationen</h2>
      <div class="o-grid">
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Name</h4>
            <span class="c-data-item__text">Christopher Ankunding</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Geschlecht</h4>
            <span class="c-data-item__text">männlich</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Alter</h4>
            <span class="c-data-item__text">37</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m">
          <div class="c-data-item">
            <h4 class="c-data-item__title">E-Mail-Adresse</h4>
            <span class="c-data-item__text">christopher.ankunding@gmail.com</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Telefonnummer</h4>
            <span class="c-data-item__text">(0117) 957 0202</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
	import axios from 'axios'
	import { mapGetters } from 'vuex'

	export default {
		layout: 'application',
    middleware: `validate`,

    data () {
      return {
        showProfileSubmenu: false
      }
    },
    
    methods: {
      openProfileSubmenu: function(event) {
      }
    }
	}
</script>

<style lang="scss" scoped>
  .m-app-control {
    position: relative;
  }
  
  .c-single-breadcrumb {
    margin: 0;
    padding: 0;
    font-size: 24px;
    list-style: none;
    span {
      color: #727375;
    }
  }

  .c-single-breadcrumb__item {
    display: inline-block;
  }

  .c-single-breadcrumb__item--first a {
    color: #727375;
    text-decoration: none;
  }

  .c-submenu {
    position: absolute;
    top: 56px;
    right: 0;
    width: 256px;
    z-index: 10;
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.12);
  }

  .c-submenu__list {
    margin: 0;
    padding: 8px 0;
    list-style: none;
  }

  .c-submenu__item a {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 56px;
    color: #15171A;
    letter-spacing: 0.24px;
    line-height: 24px;
    text-decoration: none;

    &:hover, &:focus {
      background: #f5f7fa;
    }
  }





</style>