<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Haitian Revolution’s influence(1804)</b></h6>
      <hr>
      <p class="context">Napoleon was planning to build a colonial empire across the Gulf of Mexico, specializing Haiti for sugar production while additionally stocking grains in Louisiana. However, in 1798, the plan was dismissed due to the intensification of the independence movement in Haiti. Napoleon decided to let go of Louisiana soon after purchasing it whilst the Haiti movement of independence intensified (In 1804, Haiti succeeded in their revolution and the first Black Republic Country).</p>
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