<template>
    <b-col>
      <Label :style="{ color: labelColor('companyName') }">Company Name</Label>
          <Input
            v-model="userInfo.companyName"
            @focus="userInfo.isActive = 'companyName'"
            @blur="userInfo.isActive = ''"
            placeholder="Type Company Name"
          />
          
    </b-col>
         
</template>

<script setup lang="ts">
import {reactive} from 'vue'
const userInfo=reactive({
roleDetail:[],
isActive:'',
count:1,
companyName:''

})

const props=defineProps(["addNewTextArea","removeTextArea","labelColor"])
</script>

<style scoped>

</style>