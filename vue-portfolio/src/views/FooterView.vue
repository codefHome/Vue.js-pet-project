<template>
  <b-container class="mainContainerStyle">
    <b-row >
      <b-col class="footerStyle" sm="12"  lg="6">
        <span>
        <h1>SAY HELLO!</h1>
        <ul>
          <li><a href="mailto:bedada6@gmail.com" >bedada6@gmail.com</a></li>
          
          <li><a href="https://www.linkedin.com/in/bedada-bekele/" target="_blank">LinkedIn link</a></li>
          
        </ul>
      </span>
      </b-col>
      
      <b-col class="githubStyle" sm="12"  lg="6">
      <span>
        <h1>CHECK MY GITHUB</h1>
        <ul>
        
          <li ><a href="https://github.com/codefHome" target="_blank">My GitHub </a></li>
         
          <li><a href="https://github.com/codefHome/Vue.js-pet-project" target="_blank">Source code of this app</a></li>
        </ul>
      </span>
    </b-col>
    </b-row>
    
  
  </b-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.mainContainerStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #054d62;
  height: 700px;
  width: 100%;
}

.footerStyle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 


}
.footerStyle ul li {
  list-style-type: none;
  text-decoration: none;

}
li a {
  text-decoration: none;
  font-size: 18px;
  color:#b0fc38;
}
.footerStyle span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2em;
}
.footerStyle span h1 {
  margin-bottom: 20px;

}
.footerSocialStyle ul {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;

}
.githubStyle{
  display: flex;
  justify-content: end;
  align-items: end;
  margin-top: 10%;
  width: 100%;
  margin-right: 5%;

 
}
</style>
