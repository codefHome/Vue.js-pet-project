<template >
  
<div  class="contactSyle">
    <section class="contactSection1">
     <h1>Want to Contact Me</h1>
    <CircleList/>
     <span> 
     <hr/>
      </span>
    </section>
<section class="contactSection2">
<h1>Send me a Message!</h1>
<pre>Got a question or proposal, or just want
    to say hello? Go head.
</pre>
</section>
<section class="contactSection3">
<form @submit.prevent="handleSubmit">
    
    <section class="nameAndEmailStyle">
        <span>
        <label>Your Name</label>
    <input type="text" placeholder="Enter your name" v-model="senderName"/>
        </span>
        <span>
            <label>Email Address</label>
    <input type="email" placeholder="Enter your email address" v-model="email"/>
        </span>
    </section>
    <section class="messageSection">
        <label>Your Message</label>
   <textarea rows="2" :placeholder="placeholderMessage" v-model="message"></textarea>
    </section>
    <section class="contactButtonStyle">
    
        <button type="submit">Send Email</button>
    </section>
    
</form>
</section>

</div>
<SuccessInfo :showModal="showModal"/>
</template>

<script  lang="ts">
import {reactive,toRefs,ref} from 'vue'
import CircleList from './CircleList.vue'
import {useStateContainer} from '@/stores/store'
import SuccessInfo from './SuccessInfo.vue'
export default{
    setup() {
        const userInfo = reactive({
            senderName: "",
            email: "",
            message: ""
        });
        const showModal=ref(false)
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
            showModal
        };
    },
    components: { CircleList,SuccessInfo }
}

</script>

<style  scoped>
.contactSyle{

}
.contactSection2{
    display:flex;
    flex-direction: column;
    align-items: center;
    
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
  row-gap: 2em;
}
.nameAndEmailStyle {
    display:grid;
    grid-template-columns: 2fr 2fr;
    grid-column-gap: 5em;
}
.nameAndEmailStyle  span{
display: grid;
grid-template-rows: 2fr 2fr;
}
.nameAndEmailStyle  span input{
    height:35px;
   background:none;
   border: none;
   border-bottom: 2px solid white;
   font-size:25px;
   color:white;
}
.nameAndEmailStyle  span input:focus{
outline: none;
}
.nameAndEmailStyle span input:focus::placeholder{
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

</style>