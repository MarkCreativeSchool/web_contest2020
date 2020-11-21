<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Townshend acts(1767)</b></h6>
      <hr>
      <p class="context">An Act holding 5 laws that involved taxation amongst certain objects. Objects that were taxed include glass and lead. As a response, the daughters of liberty, a female association got up to address product patronage. Like this, several opposition movements started to intensify, and in 1770, the Act was abolished. </p>
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