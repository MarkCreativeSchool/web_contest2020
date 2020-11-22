<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Marshall Plan (1947~1948)</b></h6>
      <hr>
      <p class="context">The United States has begun to send enormous economic support to make Britain and France, which were destroyed by World War II, into breakwaters for communism. With the Marshall Plan, the United States sought to strengthen ties with Western Europe such as Britain and France.</p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event3.vue",
  methods: {
    onClose() {
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>