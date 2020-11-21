<template>
  <div class="full">
    <ul class="down_jp">
        <li><a class="subpage_jp" href="/">ホーム</a></li>
        <li><a class="subpage_jp" href="others/sitemap">サイトマップ</a></li>
        <li class="statement_jp">第23回全国中学高校WEBコンテスト参加作品</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Footer",
}

</script>

<style>



.down_jp{
    list-style: none; 
    color: #fff; 
    text-align: center; 
    /* background-image: linear-gradient(to bottom, #000000, #0f0f0f, #191919, #222222, #2b2b2b, #2b2b2b, #2b2b2b, #2b2b2b, #222222, #191919, #0f0f0f, #000000); */
    background-color: black;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 9rem;
    margin: 0 auto;
   padding-top: 20px;
}


.subpage_jp{
    color: #ffa000;
    font-weight: 800;
}

.subpage_jp:hover{
    color: #fff; 
}

.full{
    clear: both;
    position: relative;
    height: 200px;
}

.statement_jp{
    color: #ffa000;
    font-weight: 800;
}

</style>
