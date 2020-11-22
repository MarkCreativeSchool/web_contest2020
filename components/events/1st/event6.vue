<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>タウンゼンド諸法(1767年)</b></h6>
      <hr>
      <p class="context">課税を目的とした5つの法令をまとめたもの。ガラスや鉛にも課税された。これに対し植民地側は本国製品輸入協定で対抗。また、ドーターズ=オブ=リヴァティーの女性達はアメリカ製品愛用運動に立ち上がった。このように、反対運動が激化し、1770年に撤廃されることになる。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event6.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>
</style>