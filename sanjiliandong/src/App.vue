<template>
  <div id="app">
    <img class="img" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.img {
  width: 3rem;
  margin-left: 30%;
}
</style>
