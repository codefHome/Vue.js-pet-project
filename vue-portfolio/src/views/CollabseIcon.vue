<template>
    <Transition name="bounce">
    
    <img v-show="!showModal" @click="showModal=true" class="imgStyle" src="@/assets/menuIcon.svg" width="40" height="40" alt="open drawer icon"/>
 
    </Transition>
    <Transition name="slide-right">
 <div v-show="showModal" class="drawer">
    <img class="closeButtonStyle"  @click="showModal=false" src="@/assets/x.svg" alt="close drawer icon"/>
  <nav>
  <ul>
    <li>
      <a @click="hideDrawer" href="#about">01. About</a>
    </li>
 </ul>
 <hr/>
 <ul>
 <li>
  <a @click="hideDrawer" href="#experience">02. Experience</a>
 </li> 
</ul>
<hr/>
<ul>
 <li>
  <a @click="hideDrawer" href="#work">03. Work</a>
 </li>
</ul>
<hr/>
<ul>
 <li>
  <a @click="hideDrawer" href="#contact">04. Contact</a>
 </li>
  
  </ul>
  <hr/>
</nav>
 </div> 
</Transition> 
</template>

<script setup lang="ts">
import {ref} from 'vue'
const showModal=ref(false)
const hideDrawer=()=>{
    showModal.value=false
}
</script>

<style scoped>
.imgStyle{
    /* background-color: white; */
    margin-right:10px;
    
}
.drawer{
  display:flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width:300px;
  height:400px;
  background-color: rgb(56,182,133)
}
ul{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    list-style-type: none;
    justify-items: center;
   
}
nav ul li a{
    text-decoration: none;
    color:white;
    font-size: 25px;
}
nav ul li a:hover{
font-size: 35px;
}
nav  hr{
    border: 1px solid white;
    box-shadow: 0px 0px 5px 5px grey;
   margin-left:10px;
   margin-right: 10px;
}
.closeButtonStyle{
  /* float:right; */
  margin-top:20px;
  margin-right:10px;
  width:40px;
  height:40px;

}
.showButtonStyle{
 
  margin-right:10px;
  width:40px;
  height:40px;

}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

img:hover{
width:50px;
height:50px
}
</style>