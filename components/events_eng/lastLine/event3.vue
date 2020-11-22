<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Emancipation Proclamation (1861)</b></h6>
      <hr>
      <p class="context">In 1861, a conflict broke out in the north, which denied slavery, and in the south, which affirmed slavery (Civil War). The war lasted four years and ended in a victory in the north. After that, the Emancipation Proclamation was issued, and the slaves in the southern states were released, though in some places, the slaves continued to be painfully contempted.</p>
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