<template>
  <div class="full">
    <ul class="down">
        <li><a class="subpage" href="/">Home</a></li>
        <li><a class="subpage">About</a></li>
        <li><a class="subpage">Contact</a></li>
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
    background-color: #000000; 
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
</style>
