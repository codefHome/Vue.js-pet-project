<template>
  <b-container gap-20 >
    <span class="contactSection">
        <SectionHeader sectionTitle="Want to Contact Me" />
    </span>
   
    <b-row>
      <b-col class="sendMeStyle" xsm="12" sm="12" md="12" lg="12">
        <h1>Send me a Message!</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-2">
        <pre>
Got a question or proposal, or just want
    to say hello? Go head.
</pre
        >
      </b-col>
    </b-row>
    <b-row class="contactSection3">
      <form @submit.prevent="handleSubmit" class="formStyle">
        <b-row class="nameAndEmailStyle">
          <b-row>
            <label :style="{ color: labelColor('name'), textAlign: 'center', marginBottom: '15px' }"
              >Your Name</label
            >
            <input
              @focus="isActive = 'name'"
              @blur="isActive = ''"
              type="text"
              placeholder="Enter your name"
              v-model="senderName"
              :style="{ textAlign: 'center', fontSize: '16px',marginBottom:'15px' }"
            />
      
          </b-row>
          <b-row>
            <label :style="{ color: labelColor('email'), textAlign: 'center', marginBottom: '15px',marginTop:'15px' }">Email Address</label>
            <input
              @focus="isActive = 'email'"
              @blur="isActive = ''"
              type="email"
              placeholder="Enter your email address"
              v-model="email"
              :style="{ textAlign: 'center', fontSize: '16px',marginBottom:'15px'  }"
             
            />
          </b-row>
          <b-row >
          <label :style="{ color: labelColor('message'), textAlign: 'center', marginBottom: '15px',marginTop:'15px' }">Your Message</label>
          <textarea
            @focus="isActive = 'message'"
            @blur="isActive = ''"
            rows="4"
        :placeholder="placeholderMessage"
            v-model="message"
            :style="{ textAlign: 'center', fontSize: '16px', }"
          ></textarea>
        </b-row>
        </b-row>
       
        <section class="contactButtonStyle">
          <button type="submit">Send Email</button>
        </section>
      </form>
    </b-row>
  </b-container>
  <SuccessInfo :showModal="showModal" />
</template>

<script lang="ts">
import { reactive, toRefs, ref } from 'vue'
import { useStateContainer } from '@/stores/store'
import SuccessInfo from './SuccessInfo.vue'
import SectionHeader from './SectionHeader.vue'
export default {
  setup() {
    const userInfo = reactive({
      senderName: '',
      email: '',
      message: ''
    })
    const showModal = ref(false)
    const isActive = ref('')

    const labelColor = (value: string) => {
      return isActive.value === value ? '#b0fc38' : 'white'
    }
    const stateContainer = useStateContainer()
    const handleSubmit = async () => {
      const result = await stateContainer.sendMail({
        senderName: userInfo.senderName,
        email: userInfo.email,
        message: userInfo.message
      })
      userInfo.senderName = ''
      userInfo.email = ''
      userInfo.message = ''
      if (result === 'Email sent Successfully') {
        showModal.value = true
        setTimeout(() => {
          showModal.value = false
        }, 8000)
      }
    }

    const placeholderMessage =
      'Enter your message'
    return {
      ...toRefs(userInfo),
      placeholderMessage,
      handleSubmit,
      showModal,
      isActive,
      labelColor
    }
  },
  components: { SectionHeader, SuccessInfo }
}
</script>

<style scoped>
.contactStyle {
  display: flex;
  flex-direction: column;
  width: 100%;

}
.contactSection2 {
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 5px;
}
.labelAndInput {
  display: flex;

  gap: 20px;
}
.sendMeStyle {
  text-align: center;
  color: #b0fc38;
  font-size: 50px;
 
}
pre {
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-weight: italic;
  text-align: center;
  background: none;
  width:100%;
  margin-bottom: 20px;
}
form {
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  margin-top: 20px;
}


.nameAndEmailStyle input {
  height: 35px;
  background: none;
  border: none;
  border-bottom: 2px solid white;
  font-size: 25px;
  color: white;

}
.nameAndEmailStyle input:focus {
  outline: none;
  border-bottom: 3px solid #b0fc38;
}
.nameAndEmailStyle input:focus::placeholder {
  color: transparent;
}
.contactSection1 {
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
}

.messageSection {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  row-gap: 1em;
}
.nameAndEmailStyle textarea {
  font-size: 20px;
  background: white;
  border: none;
  border-bottom: 2px solid white;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  line-height: 1.5em;
}

.nameAndEmailStyle textarea:focus {
  outline: none;
  border: 3px solid #b0fc38;
}
.nameAndEmailStyle textarea:focus::placeholder {
  color: transparent;
}
.contactButtonStyle {
  display: flex;
  justify-content: center;
}
.contactButtonStyle button {
  width: 200px;
  height: 40px;
  /* background:none; */
  border: 1px solid #b0fc38;
  font-size: 25px;
  color: white;
  background: linear-gradient(to left, blue 0%, blue 50%, black 50%, black 100%);
  background-size: 200% 100%;
  transition: background-position 0.5s ease-out;
}
.contactButtonStyle button:hover {
  box-shadow: 5px 5px #ccf381;
  margin-top: -3px;
  margin-left: -3px;
  background: none;
  border: 1px solid #b0fc38;
  font-size: 25px;
  /* background-color:white; */
  /* color:black; */
  background-position: 100% 0;
}
.active {
  color: #b0fc38;
}

.contactSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
</style>
