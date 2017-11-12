<template>
  <section class="f-wrapper">
    <div class="m-app-control f-mb8 f-mb10-m">
      <h2 class="f-ma0">Übungen</h2>
      <button class="c-btn c-btn--primary" @click="showSidebar">Neue Gruppe hinzufügen</button>
    </div>
    <div class="o-grid">
      <div class="o-grid__item f-w-50-ns f-w-33-l" v-for="(group, index) in exerciseGroups" v-bind:item="group" v-bind:index="index" v-bind:key="group.id">
        <nuxt-link :to="'/expercises/groups/' + group.id" class="f-db f-mb6 f-mb8-m c-card c-group-item" :style="{ borderColor: group.groupColor }">
          <h3 class="c-group-item__title">{{group.name}}</h3>
          <p class="c-group-item__description">{{group.description}}</p>
          <span class="c-group-item__caption">{{group.experciseCount}} Übungen</span>
        </nuxt-link>
      </div>
    </div>
    <Sidebar :sidebarState="openSidebar"></Sidebar>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from '~/components/Sidebar/Exercises/AddExerciseGroup.vue'

export default {
  layout: 'application',
  middleware: `validate`,

  components: {
    Sidebar
  },

  computed: {
    ...mapGetters({
      openSidebar: 'getApplicationSidebar'
    })
  },

  mounted: function () {
    this.$store.commit('setApplicationTitle', 'Übungen')
    this.$store.commit('setMobileAppBarLeftAction', false)
    this.$store.commit('setMobileAppBarRightAction', true)
  },

  data () {
    return {
      exerciseGroups: [{
        id: 1,
        name: 'Arme',
        groupColor: '#f03d92',
        description: 'Consider the following paragraphs and compare what you know to the latest info on herbal breast enlargement.',
        experciseCount: 38
      }, {
        id: 2,
        name: 'Bauch',
        groupColor: '#f0a13d',
        description: 'With this ring, I thee wed’. The most beautiful words ever spoken. The words that bring a man and woman together in a bond of eternity.',
        experciseCount: 95
      }, {
        id: 3,
        name: 'Beine',
        groupColor: '#41b5a9',
        description: 'My dermatologist is a big fan of night creams, but they make my sensitive skin break out and stain my pillowcase.',
        experciseCount: 103
      }, {
        id: 4,
        name: 'Brust',
        groupColor: '#3dc4f0',
        description: 'Lots of people are unaware of the fact that adult acne exists and they seem not to know how to treat adult acne.',
        experciseCount: 8
      }, {
        id: 5,
        name: 'Schulter',
        groupColor: '#57f03d',
        description: 'When people think of breast enhancement today, they think of surgery. In the 1950s, they may have thought of effect or push-up bras.',
        experciseCount: 74
      }, {
        id: 6,
        name: 'Rücken',
        groupColor: '#4145b5',
        description: 'Answer: Unless your complexion is very oily, your doctor is right: Nutrient-rich night creams are great for nourishing skin.',
        experciseCount: 18
      }, {
        id: 7,
        name: 'Kardio',
        groupColor: '#2d2d2d',
        description: 'Answer: Unless your complexion is very oily, your doctor is right: Nutrient-rich night creams are great for nourishing skin.',
        experciseCount: 18
      }]
    }
  },

  methods: {
    showSidebar: function () {
      this.$store.commit('setApplicationSidebar', true)
    }
  }
}
</script>
