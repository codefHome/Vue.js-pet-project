<template>
   <textarea v-model="modelValue" row="3" column="25"></textarea>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const modelValue=ref('')
</script>

<style  scoped>
textarea{
    font-size:15px;
    background:none;
    border:none;
    border-bottom: 2px solid black;
    overflow-y:scroll;
    margin: 3px;
    padding:1px;
}
textarea:focus{
    outline:none;
    color:blue;
    border-bottom: 2px solid blue;
}
textarea:focus::placeholder{
    color:transparent
}
</style>