<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>アメリカ独立宣言(1776年7月)</b></h6>
      <hr>
      <p class="context">トマス=ジェファソンが原案を起草しアメリカの自由・平等など基本的人権を認め、イギリスに対抗する革命権を認めることを宣言。
      <br>[理念]
      <br>1.基本的人権
      　<br>全ての人は平等で、生命や自由、幸福追求の権利をもつ
      <br>2.革命権
      　<br>シエフによる権利の不当な行使に対して人民が対抗する権利をもつ
      <br>3.人民主権
      　<br>国を統治する権力の源泉は国民にある
      <br>→しかし、人権は黒人に適用されず、奴隷制は残り続けた

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