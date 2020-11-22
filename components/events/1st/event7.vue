<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>ボストン茶会事件(1773年)</b></h6>
      <hr>
      <p class="context">1773年に茶法が制定される。茶法とはイギリスが植民地の茶市場を独占しようとするもの。茶法制定の結果、アメリカ植民地側は不満を持ち、ボストン港に入港したイギリス船から茶葉を海に投げ捨てるという事件が起こる。イギリスはボストン港を閉鎖し、マサチューセッツ植民地の自治を制限するなど厳しく対応した。
      </p>
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