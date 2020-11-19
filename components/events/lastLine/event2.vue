<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>バス・ボイコット運動(1955年)</b></h6>
          <p class="double-context">駅の待合室や便所、水飲み場や公園などの公共施設には「白人専用」「黒人専用」と書かれた表示板が設置され、黒人は白人と同じものを使えないようになった。
1955年12月1日、黒人女性のローザ・パークスは仕事帰りにバスを利用し、白人専用座席のすぐ後ろに座った。そこへ、白人が乗車し、バスの運転手はパークスに席を譲るよう命令した。要求に応じなかったパークスは逮捕されてしまった。
</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event2.vue",
  methods:{
    onClose(){
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>