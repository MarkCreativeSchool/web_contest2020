<template>
  <div class="event-sub-modal">
    <div class="sublayer" @click="onClose"></div>
    <div class="border">
      <div class="double">
        <div>
          <h6 class="double-title"><b>Battle of Midway (1942)</b></h6>
          <p class="double-context">The battle between the Japanese Navy and the United States Navy took place near Midway Island from June 5 to June 7, 1942. The United States confronted Japan with a technology called cryptanalysis, which is an analyzation information system. It intercepted the radio, grasped the attack in advance, and prepared for interception. Furthermore, due to repeated failures, the Japanese Navy lost the war. Japan suffered heavy damage, losing four main aircraft carriers and many carrier-based aircraft. The defeated Japan was stalled by the Axis advance into the Pacific region.</p>
        </div>
        <div>
          <h6 class="double-title"><b>Battle of Stalingrad (1942)</b></h6>
          <p class="double-context">The Battle of Stalingrad was a war by the Soviet Union, Nazi Germany, and Axis Powers. At one point, the Germans took the lead by occupying approximately 90% of Stalingrad's city, but the Soviet counterattack operation reversed the situation and eventually led to the Soviet Union’s victory. This caused the Axis forces to suffer a decisive defeat.<br>As a result…<br>- Germany's series of defeats on the Eastern Front<br>- Allied invasion of Sicily and Italy<br>- Allied victory in the Pacific Rim<br>- The Axis side had difficulty maintaining control and was forced to make a strategic retreat on all fronts.</p>
        </div>
      </div>
      <h6 class="xButton" @click="onClose">x</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "event3.vue",
  methods: {
    onClose() {
      this.$emit("onClose")
    }
  }
}
</script>

<style scoped>

</style>