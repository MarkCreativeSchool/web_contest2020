<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>イラク戦争(2003年)</b></h6>
          <p class="double-context">当時大統領だったジョージ・W・ブッシュ政権下のアメリカ合衆国が主体となった有志連合（イギリス、オーストラリア、ポーランドなど）が、2003年3月20日にイラクへ侵攻したことで始まった軍事的介入。1991年に起こった湾岸戦争の停戦条件として、国連安全保障理事会はイラクへ「大量破壊兵器の破壊」を義務付けた。しかし、イラク側が協力的な態度を示してこなかったために、そのイラクを主導していた当時の最高権力者勘・フセイン大統領を打倒する目的で開始された。2003年4月9日にはバグダッドが暴落してフセイン大統領が逃亡したため、イラク政権は崩壊。2003年12月13日にはサダム・フセインが逮捕された。そのため、イラク国内の治安悪化によってテロ活動が活発化。アメリカ大統領バラック・オバマが「戦闘終結宣言」と「イラクの自由戦線の終了宣言」を出した2011年12月15日まで、有志連合軍はイラクへ駐留することになった。</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event2.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>