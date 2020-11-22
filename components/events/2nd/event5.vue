<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>ヨークタウンの戦い(1781年9月〜10月)</b></h6>
      <hr>
      <p class="context">ヴァージニア植民地東岸のイギリス国最終拠点であるヨークタウンで、米仏連合軍がチャールズ・コーンウォリス率いるイギリス軍約7,000人を包囲、降伏させた。この戦いによって、アメリカ独立戦争における植民地軍の勝利は確定し、独立戦争は事実上の終結を見た。
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