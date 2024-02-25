<template>
   
   </template>
   <script lang="ts" setup>
import { ref, type PropType, reactive, onMounted } from 'vue';
import ProjectCard, { type ShowType } from './ProjectCard.vue';
import { useStateContainer } from '@/stores/store';


export interface Experience {
  companyName: string
  title: string
  companyDescription: string
  companyLink: string
  startYear: string
  endYear: string
  showMore:ShowMoreType
  projects: Project[]
}
interface ShowMoreType{
  showMore1:{type:Boolean},
  showMore2:{type:Boolean},
  showMore3:{type:Boolean},
}
export interface Project {
  ProjectName: string
  location: string
  workType: string
  role: string
  startDate: string
  endDate: string
  projectDescription: string
  responsibility: string
  technologies: string
}
// interface MyProps {
//   showMore: boolean;
//   toggleShowMore: () => void;
//   experiences: Experience | undefined
// }

const showMore=ref(false)
const toggleShowMore= () =>{
  showMore.value = !showMore.value
}
  const experiences = reactive({
    experiences1: {} as Experience,
    experiences2:{} as Experience
})
const stateContainer = useStateContainer()
  onMounted(() => {
  ;(async () => {
   const data= await stateContainer.fetchExperience()
   if(data.length){
    experiences.experiences1 = data[0].experiences[0] 
    experiences.experiences2 = data[0].experiences[1]
   }
    

  })()
})

   </script>
   <style scoped>
 .companyDescription {
  display: flex;
  text-align: justify;
  line-height: 1.6;
  font-size: 15px;
}
   
   </style>