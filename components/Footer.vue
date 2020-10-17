<template>
  <div class="full">
    <ul class="down">
        <li><a class="subpage" href="/">Home</a></li>
        <li><a class="subpage">About</a></li>
        <li class="statement">第23回全国中学高校WEBコンテスト参加作品</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Footer",
}

</script>

<style>



.down{
    list-style: none; 
    color: #fff; 
    text-align: center; 
    background-image: linear-gradient(to bottom, #000000, #0f0f0f, #191919, #222222, #2b2b2b, #2b2b2b, #2b2b2b, #2b2b2b, #222222, #191919, #0f0f0f, #000000);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10.5rem;
    padding-top: 30px; 
}

li{
    padding-top: 5px; 
}

.subpage{
    color: #fff; 
}

.subpage:hover{
    color: #f6d405;
}

.full{
    clear: both;
    position: relative;
    height: 200px;
}

.statement{
    color: #f6d405;
}

</style>
