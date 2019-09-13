<template>
  <div>
    <b-navbar sticky="true" variant="light">
      <div class="nav-wrapper">
        <h1>CookMore</h1>
        <Slide left>
          <a class="link-properties" href="/dash">Dashboard</a>
          <a class="link-properties" href="/calendar">Calendar</a>
          <a class="link-properties" href="/shopping-list">Shopping List</a>
          <a class="link-properties" href="/recipe-dash">Recipes</a>
          <a class="link-properties" href="/friends">Friends</a>
      </Slide>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';
// import NavButton from '@/components/nav/NavButton.vue';
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
}

.nav-wrapper {
  width:100%;
  display: flex;
  justify-content: flex-end;
}

.link-properties {
  color:white;
  font-weight: 700;
}
</style>
