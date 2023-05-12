<template>
  <div :style="{
    position:'fixed',
    bottom: myBottom,
    top: myTop,
    left: myLeft,
    borderLeft: myBorderLeft,
    height: myHeight
  }">
  </div>
</template>

<script setup lang="ts">
const props=defineProps({
  
    myBottom: {
      type: String,
     
    },
    myTop: {
      type: String,
    
    },
    myLeft: {
      type: String,
      
    },
    myBorderLeft: {
      type: String,
    
    },
    myHeight: {
      type: String,
    
    },
   
})
</script>

<style  scoped>

</style>