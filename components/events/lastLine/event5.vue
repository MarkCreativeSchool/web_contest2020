<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>奴隷制度成立(1670年)</b></h6>
          <p class="double-context">ヴァージニアでは白人年季方向人が6000人、黒人奴隷が2000人であり、白人方向人は黒人奴隷の3倍近くいた。白人年季方向人は、購入費や年季中の諸経費、解放給付など費用がかかるため、労働力として不満足だった。それに対して、黒人奴隷は、最初の購入費は高かったが、黒人奴隷は一生涯奴隷であり、維持費も安かったため、労働力としては満足したものだった。18世紀後半の独立革命の頃には、植民地に輸入される白人年季奉公人はほとんどいなくなった。</p>
        </div>
      </div>
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