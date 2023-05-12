<template>
    <div>
      <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-brand href="#">My App</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#home">Home</b-nav-item>
            <b-nav-item href="#about">About</b-nav-item>
            <b-nav-item href="#contact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      
    </div>
  </template>
  
  <script lang="ts">
  import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse } from 'bootstrap-vue'
  export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
  },
}
</script>
<style scoped>
</style>