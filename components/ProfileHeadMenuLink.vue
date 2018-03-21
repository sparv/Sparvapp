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
          <nuxt-link :to="link">
            <icon name="edit" class="f-mr5" color="#15171A"></icon>
            <span>{{editLabel}}</span>
          </nuxt-link>
        </li>
        <li class="c-submenu__item c-submenu__item--important">
          <button @click="showDelete">
            <icon name="trash" class="f-mr5" color="#F03D5D"></icon>
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
    },
    link: {
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
