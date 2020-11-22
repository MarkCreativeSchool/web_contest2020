<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>1860: Abraham Lincoln is elected for president.</b></h6>
      <hr>
      <p class="context">He spoke out against slavery in the US. With this election, the American Civil War ignited. The federal army gave a warning to Fort Sumner located in Charleston, South Carolina which was under the Union. </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>

</template>

<script>
export default {
  name: "event3.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>