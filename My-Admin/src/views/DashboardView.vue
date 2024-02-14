<template>
  <b-container class="dashboardStyle" @click="handleClick" >

 <div class="innerContainerStyle">
  <div class="dbHeaderStyle">
    <div class="welcomeStyle">
      <strong>Welcome to Admin Page</strong>
    </div>
    <div  class="logoutStyle"  @click.stop="handleModal" >
     <img v-show="useState.showModal===false" src="@/assets/child.jpg" alt="my pic" width="50" height="50"/>
    <div  class="profileStyle">
      <ModalProfile  :handleSignOut="handleSignOut" :isClicked="isClicked" />
    </div>  
    </div>
  </div>
 
      
     
    <form @submit.prevent="submitInfo" >
      <b-row class="d-flex flex-column justify-content-center">
        <b-col class="d-flex flex-column">
          <Label :style="{ color: labelColor('homeTitle') }">Home Title</Label>
          <Input
            v-model="userInfo.homeTitle"
            @focus="isActive = 'homeTitle'"
            @blur="isActive = ''"
            placeholder="Home Title"
          />
        </b-col>
        <b-col class="d-flex flex-column">
          <Label :style="{ color: labelColor('homeDetail') }">Home Detail</Label>
          <TextArea
            v-model="userInfo.homeDetail"
            @focus="isActive = 'homeDetail'"
            @blur="isActive = ''"
            placeholder="Write Home Detail ..."
          ></TextArea>
        </b-col>
        <b-col class="d-flex flex-column">
          <Label :style="{ color: labelColor('aboutSection1') }">About Section One</Label>
          <TextArea
            v-model="userInfo.aboutSection1"
            @focus="isActive = 'aboutSection1'"
            @blur="isActive = ''"
            placeholder="Write About Section One ..."
          ></TextArea>
        </b-col>
        <b-col class="d-flex flex-column">
          <Label :style="{ color: labelColor('aboutSection2') }">About Section Two</Label>
          <TextArea
            v-model="userInfo.aboutSection2"
            @focus="isActive = 'aboutSection12'"
            @blur="isActive = ''"
            placeholder="Write About Section Two ..."
          ></TextArea>
        </b-col>
        <b-col class="d-flex flex-column">
          <Label :style="{ color: labelColor('aboutSection3') }">About Section Three</Label>
          <TextArea
            v-model="userInfo.aboutSection3"
            @focus="isActive = 'aboutSection3'"
            @blur="isActive = ''"
            placeholder="Write About Section Three ..."
          ></TextArea>
        </b-col>
        <b-col class="d-flex flex-column">
          <Label :style="{ color: labelColor('stacks') }">Stacks</Label>
       <b-col  xsm="12" sm="12">
        <span class="stackStyle" >
        <label v-for="item in selected" :key="item">{{ item  }}<button type="button" @click="removeSelectedItem(item)">X</button></label>  
        <Input  type="text" v-model="searchString" @focus="isDropdownVisible=true" @blur="handleBlur"
          placeholder="Search..."/></span>
        </b-col> 
        
    <div class="dropDownStyle" v-if="isDropdownVisible">
      <span >
        <button type="button" @click="addSelectedItem(item)"  v-for="item in filteredStack" :key="item">{{ item }}</button>
      </span>
    </div>

        </b-col>
        <b-col  class="d-flex flex-column">
          <b-col v-for="i in countExperience" :key="i">
            <Label :style="{ color: labelColor('companyName') }">Company Name</Label>
          <Input
            v-model="companyName"
            @focus="isActive = 'companyName'"
            @blur="isActive = ''"
            placeholder="Type Company Name"
          />
            <b-col  class="experienceFieldStyle" v-for="i in count" :key="i">
            <b-col class="d-flex flex-column"  >
            <Label>Your Contribution </Label>
            <TextArea
            v-model="userInfo.roleDetail"
            @focus="isActive = 'companyName'"
            @blur="isActive = ''"
            placeholder="Write your experience.."
          ></TextArea>
           </b-col>
          <b-col class="fieldButtonStyle"><button type="button" v-if="i===count" @click="addNewTextArea">+</button><button type="button" v-if="i !==1" @click="removeTextArea">-</button>
          </b-col>
        </b-col>
       <b-col class="d-flex justify-content-center"> <button type="button" class="saveButtonStyle" @click="saveExperience">Save Experience</button></b-col>
          </b-col>
          <b-col v-show="isAddExperienceVisible"  class="addExperienceStyle "><Label>Add Experience</Label> <button type="button" @click="handleIsAddExperienceVisible">+</button>
