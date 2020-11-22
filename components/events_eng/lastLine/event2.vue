<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Establishment of Slavery (1670)</b></h6>
      <hr>
      <p class="context">In Virginia, compared to approximately 2000 black slaves, there were approximately 6000 white indentured servants who resided. Indentured servants were dissatisfied with the labor force due to the cost of purchasing, various expenses during the year, and release benefits. Black slaves, on the other hand, had a high initial purchase cost, but they were lifelong slaves and the maintenance cost was low, so the labor force was satisfactory. By the time of the Revolutionary War in the late 18th century, few white annual servants were imported into the colonies.</p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event2.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>