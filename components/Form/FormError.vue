<template>
  <div class="f-mb7 c-form__error">
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
.c-form__error {
  padding: 8px 12px;
  background-color: #FAC5CE;
  border: 1px solid red;
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
