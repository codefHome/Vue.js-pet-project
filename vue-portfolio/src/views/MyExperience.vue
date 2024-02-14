<template>
  <b-container gap-20>
    <SectionHeader sectionTitle="Where I've Worked" />
    <b-row class="mt-sm-1 mt-lg-4">
      <b-col class="pt-sm-1 pt-lg-4" xsm="12" sm="12" md="4" lg="2">
        <b-row class="d-flex flex-sm-row flex-lg-column">
          <b-col>
            <button
              @click="handleClick('excellerent')"
              :style="{
                'border-left': borderLeft('excellerent'),
                color: fontColor('excellerent'),
                'margin-left': marginLeft('excellerent')
              }"
              class="buttonStyle"
            >
              Execellerent Solution
            </button></b-col
          >
          <b-col>
            <button
              @click="handleClick('haramaya')"
              :style="{
                'border-left': borderLeft('haramaya'),
                color: fontColor('haramaya'),
                'margin-left': marginLeft('haramaya')
              }"
              class="buttonStyle"
            >
              Haramaya University
            </button></b-col
          >
        </b-row>
      </b-col>
      <b-col class="experienceContainer" xsm="12" sm="12" md="8" lg="10">
        <b-col sm="12" md="12" lg="10" v-if="activeTab === 'excellerent'">
          <h5>Software Engineer <span> @ Excellerent Solution</span></h5>
          <p>June 2021 - present</p>
          <text class="companyDescription">
            <p>
              {{ experiences?.experiences1.companyDescription }}
              <a :href="experiences?.experiences1.companyLink" target="_blank">{{ experiences?.experiences1.companyName }}</a>
            </p>
          </text>
          <div v-for="(project, index) in experiences?.experiences1.projects" :key="index">
            <div class="projectContainer">
              <span class="projectStyle">
                <span class="projectDetailStyle">
                  <span>
                    <h5>Projects:</h5>
                    <h6>{{ project?.ProjectName }}</h6>
                  </span>
                  <span>
                    <h5>Location:</h5>
                    <h6>{{ project?.location }}</h6>
                    <h5>({{ project?.workType }})</h5>
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

              <span class="toggleIcon" v-show="index === 0 ? showMores.showMore1 : index === 1 ? showMores.showMore2 : showMores.showMore3"><UpIcon @click="toggleShowMore(index)" /></span>
              <span class="toggleIcon" v-show="index === 0 ? !showMores.showMore1 : index === 1 ? !showMores.showMore2 : !showMores.showMore3"><DownIcon @click="toggleShowMore(index)" /></span>
            </div>

            <div v-show="index === 0 ? showMores.showMore1 : index === 1 ? showMores.showMore2 : showMores.showMore3" class="projectSeeMore">
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
        </b-col>
        <b-col sm="12" md="12" lg="10" v-if="activeTab === 'haramaya'">
          <h2>Software Engineer <span> @ Haramaya University</span></h2>
          <p>January 2018 - May 2021</p>
          <text class="companyDescription">
            <p>
              {{ experiences?.experiences2.companyDescription }}
              <a :href="experiences?.experiences2.companyLink" target="_blank">{{ experiences?.experiences2.companyName }}</a>
            </p>
          </text>
          <div v-for="(project, index) in experiences?.experiences2.projects" :key="index">
            <div class="projectContainer">
              <span class="projectStyle">
                <span class="projectDetailStyle">
                  <span>
                    <h5>Projects:</h5>
                    <h6>{{ project?.ProjectName }}</h6>
                  </span>
                  <span>
                    <h5>Location:</h5>
                    <h6>{{ project?.location }}</h6>
                    <h5>({{ project?.workType }})</h5>
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

              <span class="toggleIcon" v-show="index === 0 ? showMores.showMore1 : index === 1 ? showMores.showMore2 : showMores.showMore3"><UpIcon @click="toggleShowMore(index)" /></span>
              <span class="toggleIcon" v-show="index === 0 ? !showMores.showMore1 : index === 1 ? !showMores.showMore2 : !showMores.showMore3"><DownIcon @click="toggleShowMore(index)" /></span>
            </div>

            <div v-show="index === 0 ? showMores.showMore1 : index === 1 ? showMores.showMore2 : showMores.showMore3" class="projectSeeMore">
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
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import { useStateContainer } from '@/stores/store'

import UpIcon from '../assets/UpIconArrow.vue'
import DownIcon from '../assets/DownArrow.vue'
import { ref, onMounted, reactive } from 'vue'
import SectionHeader from './SectionHeader.vue'



export interface Experience {
  companyName: string
  title: string
  companyDescription: string
  companyLink: string
  startYear: string
  endYear: string

  projects: Project[]
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

const stateContainer = useStateContainer()
const activeTab = ref('excellerent')

const minWidth = ref(window.innerWidth)
window.addEventListener('resize', () => {
  minWidth.value = window.innerWidth
})

function borderLeft(value: string) {
  return activeTab.value === value ? '4px solid #b0fc38' : '1px solid gray'
}
function marginLeft(value: string) {
  return activeTab.value === value ? '0' : '1.5px'
}
function fontColor(value: string) {
  return activeTab.value === value ? '#b0fc38' : 'white'
}
function handleClick(value: string) {
  activeTab.value = value
}

const showMores=reactive({
  showMore1:false,
  showMore2:false,
  showMore3:false
})

const toggleShowMore = (index:number) => {
 if(index === 0){
  showMores.showMore1=!showMores.showMore1
  showMores.showMore2=false
  showMores.showMore3=false
 }
 if(index === 1){
  showMores.showMore2=!showMores.showMore2
  showMores.showMore1=false
  showMores.showMore3=false
 }

 if(index === 2){
  showMores.showMore3=!showMores.showMore3
  showMores.showMore1=false
  showMores.showMore2=false
 }
}
const experiences = reactive({
  experiences1: {} as Experience,
  experiences2: {} as Experience
})

onMounted(() => {
  ;(async () => {
    const data = await stateContainer.fetchExperience()
    experiences.experiences1 = data[0].experiences[0]
    experiences.experiences2 = data[0].experiences[1]
  })()
})
</script>
<style scoped>
.buttonStyle {
  border-left: 1 solid red;
  background: none;
  border: none;
  font-size: 15px;
  width: 100px;
  padding: 8px;
}

hr {
  width: 500px;
}

button:hover {
  background-color: lightslategrey;
  color: #b0fc38;
}

h5 span {
  color: #b0fc38;
  padding-left: 5px;
}

p {
  font-size: 15px;
}
.companyDescription {
  display: flex;
  text-align: justify;
  line-height: 1.6;
  font-size: 15px;
}
.experienceContainer ul li::before {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 0.55em;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #b0fc38;
}

.experienceContainer ul li {
  font-size: 20px;
  font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif;
  text-align: justify;
  text-indent: -0.9em;
  line-height: 1.5em;
}

.experienceContainer ul {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  list-style-type: none;
}

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
.technologies {
  color: orange;
  font-style: italic;
}
.projectContainer {
  display: flex;
  align-items: center;
  border: 1px dashed #b0fc38;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.projectStyle {
  display: flex;
  flex-direction: column;
  width: 98%;
  gap: 10px;
}
.projectDetailStyle {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.projectDetailStyle span {
  display: flex;
  justify-content: center;
  /* flex-wrap: nowrap; */
  align-items: center;
  gap: 5px;
}
.projectDetailStyle h5 {
  display: flex;
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
