<template>
  <div class="f-mb7">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  props: {
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
  background-color: #FAC5CE;
  border: 1px solid #F68A9D;
  border-radius: 5px;
}

span {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #F03D5D;
  line-height: 16px;
  letter-spacing: 0.48px;
}
</style>
