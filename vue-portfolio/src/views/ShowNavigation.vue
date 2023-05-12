<template>
    <div class="navigationStyle">
        <ul>
        <li>
            <a href="#home" >
                <img v-if="isActive === 'home'" src="@/assets/square.svg" alt="rectangle icon" width="20" height="20"/>
              
                <img class="diamondStyle"  v-if="isActive !== 'home'" src="@/assets/diamond.svg" alt="rectangle icon" width="10" height="10"/>
            </a>
            <a href="#about"  >
                <img v-if="isActive === 'about'" src="@/assets/square.svg" alt="rectangle icon" width="20" height="20"/>
               
                    <img class="diamondStyle" v-if="isActive !== 'about'" src="@/assets/diamond.svg" alt="rectangle icon"  width="10" height="10"/>
           
               </a>
            <a href="#experience"  >
                <img :style="{'margin-right':'8px'}" v-if="isActive === 'experience'" src="@/assets/square.svg" alt="rectangle icon" width="20" height="20"/>
                <img class="diamondStyle" v-if="isActive !== 'experience'" src="@/assets/diamond.svg" alt="rectangle icon"  width="10" height="10"/></a>
            <a href="#work" >
                <img v-if="isActive === 'work'" src="@/assets/square.svg" alt="rectangle icon" width="20" height="20"/>
                <img class="diamondStyle" v-if="isActive !== 'work'" src="@/assets/diamond.svg" alt="rectangle icon"  width="10" height="10"/></a>
            <a  href="#contact" >
                <img  v-if="isActive === 'contact'" src="@/assets/square.svg" alt="rectangle icon" width="20" height="20"/>
                <img class="diamondStyle" v-if="isActive !== 'contact'" src="@/assets/diamond.svg" alt="rectangle icon"  width="10" height="10"/></a>
        </li>
</ul>
    </div>
</template>

<script setup lang="ts">
import {ref } from 'vue';
const props=defineProps({
    isActive:String
})

</script>

<style  scoped>
li{
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap:3px;
    padding:10px;
    font-size:34px;
}
li a span{
    background-color: white;
}

.navigationStyle{
width:40px;
height:150px;
}
.diamondStyle{
    margin-left:3.5px;
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
</style>