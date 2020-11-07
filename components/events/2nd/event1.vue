<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>レキシントン・コンコードの戦い(1775年)</b></h6>
      <hr>
      <p class="context">コンコードに貯蔵されていた植民地側の軍需物資を押収に向かったイギリス軍と、植民地側の民兵がレキシントンで衝突した戦争。イギリス軍はコンコードでの押収には成功したが、帰路の途中で植民地側の待ち伏せにあい、244名が死傷した。
      </p>
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