<template>
     <b-container class="skillSetContainer">
    <SectionHeader sectionTitle="My Skill Sets " />
      <b-row class="d-flex justify-content-center">
          <b-row class="imageContainer">
            <b-col>
              <ul>
                <template v-for="(stack) in aboutSection.stacks" :key="stack.id">
                  <li>{{ stack }}</li>
                </template>
              </ul>
            </b-col>
            
          </b-row>
       
      </b-row>
      </b-container>
</template>
<script lang="ts" setup>
import { useStateContainer } from '@/stores/store';
import { onMounted, reactive } from 'vue';
import SectionHeader from './SectionHeader.vue';

const stateContainer = useStateContainer()
const aboutSection = reactive({
  stacks: []
})

onMounted(() => {
  ;(async () => {
    const data = await stateContainer.fetchData()
    aboutSection.stacks = data[0].stacks
  })()
})
</script>
<style scoped>
.imageContainer  {
 display: flex;
 width: 100%;

}
.imageContainer ul {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
}


ul li {
  list-style-type: none;
  width:150px;
  margin-right: 20px;
  margin-bottom: 10px;
  font-size: 14px;
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
.imageContainer ul li {
  margin-left: -30px;
}
.imageContainer p {
  font-weight: bold, italic;
  color: #b0fc38;
}

p {
  text-align: justify;
}
.stackStyle ul{
  font-size: 17px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap:30px;
}
.skillSetContainer{
  margin-top: 20px;
}
@media (width <= 600px) {
  ul li {
 display: flex;
width: 105px;
justify-content: start;
align-items: center;
}
}
</style>