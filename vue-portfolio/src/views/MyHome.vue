<template class="mainTemplate">
  <div class="myHomeStyle">
    <p class="myNameIs">Hi, my name is</p>
    <h1>Bedada Bekele.</h1>
    <h2>{{ stateContainer.homeTitle }}</h2>
    <p class="detailedInfo">
        {{ stateContainer.homeDetail }}</p>
  </div>
</template>

<script setup lang="ts">
import { useStateContainer } from '@/stores/store';

const stateContainer=useStateContainer()
console.log( stateContainer.homeDetail)
</script>

<style  scoped>
.mainTemplate{
    display: flex;
    flex-direction: row;
    gap: 2px;
    
}
.myHomeStyle{
    padding-top:20px;
}
.myNameIs{
    color:#b0fc38;

}
h1{
    font-size: 45px;
}
h2{
    
    filter: brightness(80%);
    word-wrap: break-word;
  overflow-wrap: break-word;

}
.detailedInfo{
font-size: 20px;
filter:brightness(65%);
line-height:1.5;
float: right;
text-align: justify;
width:20em;


}
pre {
  white-space: pre-wrap;
  font-family: 'Times New Roman';
}
</style>