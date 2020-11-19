<template>
  <div>
    <div class="layer" @click="onClose"></div>
    <div class="event-modal">
      <div class="event-title">第9章：21世期のアメリカ</div>
      <!--イベント-->
      <div class="event1" @click="onClick('event1')"></div>


      <div class="linebar"></div>
      <div class="year">
          <h6>
            <div class="timelineFirst">2001</div>
          </h6>
          <h6>
            <div class="timelineLast">2009</div>
          </h6>
      </div>
    </div>
    <event1 v-if="locationName==='event1'" @onClose="locationName=null"></event1>
  </div>
</template>

<script>
import event1 from "~/components/events/8th/event1"

export default {
  name: "line8.vue",
  components:{},
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
</style>