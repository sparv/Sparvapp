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
          <input class="c-input f-w-100" :class="{'c-input--error': errors.has('userSettings.oldPassword') }" v-model="userSettings.oldPassword" v-validate="'required'" name="userSettings.oldPassword" type="password">
          <span v-show="errors.has('userSettings.oldPassword')" class="c-input__error-msg">{{ errors.first('userSettings.oldPassword') }}</span>
        </div>
        <div class="f-mb7">
          <label class="c-label f-db f-mb3" for="">Neues Passwort</label>
          <input class="c-input f-w-100" :class="{'c-input--error': errors.has('userSettings.newPassword') }" v-model="userSettings.newPassword" v-validate="'required'" name="userSettings.newPassword" type="password">
          <span v-show="errors.has('userSettings.newPassword')" class="c-input__error-msg">{{ errors.first('userSettings.newPassword') }}</span>
        </div>
        <div class="f-mb7">
          <label class="c-label f-db f-mb3" for="">Passwort bestätigen</label>
          <input class="c-input f-w-100" :class="{'c-input--error': errors.has('userSettings.newPasswordRepeat') }" v-model="userSettings.newPasswordRepeat" v-validate="'required'" name="userSettings.newPasswordRepeat" type="password">
          <span v-show="errors.has('userSettings.newPasswordRepeat')" class="c-input__error-msg">{{ errors.first('userSettings.newPasswordRepeat') }}</span>
        </div>
        <div class="f-cf">
          <button class="c-btn c-btn--primary f-w-100 f-w-auto-m f-fr-m">Neues Passwort speichern</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  asyncData({ store }) {
  },

  data: function() {
    return {
      userSettings: {
        oldPassword: '',
        newPassword: '',
        newPasswordRepeat: ''
      }
    };
  }
};
</script>
