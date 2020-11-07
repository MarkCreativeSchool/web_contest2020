<template>
  <div class="event-sub-modalt">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>印紙法(1765年)</b></h6>
      <hr>
      <p class="context">すべての印刷物にイギリスの印紙を貼るというもの。新聞やパンフレット、証書やトランプにも印紙が貼られた。その結果、植民地の人々の不満が激化した。
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