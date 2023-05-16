<template >
 

    <div class="mainContainer">
    
      <b-container >
           
       <b-row class="mainHeader">
         <HeaderwithLogo />
       </b-row>
        <b-row >
        <b-col  md="2" lg="2" >
          <div v-if="!isMinWidth">
           <div class="socialLinkStyle">
           <SocialLink/>
           
         </div>
         <VerticalLine
         myBottom="0"
         myTop="620px"
         myLeft="70px"
         myBorder-left="3px solid #b0fc38"
         myHeight="100px" 
         />
       
         </div>
        </b-col>
        
         <b-col xsm="12" sm="12" md="8" lg="8">
       <section   id="home"><MyHome/>  </section>
       <section  id="about"><AboutMe/></section>
       <section   id="experience"><MyExperience/></section>
       <section   id="work"><MyWork/></section>
       <section id="contact"><ContactMe/></section>
         </b-col>
         <b-col  md="2" lg="2">
    
           <div  v-if="!isMinWidth">
             <div class="sideNavStyle">
             <ShowNavigation :isActive="isActive"/>
           </div>
             <div class="myEmail">
            <p>
             bedada6@gmail.com 
         </p>
           </div>
           <VerticalLine
           myBottom="0"
           myTop="660px"
           myLeft="1400px"
           myBorder-left="3px solid #b0fc38"
           myHeight="100px" 
           />
           
           </div>
         </b-col>
       
       </b-row> 
         </b-container>
    </div>


  
</template>

<script setup lang="ts" >
import  AboutMe from './views/AboutMe.vue';
import ContactMe from './views/ContactMe.vue';
import MyExperience from './views/MyExperience.vue';
// import  CheckSection from './views/CheckSection.vue';
import MyWork from './views/MyWork.vue';
import  MyHome from './views/MyHome.vue';
import CollabseIcon from './views/CollabseIcon.vue'
import {ref,onUnmounted,onMounted,computed} from 'vue'
import  ShowNavigation from './views/ShowNavigation.vue';

import SocialLink from './views/SocialLink.vue'
import VerticalLine from './views/VerticalLine.vue'
import HeaderwithLogo from './views/HeaderwithLogo.vue';

const hide=ref(false)
const isActive=ref('home')
const sections=ref([
  {id:'home',title:'Home'},
  {id:'about',title:'About'},
  {id:'experience',title:'Experience'},
  {id:'contact',title:'Contact'}
])
let observer:IntersectionObserver | null;
onMounted(()=>{
  observer =new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
       isActive.value=entry.target.id
       console.log(isActive.value)
      }
    })
  })

  sections.value.forEach(section=>{
    
   const el=document.getElementById(section.id)

   observer?.observe(el!)
  })

})

 onUnmounted(() => {
      observer?.disconnect();
    });

    const minWidth=ref(window.innerWidth)
window.addEventListener('resize', () => {
  minWidth.value = window.innerWidth;
});
let isMinWidth=computed(()=>{
 return minWidth.value <= 600 ? true : false 
})


</script>

<style  scoped>

.mainContainer{
/* display: flex;
flex-direction: row; */
color:white;
font-size: 23px;
background-color:   #0a192f;
width:100%;
height:100%;
}
.mainHeader{
  
 width:100%;
  height:100px;
  padding-top: 25px;
  box-shadow: 0px 0px 5px 5px grey; 
   background-color: rgb(56,182,133);
}

.bodyContainer{
  display: grid;
  /* grid-template-columns: 1fr 10fr 1fr; */
  width:100%;
  height:auto;
  margin-top: 97px;
}

.sideNavStyle{
  position:fixed;
  top: 150px;
  left: 1340px;

}
.modalStyle{
  /* margin-right:30px; */
  
}
#home{
  height: 750px;
}
#about{

  height: 800px;
  
 
}

#experience{

  height: 700px;

}
#contact{

  height: 750px;

}
.myEmail{
  position:fixed;
  top: 500px;
  left: 1295px;
  color:white;
  transform: rotate(90deg);
  font-size:20px;
  
  

}
/* .verticalLine{
  position: fixed;
  bottom:0;
  top:660px;
  left:1400px;
  border-left: 3px solid #b0fc38;;
  height: 100px;
} */
.socialLinkStyle{
  position: fixed;
  top:450px;
  left:30px;
}
/* .verticalLineSocial{
  position: fixed;
  bottom:0;
  top:620px;
  left:70px;
  border-left: 3px solid #b0fc38;;
  height: 100px;
} */
/* @media (min-width: 1024px) {
  .mainHeader{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top:0;
  width:100%;
  height:50px;
  padding: 15px;
  box-shadow: 0px 0px 5px 5px grey
}
.header{
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;

}
} */

@media  (width <= 600px){
  #about{
display: flex;
  width: auto;
  height: auto;
  margin:5px;
  padding:10px;
}
}
</style>
 

   