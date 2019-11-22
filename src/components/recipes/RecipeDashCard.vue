<template>
  <div class="recipe-card-container">
    <div class="recipe-card" v-for="recipe in recipeArray.slice().reverse()" v-bind:key="recipeArray.id">
        <mdb-card>
          <mdb-card-image :src="recipe.image"
          alt ="Card image cap" target="_blank"></mdb-card-image>
          <mdb-card-body>
            <mdb-card-title>{{ recipe.name }}</mdb-card-title>
            <mdb-card-text>{{ recipe.description }}</mdb-card-text>
            <mdb-stretched-link :href="`/recipe/${recipe.id}`" class="stretched-link"></mdb-stretched-link>
          </mdb-card-body>
        </mdb-card>
    </div>
  </div>
</template>

<script>
import {
  mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbStretchedLink,
} from 'mdbvue';
import { userRecipeArray } from '@/exampleData';

export default {
  name: 'RecipeDashCard',
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbStretchedLink,
  },
  data() {
    return {
      recipeArray: userRecipeArray,
    };
  },
};


</script>

<style scoped>
h1 {
  color: pink;
}

.recipe-card-container {
  display:flex;
  justify-content: space-around;
  flex-wrap:wrap;
  align-items: stretch;
}

.recipe-card {
  /* max-width: 25vw; */
  /* flex-basis: 24vw; */
  max-width:24vw;
  padding: 1%;
}

</style>
