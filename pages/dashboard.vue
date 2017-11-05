<template>
  <div></div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  layout: "application",
  middleware: `validate`,

  mounted: function() {
    this.$store.commit("setApplicationTitle", "Dashboard");
    this.$store.commit("setMobileAppBarLeftAction", false);
    this.$store.commit("setMobileAppBarRightAction", false);
  }
};
</script>
