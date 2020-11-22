<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>七年戦争(1756年~1763年)</b></h6>
      <hr>
      <p class="context">オーストリアで起こった戦争であり、後にアメリカ・インド・アフリカなど世界を巻き込む戦争へと発展していった。七年戦争に参戦することになったアメリカの中で、アメリカを舞台として起こった戦争をフレンチ・インディアン戦争(イギリス VS フランス)と呼ぶ。フレンチ・インディアン戦争で勝利したイギリスは、アメリカの植民地に対して過酷な重税をかけることになる。
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