<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>アメリカ同時多発テロ(2001年9月11日)</b></h6>
          <p class="double-context">2001年9月11日、テロリストにハイジャックされた2機の民間機が、ニューヨークのマンハッタンにある世界貿易センターのツインタワービルに立て続けに激突し、ビルが倒壊した。さらに、別にハイジャックされた航空機は、アメリカ防衛の中枢ペンタゴンに激突し、多くの死傷者を出した事件。</p>
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