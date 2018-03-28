<template>
  <section class="f-wrapper">
    <h2>Neue Übungsgruppe</h2>
    <form @submit.prevent="submitForm">
      <div class="f-mb6 f-mb7-m">
        <label class="c-label f-db f-mb3" for="">Name</label>
        <input class="c-input f-w-100" name="name" type="text" v-model="name">
      </div>
      <div class="f-mb6 f-mb7-m">
        <label class="c-label f-db f-mb3" for="">Gruppenfarbe</label>
        <div class="c-input-color-wrapper">
          <input class="c-input f-w-100" name="name" type="text" v-model="color">
          <el-color-picker class="f-ml3" v-model="color"></el-color-picker>
        </div>
      </div>
      <div>
        <label class="c-label f-db f-mb3" for="">Beschreibung</label>
        <textarea class="c-input c-input--textarea" name="description" id="" v-model="description"></textarea>
      </div>
      <button class="c-btn c-btn--primary f-w-100 f-w-auto-m">Gruppe hinzufügen</button>
    </form>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'application',

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest
    })
  },

  data () {
    return {
      name: '',
      color: '',
      description: ''
    }
  },

  methods: {
    submitForm: async function () {
      try {
        await this.$store.dispatch('addExerciseGroup', this.$data)
        this.$router.push(`/exercise-groups/`)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
