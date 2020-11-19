<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>バラク・オバマ大統領就任(2009年)</b></h6>
          <p class="double-context">第44代大統領となった民主党のバラク・オバマは初の黒人大統領として、世界で話題となった。これをきっかけに、南部出身者もアイルランド人も黒人も、アメリカでは長く差別されてきたが、そのような生活も解放されつつあるようだ。</p>
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