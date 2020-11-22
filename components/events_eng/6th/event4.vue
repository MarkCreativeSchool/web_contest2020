<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>End of War(1945)</b></h6>
      <hr>
      <p class="context">In Europe, World War II brought together the war with the European Lotus Valley and the Soviet Union's invasion of Germany. Germany surrendered unconditionally on May 8, 1945, and in the Asia-Pacific region, the Allies issued the Potsdam Declaration (Statement that called for Japan surrendering) on July 26, 1945. However, Japan rejected the recommendation, which caused the United States to drop an atomic bomb on Hiroshima on the mainland of Japan on August 6 and on Nagasaki on August 9. On August 15, 1945, Japan announced its intention to surrender. This ensured a total victory for the Allies in the Asia-Pacific region as well.</p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event4.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>