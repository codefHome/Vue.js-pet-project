<template>
   <input type="text" v-model="modelValue"/>
   
</template>

<script setup lang="ts">
import {ref} from 'vue'

   const modelValue= ref('')

</script>

<style  scoped>
input{
    display:block;
    width:100%;
    padding: 5px;
    font-size:15px;
    line-height: 1.4px;
    color:black;
    border:none;
    border-bottom: 2px solid black;
    margin:1px;
    background:none;
}

input:focus{
    outline:none;
    color:blue;
    border-bottom: 2px solid blue;

}

input:focus::placeholder{
    color:transparent
}
</style>