<template>
    <label :style="{color}">
        <slot></slot>
    </label>
</template>
labelValue
<script setup lang="ts">
import {ref} from 'vue'
const color=ref('black')

</script>

<style scoped>
label{
    font-size:15px;
    padding:3px;
    background:none;
    margin-bottom:5px;
    margin-top:7px;

}
</style>