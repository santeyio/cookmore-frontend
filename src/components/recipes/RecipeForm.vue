<template>
  <div>
    <Header />
    <b-card class="container" :title="recipe.name">
      <b-card-sub-title>{{ recipe.username }}</b-card-sub-title>
      <b-row class="description">
        <p>{{ recipe.description }}</p>
      </b-row>
      <b-row>
        <RecipeFormInfo />
      </b-row>
      <b-row class="recipe-instructions">
          <b-col>
            <h5 class="section-title">Ingredients</h5>
            <dl v-for="ingredient in recipe.ingredients" :key="ingredient.id">
              {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.item }}
            </dl>
          </b-col>
          <b-col cols="8">
            <h5>Directions</h5>
            <dl v-for="direction in recipe.directions" :key="direction.id">
              {{ direction.order }}. {{ direction.step }}
            </dl>
          </b-col>
      </b-row>
      <b-row>
        <b-card
        title="Equipment"
        >
          <b-card-text>{{ recipe.equipment }}</b-card-text>
        </b-card>
        <b-card title="Recipe Notes">
          <b-card-text>{{ recipe.notes }}</b-card-text>
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
      recipe: exampleRecipe[this.$route.params.id]
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
