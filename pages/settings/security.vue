<template>
<div>
  <div class="c-card f-mb8">
    <div class="c-card__header f-ph6">
      <h3 class="f-ma0 c-card__header-title">Passwort ändern</h3>
    </div>
    <div class="c-card__content f-pv7 f-ph6">
      <form>
        <div class="f-mb7">
          <label class="c-label f-db f-mb3" for="">Altes Passwort</label>
          <input class="c-input f-w-100" :class="{'c-input--error': errors.has('fist_name') }" v-model="email" v-validate="" name="fist_name" type="text">
          <span v-show="errors.has('fist_name')" class="c-input__error-msg">{{ errors.first('fist_name') }}</span>
        </div>
        <div class="f-mb7">
          <label class="c-label f-db f-mb3" for="">Neues Passwort</label>
          <input class="c-input f-w-100" :class="{'c-input--error': errors.has('last_name') }" v-model="last_name" v-validate="" name="last_name" type="text">
          <span v-show="errors.has('last_name')" class="c-input__error-msg">{{ errors.first('last_name') }}</span>
        </div>
        <div class="f-mb7">
          <label class="c-label f-db f-mb3" for="">Passwort bestätigen</label>
          <input class="c-input f-w-100" :class="{'c-input--error': errors.has('last_name') }" v-model="last_name" v-validate="" name="last_name" type="text">
          <span v-show="errors.has('last_name')" class="c-input__error-msg">{{ errors.first('last_name') }}</span>
        </div>
        <div class="f-cf">
          <button class="c-btn c-btn--primary f-fr">Neues Passwort speichern</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>