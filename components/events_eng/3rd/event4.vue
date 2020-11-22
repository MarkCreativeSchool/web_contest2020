<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Monroe Doctrine(1823)</b></h6>
      <hr>
      <p class="context">James Monroe, the fifth US president announced a presidential textbook called the Monroe Doctrine. Eliminating the interference of European countries under the Vienna regime with the Americas, he announced the US foreign policy of isolationism.</p>
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