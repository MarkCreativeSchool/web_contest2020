<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>ベトナム戦争(1955年~1975年)</b></h6>
          <p class="double-context">「宣戦布告なき戦争」と呼ばれている。当時北と南に分かれていたベトナムで起きた内戦だが、主な内容としては「北ベトナム軍」と、「南ベトナム軍・アメリカ軍」の戦いだった。1964年に北ベトナムがトンキン湾事件を起こすとアメリカがベトナム戦争に介入し始め北ベトナムと戦争状態となる。アメリカは北ベトナムに対して北爆行なったが、北ベトナムのゲリラ戦に苦戦。最終的にはアメリカは北ベトナムから撤退し、1975年に北ベトナムの勝利で終わった。</p>
        </div>
      </div>
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