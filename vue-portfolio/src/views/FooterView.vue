<template>
  <b-container class="bcontainerStyle">
    <b-row class="footerStyle">
      <span>
        <h1>SAY HELLO</h1>
        <ul>
          <li><a href="mailto:bedada6@gmail.com">bedada6@gmail.com</a></li>
          <li href="#">telegramLink</li>
          <li href="#">LinkedIn link</li>
        </ul>
      </span>
    </b-row>
    <b-row>
      <b-col class="footerSocialStyle">
        <hr class="horizontalLineFooter" />
        <ul>
          <li>
            <a href="#"> <img src="@/assets/linkedin.svg" alt="LinkedIn" width="30" height="30"/></a>
          </li>
          <li>
            <a href="#"> <img src="@/assets/github.svg" alt="LinkedIn" width="30" height="30" /></a>
          </li>
          <li>
            <a href="#"> <img src="@/assets/twitter.gif" alt="LinkedIn"  width="30" height="30"/></a>
          </li> 
          <li>
            <a href="#"> <img src="@/assets/telegram.svg" alt="LinkedIn" width="30" height="30"/></a>
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.bcontainerStyle {
  background-color: #054d62;
  height: 700px;
  width: 100%;
}
.horizontalLineFooter {
  background-color: white;
  color: black;
  width: 100%;
}
.footerStyle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* background-color: red; */
  height: 580px;
}
.footerStyle ul li {
  list-style-type: none;
  text-decoration: none;
}
li a {
  text-decoration: none;
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
</style>
