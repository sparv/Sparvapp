<template>
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
          <button @click="showSidebar">
            <svg class="f-mr5" fill="#15171A" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            <span>{{editLabel}}</span>
          </button>
        </li>
        <li class="c-submenu__item c-submenu__item--important">
          <button @click="showDelete">
            <svg class="f-mr5" fill="#F03D5D" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            <span>{{removeLabel}}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editLabel: {
      type: String,
      required: true
    },
    removeLabel: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      showProfileSubmenu: false
    }
  },

  methods: {
    showSidebar: function () {
      this.showProfileSubmenu = !this.showProfileSubmenu
      this.$store.commit('SET_APPLICATION_SIDEBAR', true)
    },

    showDelete: function () {
      this.showProfileSubmenu = !this.showProfileSubmenu
      this.$emit('deletePageSourceTrigger')
    }
  }
}
</script>
