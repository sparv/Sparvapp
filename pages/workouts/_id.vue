<template>
  <section class="f-wrapper">
    <div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">
        <ul class="c-single-breadcrumb">
          <li class="c-single-breadcrumb__item c-single-breadcrumb__item--first">
            <nuxt-link to="/clients/">Trainingspläne</nuxt-link>
            <span class="f-mh3">/</span>
          </li>
          <li class="c-single-breadcrumb__item">Grundlage Muskelaufbau 3</li>
        </ul>
      </h2>
      <ProfileHeadMenu editLabel="Trainingsplan bearbeiten" removeLabel="Trainingsplan löschen" />
    </div>
    <div class="o-grid o-grid--rev">
      <div class="o-grid__item f-w-25-m">
        <aside class="f-mb6 f-mb0-m">
          <div class="f-mb6">
            <h3 class="f-mb3 caption-uc--big">Kunde</h3>
            <span>Georgia Terry</span>
          </div>
          <div class="f-mb6">
            <h3 class="f-mb3 caption-uc--big">Titel</h3>
            <span>Grundlage Muskelaufbau 3</span>
          </div>
          <div>
            <h3 class="f-mb3 caption-uc--big">Beschreibung</h3>
            <p class="f-mb0">Attending a trade show can be a very effective method of promoting your company and its products. And one of the most effective ways to optimize your trade show display and increase traffic to your booth is through the use of banner stands.</p>
          </div>
        </aside>
      </div>
      <div class="o-grid__item f-w-75-m">
        <div class="c-table-flow__list">
          <div class="c-table-flow__item f-mb3 c-table-flow__item--status" :class="workout.level" v-for="(workout, index) in workouts" v-bind:item="workout" v-bind:index="index" v-bind:key="workout.id">
            <TableFlowCellBasic label="Name" :text="workout.name"></TableFlowCellBasic>
            <TableFlowCellBasic label="Gewicht" :text="workout.weight"></TableFlowCellBasic>
            <TableFlowCellBasic label="Wiederholungen" :text="workout.repetitions"></TableFlowCellBasic>
            <TableFlowCellMore />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ProfileHeadMenu from '~/components/ProfileHeadMenu.vue'
import TableFlowCellBasic from '~/components/Table/TableFlowCellBasic.vue'
import TableFlowCellMore from '~/components/Table/TableFlowCellMore.vue'

export default {
  layout: 'application',
  middleware: ['check-auth', 'authenticated'],

  components: {
    ProfileHeadMenu,
    TableFlowCellMore,
    TableFlowCellBasic
  },

  mounted: function () {
    this.$store.commit('SET_APPLICATION_TITLE', 'Trainingspläne')
    this.$store.commit('SET_MOBILE_APPBAR_LEFT_ACTION', false)
    this.$store.commit('SET_MOBILE_APPBAR_RIGHT_ACTION', true)
  },

  computed: {
    ...mapState({
      isSendingRequest: state => state.settings.isSendingRequest,
      openSidebar: state => state.settings.applicatonSidebar
    })
  },

  data () {
    return {
      showProfileSubmenu: false,
      workouts: [{
        'id': 1,
        'name': 'Bizeps KH-Curls Schrägbank',
        'weight': 10,
        'repetitions': 12,
        'level': 'hard'
      }, {
        'id': 2,
        'name': 'Hammercurls am Seil',
        'weight': 20,
        'repetitions': 12,
        'level': 'easy'
      }, {
        'id': 3,
        'name': 'Crunches an Negativbank',
        'weight': 0,
        'repetitions': 12,
        'level': 'medium'
      }, {
        'id': 4,
        'name': 'Beckenheben',
        'weight': 10,
        'repetitions': 12,
        'level': 'easy'
      }, {
        'id': 5,
        'name': 'Kniebeuge an Hackenschmidtmaschine',
        'weight': 50,
        'repetitions': 12,
        'level': 'medium'
      }, {
        'id': 6,
        'name': 'Ausfallschritte Stehend',
        'weight': 10,
        'repetitions': 12,
        'level': 'easy'
      }]
    }
  },

  methods: {
    showSidebar: function () {
      this.showProfileSubmenu = false
      this.$store.commit('SET_APPLICATION_SIDEBAR', true)
    }
  }
}
</script>


<style lang="scss" scoped>
.c-table-flow__item--status {
  border-left: 4px solid #000;

  &.easy {
    border-left-color: #2DB27D;
  }

  &.medium {
    border-left-color: #4149B5;
  }

  &.hard {
    border-left-color: #F03D5D;
  }
}

@media (max-width: 860px) {
  .c-table-flow__item {
    .c-table-flow__item-data {
      flex: auto;
      width: 50%;
      &:first-child {
        width: 100%;
      }
    }
  }
}
</style>
