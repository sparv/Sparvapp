<template>
  <div class="c-card__header--login f-mb6 f-mb8-m">
    <h2 class="display-2 f-mb5 f-mb6-m">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
