<template>
  <div>
    <NavPage>
    </NavPage>
  </div>
</template>

<script>
import NavPage from '@/components/nav/NavPage.vue';

export default {
  name: 'ShoppingList',
  components: {
    NavPage,
  },
};
</script>

<style scoped>
h1 {
  color: pink;
}
</style>
