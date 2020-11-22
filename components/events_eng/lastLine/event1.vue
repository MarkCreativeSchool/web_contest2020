<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Introduction of Slaves in the US (1619)</b></h6>
      <hr>
      <p class="context">Twenty black Africans were sold to Jamestown, Virginia in 1619. It is said to be the first slave trade to occurr in the US. Slave trade flourished in the 18th century, and many black people were brought to their hometowns.</p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event1.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>