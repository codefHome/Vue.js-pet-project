<template>

  
    <div class="mainContainer">
      
  <div class="mainHeader">
    <HeaderWithLogo />
  </div>
  <div class="bodyContainer">
    <div>
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
    <div>
  <section   id="home"><MyHome/>  </section>
  <section  id="about"><AboutMe/></section>
  <section   id="experience"><MyExperience/></section>
  <section   id="work"><MyWork/></section>
  <section id="contact"><ContactMe/></section>
    </div>
    <div>
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
  
  </div>
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
import {ref,computed,onMounted} from 'vue'
import  ShowNavigation from './views/ShowNavigation.vue';
// import  HeaderWithLogo from './views/HeaderWithLogo.vue';
import SocialLink from './views/SocialLink.vue'
import VerticalLine from './views/VerticalLine.vue'

const hide=ref(true)
const isActive=ref('home')
const sections=ref([
  {id:'home',title:'Home'},
  {id:'about',title:'About'},
  {id:'experience',title:'Experience'},
  {id:'work',title:'Work'},
  {id:'contact',title:'Contact'}
])

onMounted(()=>{
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
       isActive.value=entry.target.id
       console.log(isActive.value)
      }
    })
  })

  sections.value.forEach(section=>{
    
   const el=document.getElementById(section.id)

    // observer.observe(el)
  })
})






</script>

<style  scoped>

.mainContainer{
display: flex;
flex-direction: row;
color:white;
font-size: 23px;
background-color:   #0a192f;
width:100%;
height:100%;
}
.mainHeader{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top:0;
  width:100%;
  height:50px;
  padding: 45px;
  /* box-shadow: 0px 0px 5px 5px grey; */
  /* background-color: rgb(56,182,133); */
  
}

.bodyContainer{
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
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
  margin-right:30px;
  
}
#home{
display: flex;
  width: 1000px;
  height: 620px;
  margin:5px;
  padding:10px;
}
#about{
display: flex;
  width: 1000px;
  height: auto;
  margin:5px;
  padding:10px;
}

#experience{
display: flex;
  width: 1000px;
  height: 620px;
  margin:5px;
  padding:10px;
}
#contact{
display: flex;
  width: 100px;
  height: 750px;
  margin:5px;
  padding:10px;
}
.myEmail{
  position:fixed;
  top: 500px;
  left: 1318px;
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
  left:20px;
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
 

   