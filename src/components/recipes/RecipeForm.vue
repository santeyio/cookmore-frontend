<template>
  <div>
    <Header />
    <b-card class="container" :title="recipeName" subtitle="userName">
      <!-- <b-row class="title">
        <card-title>{{ recipeName }}</card-title>
      </b-row> -->
      <b-card-sub-title>{{ userName }}</b-card-sub-title>
      <b-row class="description">
        <p>{{ recipeDescription }}</p>
      </b-row>
      <b-row>
        <RecipeFormInfo />
      </b-row>
      <b-row class="recipe-instructions">
          <b-col>
            <h5 class="section-title">Ingredients</h5>
            <dl v-for="ingredient in ingredients" :key="ingredient.id">
              {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.item }}
            </dl>
          </b-col>
          <b-col cols="8">
            <h5>Directions</h5>
            <dl v-for="direction in directions" :key="direction.id">
              {{ direction.order }}. {{ direction.step }}
            </dl>
          </b-col>
      </b-row>
      <b-row>
        <b-card
        title="Equipment"
        >
          <b-card-text>{{ equipment }}</b-card-text>
        </b-card>
        <b-card title="Recipe Notes">
          <b-card-text>{{ notes }}</b-card-text>
        </b-card>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import Header from '@/components/nav/Header.vue';
import RecipeFormInfo from '@/components/recipes/RecipeFormInfo.vue';
import { exampleRecipe } from '@/exampleData.js';

export default {
  name: 'RecipeForm',
  components: {
    Header,
    RecipeFormInfo,
  },

  data() {
    return {
      recipeid: exampleRecipe.id,
      recipeName: exampleRecipe.name,
      userName: exampleRecipe.username,
      recipeDescription: exampleRecipe.description,
      recipeYieldMin: exampleRecipe.yield_min,
      recipeYieldMax: exampleRecipe.yield_max,
      activeTime: exampleRecipe.active_time,
      cookingTime: exampleRecipe.cooking_time,
      ingredients: exampleRecipe.ingredients,
      directions: exampleRecipe.directions,
      equipment: exampleRecipe.equipment,
      notes: exampleRecipe.notes,
    };
  },
  computed: {
    recipeInfo() {
      return `${this.recipeYieldMin} to ${this.recipeYieldMax} ${this.cookingTime}`;
    },
  },
};
</script>

<style scoped>
h1 {
  color: #df7030;
}
.section-title {
  text-align: justify;
}

.recipe-instructions {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
}
</style>
