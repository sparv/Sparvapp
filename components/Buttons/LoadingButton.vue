<template>
  <button v-if="!isSendingRequest" class="c-btn c-btn--primary" :class="{ 'f-w-100': fullWidth }">{{buttonText}}</button>
  <button v-else class="c-btn c-btn--primary f-w-100">
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    isSendingRequest: {
      type: Boolean,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    fullWidth: {
      type: Boolean
    }
  },
}
</script>

<style lang="scss" scoped>
.spinner {
  margin: 0 auto 0;
  width: 128px;
  text-align: center;
}

.spinner > div {
  display: inline-block;
  margin: 0 4px;
  width: 8px;
  height: 8px;
  background-color: #FFF;
  border-radius: 100%;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  animation-delay: -0.16s;
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
}
</style>
