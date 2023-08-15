<template>
  <b-container class="mainContainer">
    <b-row class="loginBoxStyle">
      <form @submit.prevent="handleSubmit" class="innerBoxStyle" >
        <div class="adminHeaderStyle">Admin Login Page</div>
       <div class="errorStyle" v-show="isError"><Label :style="{color:'red'}">Username or Password Error</Label></div> 
        <div class="adminInputStyle1">
          <img src="@/assets/personIcon.svg" alt="Person Icon" width="50" height="50" />
    
          <input type="text" v-model="userName" />

        </div>
    
        <div class="adminInputStyle2">
          <img src="@/assets/lockIcon.svg" alt="Lock Icon" width="35" height="35" />
          <input type="password" v-model="password" />
        </div>
        <div class="flatStyle">
            <input type="checkbox" v-model="rememberMe" @change="isChecked=!isChecked" />
            <Label>Remember Me</Label>
            <button    type="submit" >Login</button>
        </div>
       
      </form>
    </b-row>
  </b-container>
 
</template>

<script setup lang="ts">

import { login } from '@/api/myweb.api';
import Input from './CustomInput.vue'
import Label from './CustomLabel.vue'
import {reactive,ref} from 'vue'
import { toRefs,onMounted } from 'vue';
import router from './../router/index'

const isChecked=ref(false)
const loginInfo=reactive({
  userName:'',
  password:'',
  rememberMe: isChecked.value ? true : false
})
const {userName,password,rememberMe}=toRefs(loginInfo)
const isError=ref(false);
const handleSubmit = async() => {
  await login({userName:loginInfo.userName,password:loginInfo.password}).then(res=>{
    if(res.data.message === 'success' && isChecked.value){
      localStorage.setItem('accessToken',res.data.accessToken)
    router.push('/dashboard')
    isError.value=false
    } else if(res.data.message === 'success' && !isChecked.value){
      router.push('/dashboard')
      isError.value=false;
    }else{
loginInfo.userName=''
loginInfo.password=''
isError.value=true
console.log(loginInfo.userName)
    }
  })
}


onMounted(()=>{
if(localStorage.getItem('accessToken'))
router.push('/dashboard')
})
</script>

<style scoped>
.mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 620px;
}
.loginBoxStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(201, 190, 199);
  width: 900px;
  height: calc(100% - 150px);
  border: 1px solid black;
  border-radius: 15px;
}
.errorStyle{
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
  margin-top:5em;
}

.innerBoxStyle {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 70%;
  height: 80%;
}
.innerBoxStyle input:focus{
  outline: blue;
}
.adminHeaderStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 20%;
  background-color: rgb(17, 61, 43);
  text-align: center;
  color:white;
}
.adminInputStyle1 {
  display: flex;
  position: absolute;
  flex-direction: row;
  top: 110px;
  left: 10px;
  width: calc(100% - 60px);
  height: 55px;
  border: 1px solid black;
  margin: 15px;
}
.adminInputStyle1:focus{
  outline: none;
  border: 1px solid blue;
  color:blue;
}
.adminInputStyle1 input:focus-within{
  outline: none;
  border: 1px dashed blue;
  color:blue;
}
.adminInputStyle2 input:focus-within{
  outline: none;
  border: 1px dashed blue;
  color:blue;
}
.adminInputStyle2 {
  display: flex;
  position: absolute;
  flex-direction: row;
  top: 200px;
  left: 10px;
  width: calc(100% - 60px);
  height: 55px;
  border: 1px solid black;
  margin: 15px;
}
.adminInputStyle1 input {
  border: none;
  background: none;
  width: 100%;
}

.adminInputStyle2 input {
  border: none;
  background: none;
  width: 100%;
}
.adminInputStyle1 img {
  margin-top: 5px;
  border: none;
  background: none;
}

.adminInputStyle2 img {
  border: none;
  background: none;
  margin-top: 10px;
}

.flatStyle{
display: grid;
  position: absolute;
  grid-template-columns: 1fr 3fr 2fr;
  place-content: center;
  top: 290px;
  left: 10px;
  height: 70px;
 width: calc(100% - 45px);
}

.flatStyle input{
   width: calc(100% - 10px);
   height: calc(100% - 15px);
   margin-top:10px;
}
.flatStyle input:hover{
  cursor: pointer;
}
.flatStyle Label{
    font-size: 20px;
}
.flatStyle button{
    font-size:25px;
    /* box-shadow: 0 20px 20px gray; */
}
@media(width < 600px){
  .errorStyle{
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
  margin-top:7.5em;
  font-size:10px;
}
.flatStyle Label{
    font-size: 10px;
}
.flatStyle input{
  margin-top:2px;
}
}

</style>
