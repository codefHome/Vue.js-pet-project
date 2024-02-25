<template>
  <b-container>
    <b-row >
       <b-col   >
        <a href="#home">
    <img alt="Logo" src="@/assets/mylogo.svg" width="50" height="60"/>
      </a>
      </b-col>
      <b-col  v-if="!isMinWidth" class="header">
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
    </b-col>
<b-col    v-if="isMinWidth"  class="modalStyle">
  <CollabseIcon/>
</b-col>
    </b-row>
  
  </b-container>
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
  display:flex;
  justify-content: flex-end;
}
.header nav ul li a{
  text-decoration: none;
  margin:15px;
  color:blueviolet;
 
}
.header nav ul li a:hover{
  color:White;
  font-size:30px;
}
.logo{
}
.logo img{
  background-color: white;
  /* margin-left:-50px; */
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
  border: 1px solid blue;
  text-decoration: none;
  padding:5px;
  font-size:20px;
  border-radius:6px 0 5px 0;
  background-color: #1d7472;
}
.buttonDiv:hover{
  /* font-size:25px; */
 box-shadow: 6px 6px #8b5f5a;
 margin-top:-4px;
 margin-left: -4px;
}
.modalStyle{
  display:flex;
  justify-content: flex-end;
 
}
</style>