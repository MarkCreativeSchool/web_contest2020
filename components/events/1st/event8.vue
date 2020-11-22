<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>強圧的諸条令(1774年)</b></h6>
      <hr>
      <p class="context">イギリスが定めた条令で「耐え難き条令(Coercive Acts)」とも呼ばれる。これらのイギリス本国の制裁措置に対して植民地側は1774年9月、フィラデルフィアで大陸会議を招集し、イギリス本国との通商を拒絶することを決議し、本国と植民地の対立は深くなった。1775年4月、武力衝突が起きてついにアメリカ独立戦争へと発展していく。
      </p>
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