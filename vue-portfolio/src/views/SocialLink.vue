<template>
  <ul>
    <li v-for="info in linkInfo" :key="info.icon">
        <a :href="info.url" target="_black">  <img alt="Social Media Icon" :src="info.icon" width="20" height="20" /></a> 
    </li>
  </ul>
</template>

<script setup lang="ts">
import twitter from '@/assets/twitter.gif'
import github from '@/assets/github.svg'
import linkedin from '@/assets/linkedin.svg'

const linkInfo=[
  {
    icon:twitter,
    url:"https://vuejs.org/guide/introduction.html"
  },
  {
    icon:github,
    url:"https://github.com/codefHome"
  },
  {
    icon:linkedin,
    url:"https://nodejs.org/en/docs"
  }
]
</script>




<style  scoped>
li{
    list-style-type: none;
    
}
ul{
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
</style>