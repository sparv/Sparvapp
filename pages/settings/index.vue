<template>
  <div>
    <div class="c-card f-mb8">
      <div class="c-card__header f-ph6">
        <h3 class="f-ma0 c-card__header-title">Account-Einstellungen</h3>
      </div>
      <div class="c-card__content f-pv7 f-ph6">
        <form>
          <div class="f-mb7">
            <label class="c-label f-db f-mb3" for="">Vorname</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('fist_name') }" v-model="email" v-validate="" name="fist_name" type="text">
            <span v-show="errors.has('fist_name')" class="c-input__error-msg">{{ errors.first('fist_name') }}</span>
          </div>
          <div class="f-mb7">
            <label class="c-label f-db f-mb3" for="">Nachname</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('last_name') }" v-model="last_name" v-validate="" name="last_name" type="text">
            <span v-show="errors.has('last_name')" class="c-input__error-msg">{{ errors.first('last_name') }}</span>
          </div>
          <div class="f-mb7">
            <label class="c-label f-db f-mb3" for="">E-Mail-Adresse</label>
            <input class="c-input f-w-100" :class="{'c-input--error': errors.has('email') }" v-model="email" v-validate="'required|email'" name="email" type="text">
            <span v-show="errors.has('email')" class="c-input__error-msg">{{ errors.first('email') }}</span>
          </div>
          <div class="f-cf">
            <button class="c-btn c-btn--primary f-fr">Änderungen speichern</button>
          </div>
        </form>
      </div>
    </div>
    <div class="c-card">
      <div class="c-card__header f-ph6">
        <h3 class="f-ma0 c-card__header-title">Account löschen</h3>
      </div>
      <div class="c-card__content f-pv7 f-ph6">
        <p>Möchten Sie wirklich Ihren Account endgültig löschen?</p>
        <form>
          <button class="c-btn c-btn--error">Account endgültig löschen</button>
        </form>
      </div>
    </div>
  </div>
</template>