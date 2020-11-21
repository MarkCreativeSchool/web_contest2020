<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="event-modal">
      <div class="event-title">Chapter 2: Start of the Revolutionary War</div>
      <!--イベント-->
      <div class="event1" @click="onClick('event1')"></div>
      <div class="event2" @click="onClick('event2')"></div>
      <div class="event3" @click="onClick('event3')"></div>

      <div class="linebar"></div>
      <div class="year">
        <h6>
          <div class="timelineFirst">1775</div>
        </h6>
        <h6>
          <div class="timelineLast">1783</div>
        </h6>
      </div>
    </div>

    <event1 v-if="locationName==='event1'" @onClose="locationName=null"></event1>
    <event2 v-if="locationName==='event2'" @onClose="locationName=null"></event2>
    <event3 v-if="locationName==='event3'" @onClose="locationName=null"></event3>

  </div>
</template>

<script>
import event1 from "~/components/events_eng/2nd/event1"
import event2 from "~/components/events_eng/2nd/event2"
import event3 from "~/components/events_eng/2nd/event3"

export default {
  name: "line2.vue",
  components:{event1, event2, event3, },
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
  left: 55px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event2 {
  position: relative;
  top: calc(10% - 30px);
  left: 80px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event3{
  position: relative;
  top: calc(10% - 25px);
  left: 130px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event4{
  position: relative;
  top: calc(10% - 20px);
  left: 200px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event5{
  position: relative;
  top: calc(10% - 15px);
  left: 850px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event6{
  position: relative;
  top: calc(10% - 10px);
  left: 900px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
</style>