</b-col>
       
         
        </b-col>
        <b-col class="submitStyle">
          <button type="submit">Submit</button>
        </b-col>
      </b-row>
    </form>

   

   </div>
  </b-container>
  
    
 
</template>

<script setup lang="ts">
import Input from './CustomInput.vue'
import Label from './CustomLabel.vue'
import TextArea from './CustomTextArea.vue'
import { ref,reactive,computed } from 'vue'  
import {insertInfo} from '../api/myweb.api'
import router from '@/router'
import ModalProfile from './ModalProfile.vue'
import { useTheme } from '@/stores/adminStore'
import {watch} from 'vue'
const useState=useTheme();

const userInfo=reactive({
homeTitle:'',
homeDetail:'',
aboutSection1:'',
  aboutSection2:'',
  aboutSection3:'',
  roleDetail:'',

})

const isClicked=ref(false)


watch(isClicked,(oldVal,neVal)=>{
  if(neVal != oldVal ){
    useState.showModal=false
    console.log('first')
    isClicked.value=false
  }
})
const handleSignOut=()=>{
  router.push('/')
  localStorage.removeItem('accessToken')
}

const handleClick=()=>{
  isClicked.value=true
}
document.addEventListener('click',handleClick)

const isDropdownVisible=ref(false)

const isActive = ref('')
const stacks=ref(['React','Next','Nest','Node','Express','Vue','Jest','cypress','docker'])
const count=ref(1)
const countExperience=ref(0)
const companyName=ref()
const experiences=ref<Array<{companyName:string;
roleDetails:string[]}>>([])
const displayExperience=ref(false)
const isAddExperienceVisible=ref(true)
const selected=ref<string[]>([])
  const stack=["React", "Next", "Redux",
"Redux Toolkit",
"REST API",
"RTK Query",
"Context API", "Vue.js",
"React Hook Form",
"JavaScript", "TypeScript",
"Material UI", "Pinia",
"Ant Design", "Webpack",
"Tailwind CSS", "Vite",
"React Test Library", "Zustand", "Zod",
"Recharts",
"HTML", "CSS",
"Docker", "Git",
"GitHub", "Jira",
"Bitbucket", "Jest", ]
selected.value=stack
const searchString=ref('')
const roles=ref<string[]>([])
function labelColor(value: string) {
  return isActive.value === value ? 'blue' : 'black'
}
const removeSelectedItem=(value:string)=>{
const index=selected.value.indexOf(value);
stacks.value.splice(index,1)
}
const addSelectedItem=(value:string)=>{
  isDropdownVisible.value=true
 

searchString.value=''
}

const handleIsAddExperienceVisible=()=>{
  countExperience.value++;
  isAddExperienceVisible.value=false
}
const addNewTextArea=()=>{
  roles.value.push(userInfo.roleDetail)
  if(count.value < 10){
    count.value++
  }else{
    alert(`Maximum bullet limit is 10`)
  }
}
const removeTextArea=()=>{
  if(count.value > 1){
    count.value--
  }else{
    alert('You need to add at least One bullet')
  }
}

const handleModal=()=>{
  // router.push('/')
useState.showModal=true

}

