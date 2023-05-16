<template>
  <b-container>
    <SectionHeader sectionTitle="About Me"/>
    <b-row   >
      <b-col sm="12" md="6" lg="6" >
        <p>
          {{ stateContainer.aboutSection1 }}
        </p>
        <p>
          {{ stateContainer.aboutSection2 }}
        </p>
        <p>
          {{ stateContainer.aboutSection3 }}

        </p>
      </b-col>
      <b-col sm="12" md="6" lg="6"  >

        <img src="@/assets/child.jpg" alt="My Image" width="300" height="250"/>

<b-row class="imageContainer">
  <p>Here are a few stacks I’ve been working with recently:</p>
        <div class="stackContainer">
          <ul>
            <template v-for="(stack, index) in stateContainer.stacks" :key="stack.id">
              <li v-if="index < 3">{{ stack.name }}</li>
            </template>
          </ul>
          <ul>
            <template v-for="(stack, index) in stateContainer.stacks" :key="stack.id">
              <li v-if="index > 2">{{ stack.name }}</li>
            </template>
          </ul>
        </div>
</b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import { useStateContainer } from '@/stores/store';
import CircleList from './CircleList.vue';
import {ref,computed} from 'vue'
import  SectionHeader from './SectionHeader.vue';
const stateContainer = useStateContainer();
// const minWidth=ref(window.innerWidth)
// window.addEventListener('resize', () => {
//   minWidth.value = window.innerWidth;
// });
// let isMinWidth=computed(()=>{
//  return minWidth.value <= 600 ? true : false 
// })
</script>
<style scoped>
/* @media (width <= 600px) {
  .aboutMeStyle{
display:grid;
grid-template-columns: 2fr ;
gap: 20px;
background-color: red;
}
} */
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

.stackContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

ul li {
  list-style-type: none;

}

.stackContainer ul li::before {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 0.5em;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #b0fc38;
}

.imageContainer p {
  font-weight: bold, italic;
  color: #b0fc38;

}

p {
  text-align: justify;
}



</style>
