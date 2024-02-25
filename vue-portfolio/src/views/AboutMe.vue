<template>
  <b-container class="checkme">
    <SectionHeader sectionTitle="About Me" />
    <b-row class="aboutSectionStyle">
      <b-col sm="12" md="5" lg="6">
        <div class="aboutMeStyle">
          <p>
            {{ aboutSection.aboutSection1 }}
          </p>
          <p>
            {{ aboutSection.aboutSection2 }}
          </p>
          <p>
            {{ aboutSection.aboutSection3 }}
          </p>
        </div>
      </b-col>
      <b-col sm="12" md="6" lg="5" >
        <b-col  class="d-flex  " >
          <img v-show="!isVideo" class="imgStyle" src="@/assets/Bedada.jpg" alt="My Image" />
       <VideoIntro v-show="isVideo" :url="videoSource" />
        </b-col>
        
        <b-col>
          <text v-show="!isVideo" @click="showVideo" class="clickHereStyle">Click here to view a Video</text>
          <text v-show="isVideo" @click="showVideo" class="clickHereStyle">Click here to view an Image</text>
        </b-col>
    
      </b-col>
      <SkillSets/>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import { useStateContainer } from '@/stores/store'
import CircleList from './CircleList.vue'
import { onMounted, reactive, ref } from 'vue'
import SectionHeader from './SectionHeader.vue'
import videoSource from '../assets/videoIntro.mp4'
import SkillSets from './SkillSets.vue'
import VideoIntro from '@/components/VideoIntro.vue'

const stateContainer = useStateContainer()
const aboutSection = reactive({
  aboutSection1: '',
  aboutSection2: '',
  aboutSection3: '',
  stacks: []
})
const isVideo=ref(false)
const showVideo=() =>{
  isVideo.value=!isVideo.value
}
onMounted(() => {
  ;(async () => {
    const data = await stateContainer.fetchData()
    aboutSection.aboutSection1 = data[0].aboutSection1
    aboutSection.aboutSection2 = data[0].aboutSection2
    aboutSection.aboutSection3 = data[0].aboutSection3
    aboutSection.stacks = data[0].stacks
  })()
})

</script>
<style scoped>
.checkBack {

  margin-left: 15px;
}
.aboutMeStyle {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.aboutMeStyle p {
  font-size: 17px;
}
.marginRight {
  margin-right: 35px;
}
.myImageStyle {
  /* box-shadow: 15px 15px #38b61e;
  filter: brightness(80%);
  margin-top: 20px;
  border: 1px solid #b0fc38 */
}

.aboutSectionStyle {
display:flex;
flex-direction: row;
justify-content: space-between;

}

.aboutMeSection1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

hr {
  /* width:330px; */
  filter: brightness(50%);
}

.aboutMeSectionOne {
  margin: 20px;
}

span {
  margin-top: 32px;
}



p {
  text-align: justify;
}

.imgStyle {
  display: block;
  width: 300px;
  height: 350px;
  filter: brightness(80%);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-top: 30px;
  margin-left: 10px;
  border-radius: 10px;
}
/* .imgStyle:hover {
  filter: brightness(100%);
  margin-right: -5px;
  margin-bottom: -5px;
  box-shadow: -15px -15px black, -17px -17px #b0fc38, 15px 15px blue, 17px 17px #b0fc38;
} */

.spanImgStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}
.stackStyle {
  font-size: 17px;
  display: flex;
  flex-direction: row;
}

.clickHereStyle{
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color:#b0fc38;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
}

@media (width <= 750px) {
  .imgStyle {
    display: block;
    width: 100%;
    height: auto;
    margin-left: 0px;

  }
  .clickHereStyle{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color:#b0fc38;
  margin-left: 0px;
  margin-top: 10px;
  cursor: pointer;
}
}
</style>
