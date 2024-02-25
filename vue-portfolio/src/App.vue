<template>
 
 
  <div class="mainContainer">
    <b-container>
      <b-row class="mainHeader">
        <HeaderwithLogo />
      </b-row>
      <b-col v-if="!isMinWidth && isActive !=='footer'" xsm="1" sm="1" md="1" lg="1">
          <div>
            <div class="socialLinkStyle">
              <SocialLink />
            </div>
           
            <img class="socialLinkVLineStyle" src="@/assets/vLine.svg" alt="vline" width="1" height="100"/>
          </div>
        </b-col>
      <b-row>
       
<b-col xsm="1" sm="1" md="1" lg="1"></b-col>
        <b-col xsm="12" sm="12" md="12" lg="10" >
          <b-col class="mb-5" id="home"><MyHome /> </b-col>
          <b-col class="mb-5 mt-4" id="about"><AboutMe /></b-col>
          <b-col class="mb-5 mt-4" id="experience"><MyExperience /></b-col>
          <b-col class="mb-5 mt-4" id="work"><MyWork /></b-col>
          <b-col class="mb-5 mt-4" id="contact"><ContactMe /></b-col>
        </b-col>
        <b-col class="sideNavStyle" v-if="!isMinWidth && isActive !=='footer'" xsm="1" sm="1" md="1" lg="1">
          <div>
            <div>
              <ShowNavigation :isActive="isActive" />
            </div>
         
          </div>
        </b-col>
      </b-row>
      <b-row class="footerStyle" id="footer"><FooterView/></b-row>
    </b-container>
  </div>


</template>

<script setup lang="ts">
import AboutMe from './views/AboutMe.vue'
import SkillSets from './views/SkillSets.vue'
import ContactMe from './views/ContactMe.vue'
import MyExperience from './views/MyExperience.vue'
// import  CheckSection from './views/CheckSection.vue';
import MyWork from './views/MyWork.vue'
import MyHome from './views/MyHome.vue'
import CollabseIcon from './views/CollabseIcon.vue'
import { ref, onUnmounted, onMounted, computed } from 'vue'
import ShowNavigation from './views/ShowNavigation.vue'

import SocialLink from './views/SocialLink.vue'
import VerticalLine from './views/VerticalLine.vue'
import HeaderwithLogo from './views/HeaderwithLogo.vue'
import  FooterView from './views/FooterView.vue'

const hide = ref(false)
const isActive = ref('home')
const sections = ref([
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'work', title: 'Work' },
  { id: 'contact', title: 'Contact' },
  {id: 'footer',title:'footer'}
])
let observer: IntersectionObserver | null
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isActive.value = entry.target.id
        console.log(isActive.value)
      }
    })
  })

  sections.value.forEach((section) => {
    const el = document.getElementById(section.id)
    observer?.observe(el!)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

const minWidth = ref(window.innerWidth)
window.addEventListener('resize', () => {
  minWidth.value = window.innerWidth
})
let isMinWidth = computed(() => {
  return minWidth.value <= 800 ? true : false
})
</script>

<style scoped>
.mainContainer {
  color: white;
  font-size: 23px;
  background-color: #0a192f;
  width: 100%;
  height: 100%;
}
.mainHeader {
  width: auto;
  height: 100px;
  padding-top: 25px;

  background-color: #474747;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.bodyContainer {
  display: grid;
  /* grid-template-columns: 1fr 10fr 1fr; */
  width: 100%;
  height: auto;
  margin-top: 97px;
}

.sideNavStyle {
  position: fixed;
  top: 150px;
  left: calc(100% - 195px);
}
.mainContainerBody{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 'fit-content'
}
.myEmail {
  position: fixed;
  top: 500px;
  left: calc(100% - 225px);
  color: white;
  transform: rotate(90deg);
  font-size: 20px;
}

.socialLinkStyle {
  position: fixed;
  top: 450px;
  left: 30px;
}

.verticalImgStyle {
  position: fixed;
  bottom: 0;
  left: calc(100% - 123px);
  background-color: #b0fc38;
}
.socialLinkVLineStyle{
  position: fixed;
  bottom: 0;
  left: 70px;
  background-color: #b0fc38;
}

.footerStyle{
  width:auto;
  height:100%;
}
@media (width <= 600px) {
  #about {
    display: flex;
    width: auto;
    height: auto;
    margin: 5px;
    padding: 10px;
  }
}
@media (height <= 600px) {
  .socialLinkVLineStyle{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0px;
  background-color: #b0fc38;
}
}
@media (width > 600px) and (width < 1000px){
  .verticalImgStyle {
  position: fixed;
  bottom: 0;
  left: calc(100% - 70px);
  background-color: #b0fc38;
}
.sideNavStyle {
  position: fixed;
  top: 150px;
  left: calc(100% - 140px);
}

.myEmail {
  position: fixed;
  top: 500px;
  left: calc(100% - 170px);
  color: white;
  transform: rotate(90deg);
  font-size: 20px;
}
}
</style>
