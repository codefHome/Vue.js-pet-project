<template>
  <b-container>
    <SectionHeader sectionTitle="About Me"/>
    <b-row   >
      <b-col sm="12" md="5" lg="6" >
        <p>
          {{ aboutSection.aboutSection1 }}
        </p>
        <p>
          {{ aboutSection.aboutSection2 }}
        </p>
        <p>
          {{ aboutSection.aboutSection3 }}

        </p>
      </b-col>
      <b-col sm="12" md="7" lg="6"  >

       <b-col class="d-flex justify-content-center">
      
        <img class="imgStyle" src="@/assets/child.jpg" alt="My Image" />
      
        
      
        
        
       </b-col> 
<b-row class="imageContainer">
  <p>Here are a few stacks I’ve been working with recently:</p>
        <b-row class="stackStyle">
         <b-col >
          <ul>
            <template v-for="(stack, index) in aboutSection.stacks" :key="stack.id">
              <li v-if="index < 3" >{{ stack }}</li>
            </template>
          </ul>
         </b-col>
          <b-col >
            <ul>
            <template v-for="(stack, index) in aboutSection.stacks" :key="stack.id">
              <li v-if="index >2 && index <= 5">{{ stack }}</li>
            </template>
          </ul>
          </b-col>
          
          <b-col >
            <ul>
              <template v-for="(stack, index) in aboutSection.stacks" :key="stack.id">
              <li v-if="index > 5 && index <= 8">{{ stack }}</li>
            </template>
          </ul>
          </b-col>
          
         
          
        </b-row>
</b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import { useStateContainer } from '@/stores/store';
import CircleList from './CircleList.vue';
import {onMounted,reactive} from 'vue'
import  SectionHeader from './SectionHeader.vue';
const stateContainer = useStateContainer();
const aboutSection=reactive({
  aboutSection1:'',
  aboutSection2:'',
  aboutSection3:'',
  stacks:[]
})
onMounted(()=>{
  (async()=>{
    const data=await stateContainer.fetchData()
aboutSection.aboutSection1=data[0].aboutSection1
aboutSection.aboutSection2=data[0].aboutSection2
aboutSection.aboutSection3=data[0].aboutSection3
aboutSection.stacks=data[0].stacks
  })()
})
</script>
<style scoped>
.checkBack{
  background-color: red;
  margin-left:15px;
}
.aboutMeStyle {
  /* display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 50px; */
}
.marginRight{
  margin-right: 35px;
}
.myImageStyle {
  /* box-shadow: 15px 15px #38b61e;
  filter: brightness(80%);
  margin-top: 20px;
  border: 1px solid #b0fc38 */
}

.myImageStyle:hover {
  /* box-shadow: 20px 20px gray;
  filter: brightness(100%);
  border: 1px solid #b0fc38; */
  /* width: 310px;
  height: 310px; */
}

.aboutMeSection1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

hr {
  /* width:330px; */
  filter: brightness(50%)
}

.aboutMeSectionOne {
 margin: 20px;
}

span {
  margin-top: 32px;
}

/* .imgSection {
  margin-top: 50px;
} */
.imageContainer{
  padding-top:10px;
}
.imageContainer p{
  margin-top: 10px;
}

/* .stackContainer {
  display: grid;
  grid-template-columns: 6fr 6fr;
} */

ul li {
  list-style-type: none;
}

.imageContainer ul li::before {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 0.5em;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #b0fc38;
}
.imageContainer ul li{
  margin-left:-30px;
}
.imageContainer p {
  font-weight: bold, italic;
  color: #b0fc38;

}

p {
  text-align: justify;
}

.imgStyle{
  display:block;
  width:70%;
  height:auto;
 filter:brightness(80%);
 box-shadow: 15px 15px black, 17px 17px #b0fc38,-15px -15px blue, -17px -17px #b0fc38;
 border: 1px solid #b0fc38;
}
.imgStyle:hover{
 filter:brightness(100%);
 margin-right:-5px;
 margin-bottom:-5px;
 box-shadow: -15px -15px black, -17px -17px #b0fc38,15px 15px blue, 17px 17px #b0fc38;
}

.spanImgStyle{
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:auto;
 
}
.stackStyle{
  font-size: 17px;
  display:flex;
  flex-direction:row;
}

@media (width <= 750px) {
  .imgStyle{
  display:block;
  width:100%;
  height:auto;
}

}
</style>
