<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>ポーランド侵攻(1939年)</b></h6>
          <p class="double-context">ドイツによるポーランド侵攻をうけて、フランスとイギリスがドイツに宣戦布告したことで開戦した。1939年後半から1941年初頭まで、一連の軍事行為と条約締結を経て、ドイツはヨーロッパ大陸の大部分を征服あるいは支配下に置き、イタリアおよび枢軸国としての同盟関係を結ぶ。一方、北アフリカおよび東アフリカでの軍事駆動開始につづき、1940年半ばにフランスが敗れると、軍事衝突は主にヨーロッパの枢軸国とイギリスとの争いとして続き、長期にわたる大西洋の戦いへ続いていった。そして1941年6月22日、ヨーロッパの枢軸国がソ連侵攻を開始し、人類史上最大の戦争の舞台が整う。</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event1.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>