<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>モンロー教書のはっぴょう(1823年</b></h6>
      <hr>
      <p class="context">アメリカ第五代大統領のモンローが大統領教書として発表。ウィーン体制下のヨーロッパ諸国のアメリカ大陸への干渉を排除し、合衆国の孤立主義の外交原則を表明した。
      </p>
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