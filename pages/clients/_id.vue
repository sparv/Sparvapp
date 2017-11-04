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
        <button v-on:click="showProfileSubmenu = !showProfileSubmenu" class="c-btn c-btn--icon">
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
        <div v-show="showProfileSubmenu" class="c-submenu">
          <ul class="c-submenu__list">
            <li class="c-submenu__item">
              <button @click="openEditSidebar">
                <svg class="f-mr5" fill="#15171A" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <span>Kunde bearbeiten</span>
              </button>
            </li>
            <li class="c-submenu__item c-submenu__item--important">
              <button data-a11y-dialog-show="deleteClient" v-on:click="showProfileSubmenu = !showProfileSubmenu">
                <svg class="f-mr5" fill="#F03D5D" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <span>Kunde löschen</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="c-card f-mb6 f-mb8-m f-pa6">
      <h2 class="">Basis Informationen</h2>
      <div class="o-grid">
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Name</h4>
            <span class="c-data-item__text">{{name}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Geschlecht</h4>
            <span class="c-data-item__text">{{gender}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m f-mb6">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Alter</h4>
            <span class="c-data-item__text">{{age}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m">
          <div class="c-data-item">
            <h4 class="c-data-item__title">E-Mail-Adresse</h4>
            <span class="c-data-item__text">{{email}}</span>
          </div>
        </div>
        <div class="o-grid__item f-w-33-m">
          <div class="c-data-item">
            <h4 class="c-data-item__title">Telefonnummer</h4>
            <span class="c-data-item__text">{{phoneNumber}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="c-card f-pa6">
      <span v-if="!clientNotes" class="text-placeholder">Keine Notizen hinterlegt</span>
      <div v-if="clientNotes">
        {{ clientNotes }}
      </div>
    </div>
    <Sidebar :openState="openSidebar" @update="updateModalState"></Sidebar>
    <Modal elementId="deleteClient" 
            icon="/images/delete.svg"
            iconDescription="Test"
            title="Kunde löschen"
            description="Bist Du Dir sicher, dass du diesen Kunden löschen möchtest? Das Löschen kann nicht rückgängig gemacht werden. Bitte gebe zur Bestätigung den Nachnamen des Kunden ein." label="Gib den Nachname des Kunden zur Bestätigung ein"
            buttonText="Kunde löschen"></Modal>
  </section>
</template>

<script>
import axios from "axios";
import A11yDialog from "a11y-dialog";
import { mapGetters } from "vuex";

import Modal from "~/components/Modal.vue";
import Sidebar from "~/components/Sidebar/Clients/EditClient.vue";

export default {
  layout: "application",
  middleware: `validate`,

  components: {
    Modal,
    Sidebar
  },

  mounted: function() {
    const el = document.getElementById("deleteClient");
    const dialog = new A11yDialog(el);

    this.$store.commit("setApplicationTitle", "Kunden");
  },

  data() {
    return {
      openSidebar: false,
      showProfileSubmenu: false,
      name: "Christopher Ankunding",
      gender: "männlich",
      age: "37",
      email: "christopher.ankunding@gmail.com",
      phoneNumber: "(0117) 957 0202",
      clientNotes: ""
    };
  },

  methods: {
    openEditSidebar: function() {
      this.showProfileSubmenu = false;
      this.openSidebar = !this.openSidebar;
    },

    updateModalState: function(data) {
      this.openSidebar = data;
    }
  }
};
</script>