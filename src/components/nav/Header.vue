<template>
  <div>
    <b-navbar sticky="true" variant="light">
      <h1>CookMore</h1>
    </b-navbar>
    <Slide left>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';
export default {
  name: 'Header',
  components: {
    Slide,
  },
};
</script>

<style scoped>
h1 {
  color: pink;
};
</style>
