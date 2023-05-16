<template>
  <b-container>
  <b-row class="d-flex ">
    <b-col sm="6">
      <h2>This is a column on small screens.</h2>
      <p>This is some text in the column.</p>
    </b-col>
    <b-col sm="6">
      <h2>This is a column on medium and large screens.</h2>
      <p>This is some text in the column.</p>
    </b-col>
  </b-row>
</b-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      color: 'red',
    };
  },
  // mounted() {
  //   const mediaQuery = window.matchMedia('(max-width: 600px)');
  //   if (mediaQuery.matches) {
  //     this.color = 'yellow';
  //   } else {
  //     this.color = 'green';
  //   }
  // },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: blue;
}

@media (width <= 600px) {
  .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: red;
}
}
</style>