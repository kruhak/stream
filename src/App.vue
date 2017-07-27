<template>
  <div id="app">
    <st-navbar></st-navbar>

    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar';

  export default {
    name: 'app',

    components: {
      "st-navbar": Navbar
    }
  }
</script>

<style>
</style>
