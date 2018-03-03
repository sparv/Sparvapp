<template>
  <div class="c-table-flow__item-data--more f-mb4 f-mb0-m f-ph6-m">
    <button v-on:click="showContext = !showContext" class="more-icon">
      <svg fill="#727375" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    </button>
    <div v-show="showContext" class="c-submenu">
      <ul class="c-submenu__list">
        <li class="c-submenu__item">
          <button>
            <svg class="f-mr5" fill="#15171A" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            <span>Bearbeiten</span>
          </button>
        </li>
        <li class="c-submenu__item c-submenu__item--important">
          <button data-a11y-dialog-show="deleteClient" v-on:click="showContext = !showContext">
            <svg class="f-mr5" fill="#F03D5D" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            <span>Löschen</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      showContext: false
    }
  }
}
</script>

<style lang="scss" scoped>
.more-icon {
  background: none;
  border: none;
  vertical-align: middle;
}

.c-submenu {
  top: 32px;
  width: 192px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.12), 0 2px 12px 0 rgba(0,0,0,0.16);
}

.c-submenu__item > a,
.c-submenu__item > span,
.c-submenu__item > button {
  height: 48px;
}
</style>
