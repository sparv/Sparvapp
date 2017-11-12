<template>
  <div class="c-table-flow__item-data f-mb4 f-mb0-m f-ph6-m f-flex-auto">
    <h4 class="c-table-flow__item-title">{{label}}</h4>
    <span class="c-table-flow__item-text">{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    text: {
      type: [String, Number],
      required: true
    }
  }
};
</script>
