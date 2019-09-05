<template>
  <div>
    <b-navbar sticky="true" variant="light">
      
      <div class="nav-wrapper">
        <h1>CookMore</h1>
        <Slide left>
          <a href="/dash">Dashboard</a>
          <a href="/calendar">Calendar</a>
          <a href="/shopping-list">Shopping List</a>
          <a href="/recipes">Recipes</a>
          <a href="/friends">Friends</a>
        </Slide>
      </div>
    </b-navbar>  
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
.nav-wrapper {
  width:100%;
  /* display: flex;
  justify-content: flex-end; */
}
</style>
