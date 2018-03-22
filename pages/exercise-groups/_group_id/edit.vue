<template>
  <section class="f-wrapper">
    <h2>Übungsgruppe bearbeiten</h2>
    <form @submit.prevent="submitForm">
      <div class="f-mb6 f-mb7-m">
        <label class="c-label f-db f-mb3" for="">Name</label>
        <input class="c-input f-w-100" name="name" type="text" v-model="exerciseGroup.name">
      </div>
      <div>
        <label class="c-label f-db f-mb3" for="">Beschreibung</label>
        <textarea class="c-input c-input--textarea" name="description" id="" v-model="exerciseGroup.description"></textarea>
      </div>
      <button class="c-btn c-btn--primary f-w-100 f-w-auto-m">Änderungen speichern</button>
    </form>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  layout: 'application',

  fetch ({ store, params }) {
    return store.dispatch('getSingleExerciseGroup', params.group_id)
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest
    }),

    ...mapGetters({
      exerciseGroup: 'exerciseGroup'
    })
  },

  methods: {
    submitForm: async function () {
      const exerciseGroupParamsId = this.$route.params.group_id
      this.$store.commit('SET_SENDING_REQUEST', true)
      try {
        await this.$store.dispatch('editExerciseGroup', this.exerciseGroup)
        this.$store.commit('SET_SENDING_REQUEST', false)
        this.$router.push(`/exercise-groups/${exerciseGroupParamsId}`)
      } catch (error) {
        console.log(error.message)
        this.$store.commit('SET_SENDING_REQUEST', false)
      }
    }
  }
}
</script>
