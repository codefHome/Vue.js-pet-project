<template>
 
  <div v-if="showModal" class="modal" >
<div class="modal-cotent">
  <h1>Email Sent Successfully</h1>
  <img src="@/assets/success.gif" alt="Success gif" width="200" height="200"/>
</div>
  </div>
</template>

<script setup lang="ts">
const props=defineProps({
  showModal:{
    type:Boolean,
    default:false
  }
})

</script>

<style scoped>
.modal{
  position: absolute;
  width:50%;
  height:50%;
  background-color: red;
  align-items: center;
}
.modal-content{
  position: absolute;
  top:80%;
  left:50%;
  transform: translate(-50%, -50%);
  margin:20px;
  align-items: center;
}
</style>