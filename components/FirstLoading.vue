<template>
    <div class = "first-loading-contener">
        <div class = "first-loading-content">
            このサイトで扱われているテーマは繊細なテーマであるため、思想の偏りがないよう十分配慮しています。
            <!-- <div class = "first-loading-button-wrapper">
                <button class="button is-primary" @click="close">OK</button>
            </div> -->
        </div>
    </div>
</template>

<script>


export default {
    name: "FirstLoading",
    methods: {
        close(){
            this.$emit("close");
            // window.setTimeout("close", "5")
        }, 
    }
}
</script>

<style scoped>

@keyframes typing {
  0% {
    width: 0;
  }
  100% { 
    width:15em;
  }
}

@keyframes cursor {
  0% {
    border-color: transparent;
  }
  50% {
    border-color: #000;
  }
  100% {
    border-color: transparent;
  }
}

@keyframes fadein {
from {
    opacity: 0;
    transform: translateY(20px);
}
to {
    opacity: 1;
    transform: translateY(0);
}
}

@keyframes blink {
    0% {
        opacity: 0.3;
    }
    100%{
        opacity: 1;
    }
}


.first-loading-contener{
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1000;
    background-color: white;
}

.first-loading-content{
    /* font-size: 20px;
    font-weight: bold;
    animation-name: fadein;
    animation-duration: 2s; */
    animation: blink 1s ease-in-out alternate;
    animation-iteration-count: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: 70;
    color: black;
    /* width: 15em;
    border-right: 0.1em solid #000;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 1.5s steps(15, end), cursor 0.8s step-end infinite; */
}

/* .first-loading-button-wrapper{
    margin-top: 10px;
} */

</style>