<template>
  <section class="f-wrapper">
    <h2>Neue Übung</h2>
    <form @submit.prevent="submitForm">
       <div class="f-mb6 f-mb7-m">
         <label class="c-label f-db f-mb3" for="">Name</label>
         <input class="c-input f-w-100" name="name" type="text" v-model="name">
        </div>
        <div class="f-mb6 f-mb7-m">
          <fieldset>
            <legend>Schwierigkeitsgrad</legend>
            <el-radio-group v-model="level">
              <el-radio-button label="beginner">Einsteiger</el-radio-button>
              <el-radio-button label="advanced">Mittel</el-radio-button>
              <el-radio-button label="professional">Profi</el-radio-button>
            </el-radio-group>
          </fieldset>
        </div>
        <div>
          <label class="c-label f-db f-mb3" for="">Beschreibung</label>
          <textarea class="c-input c-input--textarea" name="description" id="" v-model="description"></textarea>
        </div>
      <button class="c-btn c-btn--primary f-w-100 f-w-auto-m">Übung hinzufügen</button>
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
      level: '',
      description: ''
    }
  },

  methods: {
    submitForm: async function () {
      const exerciseGroupParamsId = this.$route.params.group_id

      const data = {
        id: exerciseGroupParamsId,
        exercise: { ...this.$data }
      }

      this.$store.commit('SET_SENDING_REQUEST', true)
      try {
        await this.$store.dispatch('addNewExercise', data)

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
