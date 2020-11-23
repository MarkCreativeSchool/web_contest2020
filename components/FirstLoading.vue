<template>
    <div class = "first-loading-contener">
        <div class = "first-loading-content">
            <div class="first-loading-content-japanese">
                <br>このサイトで扱われているテーマは繊細なテーマであるため、
                <br>思想の偏りがないよう十分配慮しています。
            </div>
            <br>The themes dealt with on this site are delicate themes, so we take great care not to bias our ideas.
            <!-- <div class = "first-loading-button-wrapper">
                <button class="button is-primary" @click="close">OK</button>
            </div> -->
        </div>
    </div>
</template>

<script>


export default {
    name: "FirstLoading",
    mounted(){
        setTimeout(() => {
            this.close();
        },5000)
    },
    methods: {
        close(){
            setTimeout(() => {
            this.$emit("close");
            // window.setTimeout("close", "5")
            }, 500)
        }, 
    }
}
</script>

<style scoped>
*{
  font-family: Rockwell, "Courier New", Courier, Georgia,
                 Times, "Times New Roman", serif;
}

/* @keyframes typing {
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
} */

@keyframes fadeIn {
    0% {
        opacity: 0;
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
    z-index: 3000;
    background-image: url(/hand.png);
    background-size: cover;
    background-position: center center;
}

.first-loading-content{
    /* animation: blink 1.5s ease-in-out alternate;
    animation-iteration-count: 10; */
    animation-name: fadeIn;
    animation-duration: 2.5s;
    animation-timing-function: linear;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: 70;
    color: white;
    font-size: 25px;
}

.first-loading-content-japanese{
    position: relative;
    text-align: center;
    font-size: 40px;
}

</style>