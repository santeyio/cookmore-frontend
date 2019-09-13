<template>
  <div class="container">
    <h1>{{ recipeName }}</h1>
    <p>{{ userName }}</p>
    <p>{{ recipeDescription }}</p>
    <section>{{ recipeInfo }}</section>
    <div>
        <div>{{ ingredients }}</div>
        <div>{{ directions }}</div>
    </div>
    <div>{{ equipment }}</div>
    <div>{{ notes }}</div>
  </div>
</template>

<script>
export default {
  name: 'RecipeForm',
  data() {
    return {
      recipeName: 'Basic Recipe',
      userName: 'Amy Hayashida',
      recipeDescription: 'Quick description of basic recipe',
      recipeYieldMin: '4',
      recipeYieldMax: '6',
      activeTime: '30 minutes',
      cookingTime: '45 minutes',
      ingredients: '1/2 tsp baking soda, 4 lbs potatoes, 5 tbls olive oil, 3 cloves garlic, rosemary, parsley',
      directions: '1. adjust oven rack to center position, 2. combine oil, pepper, cook',
      equipment: 'baking sheet, fine-mesh strainer',
      notes: 'be sure to chop the potatoes finely',
    };
  },
  computed: {
    recipeInfo() {
      return `${this.recipeYieldMin} to ${this.recipeYieldMax} ${this.activeTime} ${this.cookingTime}`;
    },
  },
};
</script>

<style scoped>
h1 {
  color: pink;
}
