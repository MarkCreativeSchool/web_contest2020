<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>トマス=ペインによる「コモン=センス」の発行(1776年1月)</b></h6>
      <hr>
      <p class="context">「われわれのの自由と権利を侵害するイギリスから独立を求めるのは常識だ」という主旨が、世論を独立へと動かす大きな原動力となっていった。
      </p>
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