const saveExperience=async ()=>{
roles.value.push(userInfo.roleDetail)
experiences.value.push({companyName:companyName.value,roleDetails:{...roles.value}})
console.log(JSON.stringify(experiences.value))
displayExperience.value=false;
isAddExperienceVisible.value=true
countExperience.value=0
count.value=1
companyName.value=''
userInfo.roleDetail=''
roles.value=[]
}
const filteredStack=computed(()=>{
  if(!searchString.value){
    return stacks.value
  }else{
    return stacks.value.filter((item:string )=> item.toLocaleLowerCase().includes(searchString.value.toLocaleLowerCase()) )
  }
})
const handleBlur=()=>{
  if(!searchString.value){
    return isDropdownVisible.value=false
  }else{
    return isDropdownVisible.value=true
   }

}


const submitInfo=async()=>{
await insertInfo({homeTitle:userInfo.homeTitle,homeDetail:userInfo.homeDetail,aboutSection1:userInfo.aboutSection1,aboutSection2:userInfo.aboutSection2,aboutSection3:userInfo.aboutSection3,stacks:selected.value})
}
</script>
<style scoped>

.dashboardStyle{
  display:flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(201, 190, 199);
}

.innerContainerStyle{
display:flex;
flex-direction: column;

}
.dbHeaderStyle{
 display:flex;
 position:relative;
 height:100px;
}
.welcomeStyle{
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:30px;
  margin-top:1em;
  width:93%;
}
.logoutStyle{
  position:sticky;
  height:100px;
  cursor: pointer;
}
.logoutStyle img{
  border: 1px solid black;
  border-radius: 50%;
  margin-top:2.5em;
}
.profileStyle{
  position:relative;
  height:auto;
  overflow: hidden;
}

form{
  color:black;
}
input:focus::placeholder{
color:transparent;
}
.stackStyle{
  border: 1px solid black;
  display: flex; 
  flex-wrap: wrap;
  flex-grow: 1; 
  flex-basis: 100px;
  background:none;
}
.stackStyle button{
  margin:3px;
}
.stackStyle input{
  border:none;
}
.stackStyle input:focus{
  outline:none;
}
.stackStyle input:focus::placeHolder{
  color:transparent;
}
.stackStyle label{
display:flex;
flex-direction: row;
border: 1px solid black;
border-radius: 5px;
margin:3px;
padding:3px
}
.stackStyle label button{
  font-size:10px;
  border:none;
  background:none;
}
.experienceFieldStyle{
  display:grid;
  grid-template-columns: 10fr 0.5fr;
  grid-gap: 3px;
}
.fieldButtonStyle{
  display:flex;
  flex-direction:row;
 margin-top:3em;
}
.fieldButtonStyle button{
  font-size:30px;
  border:1px solid black;
  margin-left:5px;
  border-radius: 40%;
  padding-bottom:-15px;
}
.addExperienceStyle{
  display:flex;
  row-gap: 5em;
  /* background-color: gray; */
  color:black;
  /* border: 1px solid black; */
  border-radius:10px;
  margin:10px 0px 10px 0px;
}
.addExperienceStyle Label{
  font-size:35px;
}
.addExperienceStyle button{
  background:none;
  border:none;
  font-size:30px;
  font-weight: bold;
}
.saveButtonStyle{
  font-size:30px;
  display:block;
  width:auto;
  height:auto;
  padding:5px;
  margin-top:15px ;
  border-radius:5px;
}
.submitStyle{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom:1em;
  font-size:25px;
}
.submitStyle button{
  border: 1px solid blue;
  border-radius: 5px;
  padding: 7px;
  background-color: transparent;
  box-shadow: 0 15px 15px rgb(14, 13, 13);
}
.submitStyle button:hover{
  background-color: transparent;
  box-shadow: 0 15px 15px rgb(14, 13, 13), 0 15px 15px rgb(13, 61, 194);
}

@media(width <= 600px){
  .welcomeStyle{
  display:flex;
  justify-content: flex-start;
  font-size: 20px;
  color: black;
 
}
}
</style>
