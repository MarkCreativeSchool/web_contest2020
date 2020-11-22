<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>End of Cold War (1989)</b></h6>
      <hr>
      <p class="context">In Eastern European countries, the Communist blacks are falling down in various places due to the Revolution of Eastern Europe. In the same year, the Berlin Wall collapsed. Furthermore, in the Soviet Union, the momentum of the Soviet Union steadily declined due to the financial collapse caused by the invasion of Afghanistan. The Soviet Union continued to reform with perestroika (Political Movement) by General Secretary Gorbachev. Then, a meeting was held between the United States and Malta, and the Cold War ended. Two years later, the Soviet Union collapsed and the Cold War era came to an end.</p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event8.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>