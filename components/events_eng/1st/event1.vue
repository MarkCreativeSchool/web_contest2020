<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>2.1:  The introduction of Slaves in the US</b></h6>
      <hr>
      <p class="context">In 1619, a ship carrying black slaves from Africa landed in the US, which at the time, was a British territory. The black slaves were given harsh and rigorous workload. Later on, with the triangular slave (also known as the Atlantic Slave trade), the import of black slaves began to spread.</p>
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