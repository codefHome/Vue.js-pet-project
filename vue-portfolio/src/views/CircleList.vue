<template>
   
    <ul    >
<li v-for="i in 10" :key="i" class="circle"></li>
    </ul>
</template>

<script setup lang="ts">

</script>

<style  scoped>

.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
border:1px dashed  #b0fc38;
}


ul {
    list-style-type: none;
    display: flex;
   flex-direction: row;
   row-gap: 2px;
   margin-top:35px;
  
}
</style>