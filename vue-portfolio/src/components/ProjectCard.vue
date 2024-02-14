<template>
  <div v-for="(project,index) in projects" :key="index">
 <div  class="projectContainer" >
            <span class="projectStyle">
              <span class="projectDetailStyle">
                <span>
                  <h5>Projects:</h5>
                  <h6>{{ project?.ProjectName }}</h6>
                </span>
                <span>
                  <h5>Location:</h5>
                  <h6>{{ project?.location }} <h5>({{ project?.workType }})</h5> </h6>
                </span>
              </span>
              <span class="projectDetailStyle">
                <span>
                  <h5>Role:</h5>
                  <h6>{{ project?.role }}</h6>
                </span>
                <span>
                  <h6>{{ project?.startDate }} - {{ project?.endDate }}</h6>
                </span>
              </span>
            </span>

            <span class="toggleIcon" v-show="showMore" ><UpIcon /></span>
            <span class="toggleIcon"  v-show="!showMore"><DownIcon /></span>
          </div>

          <div v-show="showMore" class="projectSeeMore">
            <h5>Project Description</h5>
            <text>
              <p>
               {{ project?.projectDescription }}
              </p>
            </text>

            <span>
              <h5>My Responsibilities: &nbsp;</h5>
              <text>
                <p>
                 {{ project?.responsibility }}
                </p>
              </text>
            </span>
            <span>
              <h5>Technologies: &nbsp;</h5>
              <text>
                <p class="technologies">
                 {{ project?.technologies }}
                </p>
              </text>
            </span>
          </div>
        </div>
</template>
<script lang="ts" setup>

import UpIcon from '../assets/UpIconArrow.vue'
import DownIcon from '../assets/DownArrow.vue'
import { ref,  } from 'vue';
import type { Project } from './ExperienceCard.vue';

export interface ShowType{
  show1:boolean;
  show2:boolean;
  show3:boolean;
}
interface MyProps {
  showMore: boolean;
  // toggleShowMore: () => void;
  projects: Project[] 
}
// defineProps({
//   handleMore:{type: Function },
//   projects: {type: Array as () => Project[]},
//   showMore:{type:Boolean}
//   // {type:Object as () => ShowType},

// })
const props = defineProps<MyProps>();
const showMore=ref(props.showMore)
const projects=ref(props.projects)
// const toggleShowMore = () => {
//   showMore.value = !showMore.value;
//   props.toggleShowMore();
// };
console.log({pro:projects.value})

</script>
<style scoped>
.toggleIcon {
  display: flex;
  cursor: pointer;
  margin-right: -12px;
  margin-top: -12px;
}
.projectSeeMore {
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
}
.projectSeeMore h5 {
  margin-top: 10px;
  font-size: 18px;
  color: #b0fc38;
}
.projectSeeMore p {
  margin-top: 10px;
  text-align: justify;
  font-size: 14px;
  line-height: 1.6;
}
.technologies{
  color: orange;
 font-style: italic;
}
.projectContainer {
  display: flex;
  align-items: center;
  border: 1px dashed #b0fc38;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.projectStyle {
  display: flex;
  flex-direction: column;
  width: 98%;
}
.projectDetailStyle {
  display: flex;
  justify-content: space-between;
}
.projectDetailStyle span {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.projectDetailStyle h5 {
  color: #b0fc38;
  font-size: 14px;
}
.projectDetailStyle h6 {
 
  font-size: 14px;
}
.projectStyle p {
  font-size: 14px;
  text-align: justify;
}


</style>