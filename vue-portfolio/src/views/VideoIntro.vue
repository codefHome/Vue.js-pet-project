<template>
    <div v-show="show">
      <video ref="videoPlayer" controls class="imgStyle">
        <source :src="videoSource" type="video/mp4">
      </video>
     
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps,ref } from 'vue';
  const videoPlayer = ref<HTMLVideoElement | null>(null);
const props=defineProps({
    url:String,
    show:Boolean,
})
 const videoSource=ref(props.url)         

 
  </script>
  <style scoped>
  .imgStyle {
  display: block;
  width: 300px;
  height: 350px;
  
  margin-top: 30px;
  margin-left: 10px;
}
</style>