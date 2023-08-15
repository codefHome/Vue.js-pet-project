<template>
  <b-container gap-20>
    <SectionHeader sectionTitle="Where I've Worked"/>
    <b-row class="mt-sm-1 mt-lg-4 ">
      <b-col class="pt-sm-1 pt-lg-4" xsm="12" sm="12" md="4" lg="2">
        <b-row class="d-flex flex-sm-row flex-lg-column ">
        <b-col >
          <button
            @click="handleClick('excellerent')"
            :style="{
              'border-left': borderLeft('excellerent'),
              color: fontColor('excellerent'),
              'margin-left': marginLeft('excellerent')
            }"
            class="buttonStyle"
            >Execellerent Solution</button
          ></b-col
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
            >Haramaya University</button
          ></b-col
        >
        <b-col>
          <button
            @click="handleClick('ambo')"
            :style="{
              'border-left': borderLeft('ambo'),
              color: fontColor('ambo'),
              'margin-left': marginLeft('ambo')
            }"
            class="buttonStyle"
            >Ambo University</button>
          </b-col>
      </b-row>
      </b-col>
      <b-col class="experienceContainer" xsm="12" sm="12" md="8" lg="10">
        <b-col sm="12" md="12"  lg="10"  v-if="activeTab === 'excellerent'">
          <h2 >Software Engineer <span> @ Excellerent Solution</span></h2>
          <p>June 2021 - present</p>
          <ul>
         
              <li  v-for="(item,index) in excellerent?.roleDetails" :key="index">
                {{ item }}
              </li>
      
          </ul>
        </b-col>
        <b-col sm="12" md="12"  lg="10" v-if="activeTab === 'haramaya'">
          <h2 >Software Engineer <span> @ Haramaya University</span></h2>
          <p>January 2018 - May 2021</p>
          <ul>
           
              <li v-for="(item,index) in haramaya?.roleDetails" :key="index">
                {{ item }}
              </li>
           
          </ul>
        </b-col>
        <b-col sm="12" md="12"  lg="10" v-if="activeTab === 'ambo'">
          <h2 >Software Engineer <span> @ Ambo University</span></h2>
          <p>August 2016 - October 2017</p>
          <ul>
           
              <li v-for="(item,index) in ambo?.roleDetails" :key="index">
                {{ item }}
              </li>
           
          </ul>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import { useStateContainer } from '@/stores/store'
import CircleList from './CircleList.vue'
import { ref, computed,onMounted } from 'vue'
import SectionHeader from './SectionHeader.vue';
const stateContainer = useStateContainer()
const activeTab = ref('excellerent')

interface iDetail{
  companyName:string;
  roleDetails:string[]
}
const minWidth = ref(window.innerWidth)
window.addEventListener('resize', () => {
  minWidth.value = window.innerWidth
})
let isMinWidth = computed(() => {
  return minWidth.value <= 600 ? true : false
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
const excellerent=ref<iDetail>()
const haramaya=ref<iDetail>()
const ambo=ref<iDetail>()

onMounted(()=>{
(async()=>{
const data= await stateContainer.fetchData();
excellerent.value=data[0].experiences[0]
haramaya.value=data[0].experiences[1]
ambo.value=data[0].experiences[2]
})()
})
</script>
<style scoped>
/* .experienceContainer {
  margin-top: 40px;
} */

.experienceSection1 {
  /* display: grid;
   grid-template-columns: 2fr 2fr 4fr; */
}

.experienceSection1 span {
  /* place-content: center; */
}

span {
  /* display: flex;
   flex-direction: column;
   row-gap: 10px;
   margin-top: 0px; */
}

.buttonStyle {
  /* margin-left: -1.5px; */
  /* background-color: black; */
  /* color: black; */
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

/* .buttonStyle[data-active="true"]{
border-left: 3px solid #b0fc38;
} */
button:hover {
  background-color: lightslategrey;
  color: #b0fc38;
}

.leftSectionStyle {
  /* display: gid;
   grid-template-columns: 1fr 2fr; */
}

h2 span {
  color: #b0fc38;
  padding-left: 5px;
}



p {
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
  font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif ;
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
</style>
