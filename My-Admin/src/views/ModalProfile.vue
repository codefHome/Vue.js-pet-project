<template>
      <b-row  class="modalStyle" v-show="useState.showModal">
        <div  class="modalUpperStyle"> </div>
        <div   class="modalBodyStyle">
            <img class="modalImgStyle" src="@/assets/child.jpg" alt="my pic" width="100" height="100"/>
            <p>Bedada Bekele</p>
            <ul>
                <li ><a @click="handleThem" >{{ useState.isDark ? 'Light Theme' :'Dark Theme'}}</a></li>
                <li ><a @click="handleSignOut" >Sign Out</a></li>
            </ul>
             </div>
            
      </b-row>
</template>

<script setup lang="ts">
import { useTheme } from '@/stores/adminStore';
const useState=useTheme()


const props = defineProps({
 handleSignOut: {
      type: Function as unknown as () => (event: MouseEvent) => void,
      required: true,
    },
   
})

const handleThem=()=>{
useState.isDark=!useState.isDark;
useState.showModal=false;
}




</script>

<style scoped>

.modalStyle {
  display: flex;
  flex-direction: column;
  position: sticky;
  width: 200px;
  height: 250px;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(56, 182, 133);
 
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  right: 100%;
}
.slide-enter-to,
.slide-leave {
  right: 0;
}

.modalUpperStyle{
   height:30%;

background-color: blue;
}
.modalBodyStyle{
    display:flex;
    flex-direction: column;
    align-items: center;
height:70%;
background-color: transparent;

}
.modalImgStyle{
    border: 1 solid black;
    border-radius: 50%;
    margin-top:-3em;
}
.modalBodyStyle ul {
    display:flex;
    flex-direction: column;
    justify-content:flex-end;
    list-style-type: none;
    cursor: pointer;
    margin-top:5px;
}

</style>
