<template >
  
<b-container  class="contactSyle">
   <SectionHeader sectionTitle="Want to Contact Me"/>
<b-row >
<div class="contactSection2">
<b-col class="mb-2">
    <h1>Send me a Message!</h1>
</b-col>
<b-col class="mt-2">
    <pre>Got a question or proposal, or just want
    to say hello? Go head.
</pre>
</b-col>
</div>
</b-row>
<b-row class="contactSection3">
<form @submit.prevent="handleSubmit" class="formStyle">
    
    <b-row class="nameAndEmailStyle">
        <b-col  class="d-flex flex-column ">
        <label :style="{color:labelColor('name')}" >Your Name</label>
    <input @focus="isActive = 'name'" @blur="isActive = ''" type="text" placeholder="Enter your name" v-model="senderName" :style="{color:labelColor('name')}"/>
        </b-col>
        <b-col  class="d-flex flex-column ">
            <label :style="{color:labelColor('email')}">Email Address</label>
    <input @focus="isActive = 'email'" @blur="isActive = ''" type="email" placeholder="Enter your email address" v-model="email"  :style="{color:labelColor('email')}" />
        </b-col>
    </b-row>
    <b-col  class="messageSection">
      
            <label :style="{color:labelColor('message')}">Your Message</label>
   <textarea @focus="isActive='message'" @blur="isActive = ''"  rows="2" :placeholder="placeholderMessage" v-model="message" :style="{color:labelColor('message')}"></textarea>
        
       
    </b-col>
    <section class="contactButtonStyle">
  
        <button type="submit">Send Email</button>
    </section>
    
</form>
</b-row>

</b-container>
<SuccessInfo :showModal="showModal"/>
</template>

<script  lang="ts">
import {reactive,toRefs,ref} from 'vue'
import {useStateContainer} from '@/stores/store'
import SuccessInfo from './SuccessInfo.vue'
import  SectionHeader from './SectionHeader.vue'
export default{
    setup() {
        const userInfo = reactive({
            senderName: "",
            email: "",
            message: ""
        });
        const showModal=ref(false)
        const isActive=ref('')
     
        const labelColor=(value:string)=>{
           return isActive.value === value ? '#b0fc38'  :'white'
        }
const stateContainer=useStateContainer()
       const handleSubmit= async()=>{
     const result= await stateContainer.sendMail({senderName:userInfo.senderName,email:userInfo.email,message:userInfo.message})
        userInfo.senderName=''
        userInfo.email=''
        userInfo.message=''
        if(result==='Email sent Successfully'){
            showModal.value=true
        setTimeout(()=>{
            showModal.value=false
        },8000)
        }
        
       }
      
        const placeholderMessage = "Hi, I think we need a front end developer for out x project. How soon can you hop on to discuss this.";
        return {
            ...toRefs(userInfo),
            placeholderMessage,
            handleSubmit,
            showModal,
            isActive,
            labelColor,
        };
    },
    components: { SectionHeader, SuccessInfo, }
}

</script>

<style  scoped>
.contactSyle{

}
.contactSection2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   margin: 5px;
   padding:5px;
 
}
.contactSection2 h1{
    /* font-size:45em; */
    color:blue;
    font-size:50px;
    margin-bottom: -10px;
}
.contactSection2 pre{
    /* font-size:25em; */
    color:white;
    font-family: 'Times New Roman', Times, serif;
    font-weight: italic;
}
form{
    display:flex;
   flex-direction: column;
   /* margin-left:15px; */
  row-gap: 2em;

  
}
.nameAndEmailStyle {
    /* display:grid;
    grid-template-columns: 2fr 2fr;
    grid-column-gap: 5em; */
}
/* .nameAndEmailStyle  span{
display: grid;
grid-template-rows: 2fr 2fr;
} */
.nameAndEmailStyle   input{
    height:35px;
   background:none;
   border: none;
   border-bottom: 2px solid white;
   font-size:25px;
   color:white;
}
.nameAndEmailStyle input:focus{
outline: none;
border-bottom: 3px solid #b0fc38;

}
.nameAndEmailStyle input:focus::placeholder{
color:transparent;
}
.contactSection1{
   display:grid;
   grid-template-columns: 3fr 3fr 3fr;
}

.messageSection{
    display:flex;
    flex-direction: column;
    margin-top:10px;
    row-gap: 1em;
   
}
.messageSection textarea{
    font-size:20px;
    overflow-y: scroll;
    height:80px;
    background:none;
    border:none;
    border-bottom: 2px solid white;
    color:white;
    font-family: 'Times New Roman', Times, serif;
    line-height: 1.5em;
}

.messageSection textarea:focus{
    outline:none;
    border-bottom: 3px solid #b0fc38;
}
.messageSection textarea:focus::placeholder{
    color:transparent
}
.contactButtonStyle{
   display:flex;
   justify-content: center;
}
.contactButtonStyle button{
    width:200px;
    height:40px;
    /* background:none; */
    border: 1px solid #b0fc38;
    font-size:25px;
    color:white;
    background: linear-gradient(to left, blue 0%, blue 50%, black 50%, black 100%);
  background-size: 200% 100%;
  transition: background-position .5s ease-out;
}
.contactButtonStyle button:hover{
 box-shadow: 5px 5px  #CCF381;
  margin-top:-3px;
  margin-left: -3px;
  background:none;
    border: 1px solid #b0fc38;
    font-size:25px;
    /* background-color:white; */
    /* color:black; */
    background-position: 100% 0;

}
.active{
    color:#b0fc38;
}
</style>