<template>
   <b-container gap-20>
    <SectionHeader sectionTitle="My Projects" />
    <b-row class="mt-sm-1 mt-lg-4">
      <b-col class="pt-sm-1 pt-lg-4" xsm="12" sm="12" md="4" lg="2">
   <div class="projectContainer">

   </div>
      </b-col>
      <b-col class="experienceContainer" xsm="12" sm="12" md="8" lg="10">
    
       
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionHeader from './SectionHeader.vue';

export default defineComponent({
    data() {
        return {
            color: 'red',
        };
    },
    components: { SectionHeader }
});
</script>

<style scoped>
.projectContainer{
  display: flex;
  flex-direction: column;
  border: 1 solid white;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height:350px;
  background-color: gray;
  width: 400px;
}


@media (width <= 600px) {
 
}
</style>