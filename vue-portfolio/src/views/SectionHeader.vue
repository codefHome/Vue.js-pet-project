<template>
  <b-row class="mb-sm-0 mb-lg-4">
      <b-col xsm="12" sm="12" md="6" lg="5">
        <h1>{{ sectionTitle }}</h1>
      </b-col>
      <b-col xsm="12" sm="12" md="6" lg="5">
        <span>
          <hr />
        </span>
      </b-col>
    </b-row>
</template>

<script setup lang="ts">
const props=defineProps({
    sectionTitle:String
})
</script>

<style lang="scss" scoped>

</style>