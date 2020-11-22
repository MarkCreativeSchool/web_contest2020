<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>ステッドマン砦の戦い(1865年)</b></h6>
          <p class="double-context">東部戦線「リッチモンド・ピーターズバーグの包囲戦」で疲労状態だったリー軍率いる連合国軍は最後の抵抗を見せ、ステッドマン砦に「ステッドマン砦の戦い」を仕掛け占拠。しかし、すぐさま反撃にあい勝利は合衆国軍へと逆転していった。</p>
        </div>
        <div>
          <h6 class="double-title"><b>アポマトックス・コートハウスの戦い(1865年, 4月)</b></h6>
          <p class="double-context">ヴァージニア州アポマトックスで行われた戦いでは連合国軍が敗北し、連合国軍側の北ヴァージニア軍が降伏。グラントはその降伏を受け入れ、事実上南北戦争は終結した。</p>
        </div>
        <div>
          <h6 class="double-title"><b>リンカーン暗殺 (1865, 4月)</b></h6>
          <p class="double-context">1865年4月15日に16代アメリカ大統領エイブラハム・リンカーンがアメリカ連合国のシンパで俳優のジョン・ウィルクス・ブースに暗殺された。その後、アンドリュー・ジョンソンが後をついだ。</p>
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