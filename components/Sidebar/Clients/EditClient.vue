<template>
  <transition name="show-sidebar">
    <div v-if="sidebarState">
      <div class="c-sidebar">
        <div class="c-sidebar__header">
          <button class="c-sidebar__close" @click="hideSidebar">
            <img src="~/assets/images/close.svg" alt="">
          </button>
          <h2 class="f-ma0">Kunde bearbeiten</h2>
        </div>
        <div class="c-sidebar__content">
          <form>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Vorname</label>
              <input class="c-input f-w-100" name="vorname" type="text">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Nachname</label>
              <input class="c-input f-w-100" name="nachname" type="text">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
              <input class="c-input f-w-100" name="e-mail-adresse" type="email">
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Telefonnummer</label>
              <input class="c-input f-w-100" name="telefonnummer" type="phone">
            </div>
            <div class="f-mb6 f-mb7-m">
              <fieldset>
                <legend>Geschlecht</legend>
                <div class="f-mb3">
                  <label for="gender_male"><input class="f-mr3" type="radio" name="gender" value="1" id="gender_male" checked>Männlich</label>
                </div>
                <div class="f-mb3">
                  <label for="gender_female"><input class="f-mr3" type="radio" name="gender" value="2" id="gender_female">Weiblich</label>
                </div>
                <div class="f-mb3">
                  <label for="gender_neutral"><input class="f-mr3" type="radio" name="gender" value="3" id="gender_neutral">keine Angaben</label>
                </div>
              </fieldset>
            </div>
            <div class="f-mb6 f-mb7-m">
              <label class="c-label f-db f-mb3" for="">Alter</label>
              <input class="c-input f-w-100" name="telefonnummer" type="phone">
            </div>
            <div>
              <label class="c-label f-db f-mb3" for="">Notiz</label>
              <textarea class="c-input c-input--textarea" name="" id=""></textarea>
            </div>
          </form>
        </div>
        <div class="c-sidebar__footer">
          <button class="c-btn c-btn--text" @click="hideSidebar">Abbrechen</button>
          <button class="c-btn c-btn--primary f-w-100 f-w-auto-m">Änderungen speichern</button>
        </div>
      </div>
      <div class="c-sidebar-dimmer"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["sidebarState"],
  methods: {
    hideSidebar: function() {
      this.$store.commit("setApplicationSidebar", false);
    }
  }
};
</script>
