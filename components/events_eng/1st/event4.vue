<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>The Sugar Act(1764)</b></h6>
      <hr>
      <p class="context">An act that imposed that for 1 gallon of molasses, 3 pences of tax would be charged. Compared to the Molasses Act 1733, the tax charge decreased, but the tax became applicable to products such as wine, coffee, and clothing.</p>
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