<template>
  <div class="full">
    <ul class="down">
        <li><a class="subpage" href="/en/homeeng/">Home</a></li>
        <li><a class="subpage" href="/en/others/sitemap">Sitemap</a></li>
        <li class="statement">第23回全国中学高校WEBコンテスト参加作品</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Footereng",
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
    color: #ffa000;
    font-weight: 800;
}

.subpage:hover{
    color: #fff; 
}

.full{
    clear: both;
    position: relative;
    height: 200px;
}

.statement{
    color: #ffa000;
    font-weight: 800;
}

</style>
