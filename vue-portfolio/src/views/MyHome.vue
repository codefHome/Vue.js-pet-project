<template class="mainTemplate">
  <b-container class="myHomeStyle">
  <b-row  >
  <b-col cols="12">
      <p class="myNameIs">Hi, my name is</p>
      <h1>Bedada Bekele.</h1>
    <h2>{{ stateContainer.homeTitle }}</h2>
    </b-col>
    <b-col class="detailedInfo" sm="12" md="8" lg="5" exl="6" offset-sm="0" offset-md="1" offset-lg="1">
    <p >
        {{ stateContainer.homeDetail }}</p>
    </b-col>
  </b-row>
  <b-row >
    <RecAndCircleSvg/>
  </b-row>
   
  </b-container>
</template>

<script setup lang="ts">
import { useStateContainer } from '@/stores/store';
import RecAndCircleSvg from './RecAndCircleSvg.vue';

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
/* float: right; */
text-align: justify;
/* width:25em; */
margin-top: 2em;
line-height: 2em;

}

</style>