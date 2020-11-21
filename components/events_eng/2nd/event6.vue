<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>End of the Revolutionary War(1783 September)</b></h6>
      <hr>
      <p class="context">The Treaty of Paris that was signed in 1783 marked the end of the American Revolutionary war. Under the peace treaty, Britain officially recognised the 13 colonies as the United States, and surrendered Louisiana to the United States.</p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event6.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>