<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>Cuban Missile Crisis (1962)</b></h6>
      <hr>
      <p class="context">Military tensions between the United States and the Soviet Union increased and a nuclear war between them was once imminent, which is often referred to as the ”Cuban Missile Crisis." The Soviet Union supported Cuba and threatened the United States by deploying nuclear missiles against Cuba. At that time, the United States was ready to wage a nuclear war against the Soviet Union but the Soviet Union made a last-minute concession and escaped the crisis. Since then, the United States and the Soviet Union have gradually come to terms with each other.</p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event7.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>