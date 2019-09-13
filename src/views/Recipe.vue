<template>
  <div>
    <RecipePage>
    </RecipePage>
  </div>
</template>

<script>
import RecipePage from '@/components/recipes/RecipePage.vue';

export default {
  name: 'RecipeDashboard',
  components: {
    RecipeForm,
  },
};
</script>

<style scoped>
h1 {
  color: pink;
}
</style>
