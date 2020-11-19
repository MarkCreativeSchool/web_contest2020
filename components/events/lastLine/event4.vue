<template>
    <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>ワシントン大行進(1963年8月28日)</b></h6>
          <p class="double-context">公民権運動が最盛期を迎えていた1963年8月28日、首都ワシントンに25万人のものが「1963年までに完全解放を！」との標語を元に集まった。行進に参加した25万人のうち、白人は6万人もいた。行進の最後には王牧師の”I have a dream.”の演説が行われた。</p>
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