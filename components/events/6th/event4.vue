<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>戦争の終結(1945年)</b></h6>
          <p class="double-context">ヨーロッパにおいて第二次世界大戦は、ヨーロッパ連合国並びにソ連によるドイツ侵攻をもって事実上戦争は終結した。1945年5月8日にドイツが無条件降伏し、アジア・太平洋地域では、1945年7月26日、連合国側がポツダム宣言を発表する。しかし、日本がその勧告を拒否すると、アメリカは日本本土の広島には8月6日、長崎には8月9日に原子爆弾を投下。1945年8月15日、日本は降伏の意思を表明。これによって、アジア・太平洋地域においても連合国側の全面勝利が確実なものとなった。</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event4.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>