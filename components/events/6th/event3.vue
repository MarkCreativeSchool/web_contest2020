<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>ミッドウェー海戦(1942年)</b></h6>
          <p class="double-context">1942年6月5日から6月7日にミッドウェー島付近で起こった、日本海軍とアメリカ海軍の戦い。アメリカは「暗号解読」という技術で日本に立ち向かった。無線を傍受し、攻撃を事前に把握して迎撃準備を整えていった。さらに失敗も重なって、日本海軍は敗戦。主力空母4隻のほか多くの航空艦載機を失う大損害を負った。敗北した日本は、太平洋地域への枢軸国側の進軍が足止めされた。</p>
        </div>
        <div>
          <h6 class="double-title"><b>スターリングラードの戦い(1942年)</b></h6>
          <p class="double-context">ソ連軍とナチス・ドイツ軍および枢軸国軍との間に繰り広げられた。一時ドイツ軍は、スターリングラード市街地のおよそ90%を占領して優勢に立ったが、ソ連軍側が行った反撃作戦によって状況が逆転し、最終的にはソ連軍が勝利した。これにより、枢軸国軍が決定的な敗北を喫した。
            <br>
            <u>その結果</u><br>
            ・東部戦線におけるドイツの一連の敗北<br>
            ・連合国軍によるシチリアおよびイタリア侵攻<br>
            ・太平洋地域における連合国側の勝利<br>
            枢軸国側は主導権を維持することが困難となり、全ての戦線において、戦略的後退を余儀なくされた。<br>
</p>
        </div>
      </div>
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