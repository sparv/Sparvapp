<template>
  <div class="c-table-flow__item-data f-mb4 f-mb0-m f-ph6-m">
    <h4 class="c-table-flow__item-title">{{label}}</h4>
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  props: ['label', 'text'],
}
</script>

<style lang="scss" scoped>
  .c-table-flow__item-data {
    width: 50%;
    @media (min-width: 860px) {
      flex: 1 1 0;
      width: auto;
    }
  }

  .c-table-flow__item-title {
    margin: 0 0 2px;
    font-size: 12px;
	  font-weight: bold;
	  line-height: 1.29;
	  letter-spacing: 0.7px;
    color: #727375;
    @media (min-width: 860px) {
      font-size: 14px;
    }
  }
</style>

