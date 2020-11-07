<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>砂糖法(1764年)</b></h6>
      <hr>
      <p class="context">糖蜜1ガロンあたり3ペンスの税が課されるもの。前身にあたる「糖蜜法」よりも金額的には少なくなったものの、対象がワインやコーヒー、衣類などにも広げられた。
      </p>
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