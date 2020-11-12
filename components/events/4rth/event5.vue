<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>第一次ブルランの戦い(第一次マナッサスの戦い)(1861年7月)</b></h6>
      <hr>
      <p class="context">南北戦争中初の陸上戦闘で、バージニア州マナサス付近で行われた。トーマス・ジャクソン将軍が率いる連合国軍が合衆国軍をワシントンD.C.まで後退させた。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event5.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>