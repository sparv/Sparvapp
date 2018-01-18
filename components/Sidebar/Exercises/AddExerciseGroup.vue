<template>
  <transition name="show-sidebar">
    <div v-if="sidebarState">
      <div class="c-sidebar">
        <div class="c-sidebar__header">
          <button class="c-sidebar__close" @click="hideSidebar">
            <img src="~/assets/images/close.svg" alt="">
          </button>
          <h2 class="f-ma0">Neue Gruppe hinzufügen</h2>
        </div>
        <form @submit.prevent="submitForm">
          <div class="c-sidebar__content">
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Name</label>
              <input class="c-input f-w-100" name="name" type="text" v-model="name">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Farbauswahl</label>
              <input class="c-input f-w-100" name="color" type="text" v-model="color">
            </div>
            <div>
              <label class="c-label f-db f-mb3" for="">Beschreibung</label>
              <textarea class="c-input c-input--textarea" name="description" id="" v-model="description"></textarea>
            </div>
          </div>
          <div class="c-sidebar__footer">
            <span class="c-btn c-btn--text" @click="hideSidebar">Abbrechen</span>
            <button class="c-btn c-btn--primary f-w-100 f-w-auto-m">Gruppe hinzufügen</button>
          </div>
        </form>
      </div>
      <div class="c-sidebar-dimmer"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    sidebarState: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      name: '',
      color: '',
      description: ''
    }
  },

  methods: {
    hideSidebar: function () {
      this.$store.commit('SET_APPLICATION_SIDEBAR', false)
    }
  }
}
</script>
