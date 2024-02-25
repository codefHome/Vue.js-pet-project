<template>
 <b-row class="mt-sm-1 mt-lg-1">
      <b-col @mouseenter="mouseEnter" @mouseleave="mouseLeave" class="pt-sm-1 pt-lg-1" xsm="12" sm="12" md="4" lg="2">
   <a :href="projectUrl" target="_blank">
    <div class="projectContainer">
    <span>
<img :src="image" alt="project logo" class="imageStyle"/>
    </span>
    <div v-show="isHovered" class="ProjectInformation" >
     <a :href="ProjectSourceCode" target="_blank">
     <text> Check source code here</text>
    </a>
    <div class="technologiesStyle">
      <div v-for="(stack,index) in technologies?.split(',')" :key="index">
      <text >{{ stack }}</text>
    </div>
    </div>
  
    </div>
   </div>
  </a>
       
      </b-col>
   
    </b-row>
</template>
<script lang="ts" setup>
import { ref } from 'vue';



defineProps({
  image:{type:String},
  projectUrl:{type:String},
  ProjectSourceCode:{type:String},
  technologies: { type:  String }
})

const isHovered= ref(false)
const mouseEnter = () =>{
  isHovered.value=true
}
const mouseLeave = () =>{
  isHovered.value = false
}

</script>
<style scoped>
.projectContainer{
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
 align-items: center;
  border: thin dashed white;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height:fit-content;
  width: 460px;
  padding: 5px;
}
.projectContainer span {
  display: flex;
  justify-content: start;
 align-items: center;
margin-top: 10px;
width: 100%;
}
.projectContainer span h5{
  display: flex;
  font-size: 14px;
}
.videoStyle{
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 5px;
}
.imageStyle{
  display: flex;
 max-width: 100%;
 object-fit: cover;
}

.technologiesStyle{
  display: flex;
  flex-wrap: wrap;
}
.technologiesStyle text{
  display: flex;
  width:120px;
  font-size: 14px;
  font-weight: 400;
  color:black

}
.ProjectInformation{
  position:absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(173, 216, 230, 0.8)
}
.ProjectInformation a{
 text-decoration: none;
 font-size: 16px;
 color:blue;
 font-style: italic;
}
@media (width <= 600px) {
  .projectContainer{
  height:fit-content;
  width: fit-content;
  padding: 20px;
  border: thin dashed white;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #2d361c;
}
.projectContainer span{
  width: fit-content;
}

.imageStyle{
  max-width:100%;

}
.technologiesStyle text{
  display: flex;
  width:80px;
  font-size: 14px;
  font-weight: 400;
  color:black

}
}
</style>