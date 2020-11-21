<template>
  <div>
      <div class="layer" @click="onClose"></div>
      <div class="event-modal">
        <div class="event-title">Chapter 3: History after the Revolutionary War</div>
        <!--イベント-->
        <div class="event1" @click="onClick('event1')"></div>

        <div class="linebar"></div>
        <div class="year">
          <h6>
            <div class="timelineFirst">1800</div>
          </h6>
          <h6>
            <div class="timelineLast">1823</div>
          </h6>
        </div>
      </div>

    <event1 v-if="locationName==='event1'" @onClose="locationName=null"></event1>

  </div>
</template>

<script>
import event1 from "~/components/events_eng/3rd/event1"

export default {
  name: "line3.vue",
  components:{event1, },
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
  left: 250px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event3{
  position:relative;
  top: calc(10% - 15px);
  left: 600px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
.event-modal .event4{
  position:relative;
  top: calc(10% - 5px);
  left: 910px;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 7px;
}
</style>