<template>
  <b-row class="mb-sm-0 mb-lg-4">
      <b-col xsm="12" sm="12" md="12" lg="12" class="headerStyle">
        <h1>{{ sectionTitle }}</h1>
      </b-col>
      <!-- <b-col xsm="12" sm="12" md="6" lg="5">
        <span>
          <hr />
        </span>
      </b-col> -->
    </b-row>
</template>

<script setup lang="ts">
const props=defineProps({
    sectionTitle:String
})
</script>

<style scoped>
.headerStyle{
  display: flex;
  justify-content: start;

  width: 100%;

}
.headerStyle h1{
 width:100%;
}
</style>