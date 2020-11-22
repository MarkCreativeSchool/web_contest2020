<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>Fourteen Points (1918 January)</b></h6>
          <p class="double-context">A truce was signed at Brest-Litovsk, which led to the ceasing of the Head Front Battle. The 28th president of the United States, President Woodrow Wilson announced that he would need to counter the "declaration on peace" and announce a new war objective and announced the fourteen principles. Principles mainly apply to ethnic self-determination, the establishment of the League of Nations, and the prohibition of secret diplomacy.</p>
        </div>
        <div>
          <h6 class="double-title"><b>Treaty of Brest-Litovsk (1918 March)</b></h6>
          <p class="double-context">In Brest-Litovsk, full-scale peace treaty negotiations began with Soviet-Russia and the Allied 4 countries representatives of Germany, Austria, Hungary, Bulgaria, and Ottoman Empire.</p>
        </div>
        <div>
          <h6 class="double-title"><b>End of World War 1 (1918 November)</b></h6>
          <p class="double-context">The Paris Peace Conference started on 1919, January 18, and ended on June 28th when the Treaty of Versailles was signed at the Palace of Versailles.
The representatives of the Allied Powers, including Japan, participated in the meeting, but the three countries of Britain, France, and the United States took the initiative. Germany, the defeated country, could not participate, as well as the Russian and Soviet governments since these two countries had just gone through a revolution.  World War I ended as a victory on the side of the Allied Powers (co-operating countries), but had a great impact beyond the victorious and defeated countries.
。</p>
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