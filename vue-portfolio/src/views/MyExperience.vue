
<template>
 <b-container >
   <b-row class="experienceSection1">
    <b-col><h1>Where I've Worked</h1></b-col> 
     <b-col><CircleList/></b-col>
     <b-col>
      <span> 
     <hr/>
      </span>
     </b-col>
    
    </b-row>
    <b-row class="experienceContainer">
<b-col class="leftSectionStyle" >
   <div class="verticalLine"> <span>
      <button @click="handleClick('excellerent')" :style="{ 'border-left': borderLeft('excellerent'), color:fontColor('excellerent')}" class="buttonStyle" >Execellerent Solution</button >
      <button  @click="handleClick('haramaya')" :style="{ 'border-left':borderLeft('haramaya'), color:fontColor('haramaya')}" class="buttonStyle" >Haramaya University</button>
      <button  @click="handleClick('ambo')" :style="{ 'border-left':borderLeft('ambo'),color:fontColor('ambo')}" class="buttonStyle"  >Ambo University</button>
      </span></div>
   
</b-col>
<b-col class="excellerentSectionStyle" v-show="activeTab==='excellerent'">
  <h1 class="workTitle">Software Engineer <span> @ Excellerent Solution</span></h1>
  <p>June 2021 - present</p>
  <ul >
   <template v-for="list in stateContainer.experience">
   <li v-for ="item in list.excellerent" :key="item.id">
    {{ item.content }}
   </li>
   </template>
  
   
  </ul>
</b-col>
<b-col  v-show="activeTab==='haramaya'">
   <h1 class="workTitle">Software Engineer <span> @ Haramaya University</span></h1>
  <p>January 2018 - May 2021</p>
  <ul >
   <template v-for="list in stateContainer.experience">
   <li v-for ="item in list.haramaya" :key="item.id">
    {{ item.content }}
   </li>
   </template>
  
   
  </ul>
</b-col>
<b-col  v-show="activeTab==='ambo'">
   <h1 class="workTitle">Software Engineer <span> @ Ambo University</span></h1>
  <p>August 2016 - October 2017</p>
  <ul >
   <template v-for="list in stateContainer.experience">
   <li v-for ="item in list.ambo" :key="item.id">
    {{ item.content }}
   </li>
   </template>
  
   
  </ul>
</b-col>
    </b-row>

 </b-container>
    

</template>
<script setup lang="ts">
import { useStateContainer } from '@/stores/store';
import CircleList from './CircleList.vue';
import {ref} from 'vue'
const stateContainer=useStateContainer()
const activeTab=ref('excellerent')
function borderLeft(value:string){
   return activeTab.value===value ? '3px solid #b0fc38' : '' 
}
function fontColor(value:string){
   return activeTab.value===value ? '#b0fc38' : 'white' 
}
 function handleClick(value:string){
   activeTab.value=value
 }
console.log('active tab',activeTab.value)
</script>
<style scoped>
.experienceContainer{
   display:grid;
   grid-template-columns: 2fr 5fr;
}
.experienceSection1{
   display:grid;
   grid-template-columns: 2fr 2fr 4fr;
}
.experienceSection1 span{
   place-content: center;
}
.verticalLine{
   position:absolute;
   top:1550px;
   left:310px;
   border-left: 1px solid gray;
   height:175px;
   padding-top:-10px;
}
span{
   display:flex;
   flex-direction: column;
   row-gap: 10px;
   margin-top:0px;
}
.buttonStyle{
   margin-left:-1.5px;
   background-color: #0a192f;
   color:white;
   background:none;
   border:none;
   font-size:15px;
   width:100px;
   padding:8px;
   
   
} 
hr{
   width:500px;
}

/* .buttonStyle[data-active="true"]{
border-left: 3px solid #b0fc38;
} */
button:hover{
   background-color:lightslategrey;
   color:#b0fc38;
}
.leftSectionStyle{
   display:gid;
   grid-template-columns: 1fr 2fr;
}
h1 span{
   color:#b0fc38;
   padding-left:5px;
}

.workTitle{
   display:flex;
   flex-direction: row;
   
}
p{
   font-size:15px;
}
.experienceContainer ul li::before{
   content: '';
  display:inline-block;
  width: 0;
  height: 0;
  margin-right: 0.2em;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #b0fc38;
 
}
.experienceContainer ul li{
   font-size:20px;
   font-family: 'Times New Roman';
   text-align: left;
   text-indent: -0.9em;
   line-height: 1.5em;

}
.experienceContainer ul{
 display: flex;
 flex-direction: column;
 row-gap: 8px;
 list-style-type: none;
}


</style>