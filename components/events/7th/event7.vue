<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>キューバ危機(1962年)</b></h6>
          <p class="double-context">アメリカとソビエト連邦間の軍事的緊張が高まり、一時は核戦争間近とまで言われた状態を「キューバ危機」という。ソ連はキューバを支援し、キューバに対して核ミサイルを配置してアメリカを威嚇。アメリカはソ連に対して核戦争を行うことも構わないという声明を出して一時期世界中で緊張が走ったが、ソ連が土壇場で譲歩し、危機は免れた。これ以降アメリカとソ連は徐々に歩み寄りを見せていく。</p>
        </div>
      </div>
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