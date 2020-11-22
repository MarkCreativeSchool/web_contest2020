<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>October Revolution (1917 November)</b></h6>
      <hr>
      <p class="context">The Soviet government, led by Vladimir Lenin, announced a "decree on peace." This decree principled no annexation, no compensation, and self-determination.</p>
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