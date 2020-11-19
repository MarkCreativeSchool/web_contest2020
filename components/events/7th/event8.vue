<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>冷戦の終結(1989年)</b></h6>
          <p class="double-context">東ヨーロッパ諸国で東欧革命により各地で共産主義黒っかが倒れていく。同年にベルリンの壁が崩壊された。さらに、ソ連ではアフガニスタン侵攻による財政破綻によってソ連の勢いはどんどん低下。ゴルバチョフ書記長によるペレストロイカによってどんどんソ連は改革していく。そしてアメリカとマルタ島で会談を行い冷戦が終結。その2年後にソ連は崩壊して冷戦の時代は完全に終わりを迎えた。</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event8.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>