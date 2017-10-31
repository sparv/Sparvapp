<template>
  <transition name="show-sidebar">
    <div v-if="openState">
      <div class="c-sidebar">
        <div class="c-sidebar__header">
          <h2 class="f-ma0">Kunde bearbeiten</h2>
        </div>
        <div class="c-sidebar__content">
          <form>
            <div class="f-mb7">
              <label class="c-label f-db f-mb3" for="">Vorname</label>
              <input class="c-input f-w-100" name="vorname" type="text">
            </div>
            <div class="f-mb7">
              <label class="c-label f-db f-mb3" for="">Nachname</label>
              <input class="c-input f-w-100" name="nachname" type="text">
            </div>
            <div class="f-mb7">
              <label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
              <input class="c-input f-w-100" name="e-mail-adresse" type="email">
            </div>
            <div class="f-mb7">
              <label class="c-label f-db f-mb3" for="">Telefonnummer</label>
              <input class="c-input f-w-100" name="telefonnummer" type="phone">
            </div>
            <div class="f-mb7">
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
            <div class="f-mb7">
              <label class="c-label f-db f-mb3" for="">Alter</label>
              <input class="c-input f-w-100" name="telefonnummer" type="phone">
            </div>
            <div class="f-mb7">
              <label class="c-label f-db f-mb3" for="">Notiz</label>
              <textarea class="c-input c-input--textarea" name="" id=""></textarea>
            </div>
          </form>
        </div>
        <div class="c-sidebar__footer">
          <button class="c-btn c-btn--text" @click="closeSidebar">Abbrechen</button>
          <button class="c-btn c-btn--primary">Änderungen speichern</button>
        </div>
      </div>
      <div class="c-sidebar-dimmer"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['openState'],

  methods: {
    closeSidebar: function() {
      this.$emit('update', false)
    }
  }
}
</script>


<style lang="scss" scoped>
  .c-sidebar-dimmer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(21,23,26,0.72);
  }
  
  .c-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 15;
    width: 560px;
    height: 100vh;
    overflow: hidden;
    background: #FFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.12), 0 2px 12px 0 rgba(0,0,0,0.16);
  }

  .c-sidebar__header {
    display: flex;
    align-items: center;
    height: 96px;
    padding: 0 32px;
    border-bottom: 2px solid #E8E8E8;
  }

  .c-sidebar__content {
    padding: 32px;
    height: calc(100vh - 96px - 80px);
    overflow-y: auto;
  }

  .c-sidebar__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 16px 32px;
    background: #F5F7FA;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.12), 0 2px 12px 0 rgba(0,0,0,0.16);

    .c-btn--text {
      padding: 0;
      color: #434547;
      background: none;
    }
  }
</style>
