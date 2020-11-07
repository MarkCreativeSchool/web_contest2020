<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <h6 class="title"><b>2-2 : 13の植民地誕生</b></h6>
      <hr>
      <p class="context">13の植民地支配はイギリスとフランスを中心に行われてきた。13の植民地ではプランテーション(大規模農業)が展開され、それが植民地の経済を支えてきた。しかし、18世紀に入り植民地とイギリス・フランスの対立が激化することになる。
      </p>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event2",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>
</style>