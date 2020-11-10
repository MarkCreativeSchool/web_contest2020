<template>
  <div>
    <div class="layer" @click="onClose"></div>
      <div class="event-modal">
        <div class="event-title">第2章:独立戦争の開幕</div>
        <!--イベント-->
        <div class="event1" @click="onClick('event1')"></div>

        <div class="linebar"></div>
        <div class="year">
          <h6>
            <div class="timelineFirst">1854</div>
          </h6>
          <h6>
            <div class="timelineLast">1865</div>
          </h6>
        </div>
      </div>
    <event1 v-if="locationName==='event1'" @onClose="locationName=null"></event1>
  </div>
</template>

<script>
export default {
  name: "line4.vue"
}
</script>

<style scoped>

</style>