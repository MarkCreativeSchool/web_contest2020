<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>War of 1812(1812)</b></h6>
      <hr>
      <p class="context">In 1812, a North American Colonial War between British Indian colonies of Canadian Indians and America occurred. With the end of the war, nationalism within America increased, and the American economy and industry became independent.</p>
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