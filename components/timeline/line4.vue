<template>
  <div>
    <div class="layer" @click="onClose"></div>
      <div class="event-modal">
        <div class="event-title">第4章:南北戦争</div>
        <!--イベント-->
        <div class="event1" @click="onClick('event1')"></div>
        <div class="event2" @click="onClick('event2')"></div>

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
    <event2 v-if="locationName==='event2'" @onClose="locationName=null"></event2>
  </div>
</template>

<script>
import event1 from "~/components/events/4rth/event1"
import event2 from "~/components/events/4rth/event2"

export default {
  name: "line4.vue",
  components:{event1, event2, },
  data(){
    return{
      locationName:null
    }
  },
  methods:{
    onClose(){
      this.$emit("onClose")
    },
    onClick(locationName2){
      this.locationName=locationName2
    }
  }
}
</script>

<style scoped>
.event-modal .event1{
  position:relative;
  top: calc(10% - 35px);
  left: 65px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event2{
  position:relative;
  top: calc(10% - 25px);
  left:500px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
</style>