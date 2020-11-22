<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>奴隷解放宣言(1861年)</b></h6>
          <p class="double-context">1861年に奴隷制を否定する北部と、奴隷制を肯定する南部で対立が起こった(南北戦争)。この戦争は4年間続き、北部の勝利に終わった。その後、奴隷解放宣言が出され、南部の州で奴隷の扱いを受けていた黒人が解放されたように見えたが、南部では依然として黒人に対する軽蔑が続いた。</p>
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