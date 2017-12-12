<template>
  <div class="f-mb7">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: String
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  padding: 8px 12px;
  background-color: #C0E8D8;
  border: 1px solid #81D0B1;
  border-radius: 5px;
}

span {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #2DB27D;
  line-height: 16px;
  letter-spacing: 0.48px;
}
</style>
