<template>
  <div class="m-tabbar">
    <div class="o-grid o-grid--full">
      <div class="o-grid__item f-w-33">
        <div class="m-tabbar__item f-pa2 f-pt3">
          <nuxt-link to="/dashboard" class="f-db">
            <svg class="f-db f-mb2" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            <span class="f-db m-tabbar__item-text">Dashboard</span>
          </nuxt-link>
        </div>
      </div>
      <div class="o-grid__item f-w-33">
        <div class="m-tabbar__item f-pa2 f-pt3">
          <nuxt-link to="/clients" class="f-db">
            <svg class="f-db f-mb2" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            <span class="f-db m-tabbar__item-text">Kunden</span>
          </nuxt-link>
        </div>
      </div>
      <div class="o-grid__item f-w-33">
        <div class="m-tabbar__item f-pa2 f-pt3">
          <nuxt-link to="/settings" class="f-db">
            <svg class="f-db f-mb2" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
            <span class="f-db m-tabbar__item-text">Einstellungen</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
