<template>
  <div>
    <RecipeForm>
    </RecipeForm>
  </div>
</template>

<script>
import RecipeForm from '@/components/recipes/RecipeForm.vue';

export default {
  name: 'RecipePage',
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
