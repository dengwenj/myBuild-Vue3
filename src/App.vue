<script setup lang="ts">
import logo from '@/assets/logo.png'
import './App.css'
</script>

<template>
  <div class='app'>
    <img :src="logo" alt="logo" />
    <div class='wrapper'>
      Welcome to the vue app created by the CLI developed by Deng Wenjie
    </div>
    <div class='wrapper'>
      If you want to know me this is my github:
      <a 
        class='info'
        href="https://github.com/dengwenj"
        target='_blank' 
        rel="noreferrer"
      >
        dengwenj
      </a>
    </div>
    <div class='wrapper'>
      我是中国人🇨🇳，如果你也是，我叫邓文杰 (dèng wén jié). 你也可以在
      <a
        class='info' 
        href="https://weibo.com/u/6575004852" 
        target='_blank' 
        rel="noreferrer"
      >
        微博
      </a> 和
      <a
        class='info' 
        href="https://www.zhihu.com/people/ni-shuo-bu-zou-de-98" 
        target='_blank' 
        rel='noreferrer'
      >
        知乎
      </a> 上找到我
    </div>
    <div class="wrapper">这是我的简介: <a href="http://dengwj.vip/" target="_blank">简介</a></div>
  </div>
</template>

<style scoped lang="less">

</style>
