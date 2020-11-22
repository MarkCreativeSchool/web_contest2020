<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>North Atlantic Treaty Organization[NATO] (1949 April)</b></h6>
      <hr>
      <p class="context">NATO formed a military alliance against the Soviet Union and tried to counter them. On the other hand, the Soviet Union also established COMECON, an economic cooperation system that supports communist countries in Eastern Europe to counter the United States. Furthermore, they created the Warsaw Pact and opposed the United States centered on communist countries.</p>
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