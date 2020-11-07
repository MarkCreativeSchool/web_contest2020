<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>2-1: 奴隷輸入</b></h6>
      <hr>
      <p class="context">アフリカから黒人奴隷を載せた船が始めてイギリス領アメリカに到着。黒人奴隷たちは、過酷な労働を強いられた。その後、イギリスによる三角貿易によって黒人奴隷の輸入は広がっていった。
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