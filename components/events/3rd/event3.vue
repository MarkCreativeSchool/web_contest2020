<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>米英戦争(1812年)</b></h6>
      <hr>
      <p class="context">イギリス・イギリス植民地のカナダ・インディアン諸部族とアメリカ合衆国で起きた北米植民地戦争。戦争の結果、アメリカのナショナリズムが高まり、さらにアメリカの産業・経済が自立を迎えた。
      </p>
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