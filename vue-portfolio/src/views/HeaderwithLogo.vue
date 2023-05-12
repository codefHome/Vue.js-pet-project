<template>
  <div class="logo">
    <a href="#home">
<img alt="Logo" src="@/assets/mylogo.svg" width="50" height="60"/>
  </a>
  </div>
  <div v-if="!isMinWidth" class="header">
<nav>
  <ul>
    <li>
      <a href="#about">About</a>
    </li>
 <li>
  <a href="#experience">Experience</a>
 </li> 
 <li>
  <a href="#work">Work</a>
 </li>
 <li>
  <a href="#contact">Contact</a>
 </li>
 <div class="buttonDiv">
  <a href="#"> Resume </a>
 </div>
  
  </ul>
 
</nav>
</div>
<div class="modalStyle" v-if="isMinWidth">
  <CollabseIcon/>
</div>
</template>

<script setup lang="ts">
import {ref,computed} from 'vue'
import CollabseIcon from './CollabseIcon.vue';
const minWidth=ref(window.innerWidth)
window.addEventListener('resize', () => {
  minWidth.value = window.innerWidth;
});
let isMinWidth=computed(()=>{
 return minWidth.value <= 800 ? true : false 
})
</script>

<style scoped>
.header{
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;

}
.header nav ul li a{
  text-decoration: none;
  margin:15px;
  color:blueviolet
}
.header nav ul li a:hover{
  color:White;
  font-size:30px;
}
.logo{
  display: flex;
  justify-content: flex-start;
 background-color: white;
}
.logo:hover{
  width:60px;
  height: 60px;
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

.buttonDiv a {
  color:white;
  border: 1px solid black;
  text-decoration: none;
  padding:3px;
  font-size:20px;
  border-radius:6px 0 5px 0
}
.buttonDiv a:hover{
  font-size:25px;
 box-shadow: 4px 4px black
}

</style>