<template>
  <div v-show="show">
    <video ref="videoPlayer" controls class="videoStyle">
      <source :src="videoSource" type="video/mp4">
    </video>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  url: String,
  show: Boolean,
});

const videoSource = ref(props.url);
</script>

<style scoped>
.videoStyle {
  position: relative;
  width: 465px;
  height: 350px;
  object-fit: cover;

}
@media (width <= 600px) {
  .videoStyle {
  position: relative;
  width: 100%;
  height: 280px;
  object-fit: cover;
 
}
}
</style>
