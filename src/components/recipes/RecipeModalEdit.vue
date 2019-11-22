<template>
    <div>
        <b-card class="container" :title="RecipeModalTitle">
            <b-card-sub-title>{{ user.username }}</b-card-sub-title>
            <b-row class="description">
                <mdb-input label="Recipe Description" v-model="value" />
            </b-row>
            <b-row>
                <RecipeFormInfo />
            </b-row>
            <b-row class="recipe-instructions">
                <b-col>
                    <h5 class="section-title">Ingredients</h5>
                    <input type="text">
                </b-col>
                <b-col cols="8">
                    <h5>Directions</h5>
                    <mdb-input label="Directions" v-model="value" />
                </b-col>
            </b-row>
            <b-row>
                <b-card
                title="Equipment"
                >
                <b-card-text>
                    <input type="text">
                </b-card-text>
                </b-card>
                <b-card title="Recipe Notes">
                <b-card-text>
                    <input type="text">
                </b-card-text>
                </b-card>
            </b-row>
        </b-card>
    </div>
</template>    

<script>
import { user } from '@/exampleData.js';
// import RecipeModalTitle from '@/components/recipes/RecipeModalTitle.vue';
// import RecipeModalDescription from '@/components/recipes/RecipeModalDescription.vue';
// import RecipeModalDirections from '@/components/recipes/RecipeModalDirections.vue';
// import RecipeModalIngredients from '@/components/recipes/RecipeModalIngredients.vue';
// import RecipeModalEquipment from '@/components/recipes/RecipeModalEquipment.vue';
// import RecipeModalNotes from '@/components/recipes/RecipeModalNotes.vue';
import RecipeFormInfo from '@/components/recipes/RecipeFormInfo.vue';
import { mdbInput } from 'mdbvue';

export default {
  name: 'RecipeModal',
  components: {
  //     RecipeModalTitle,
  //     RecipeModalDescription,
  //     RecipeModalDirections,
  //     RecipeModalIngredients,
  //     RecipeModalEquipment,
  //     RecipeModalNotes,
      RecipeFormInfo,
      mdbInput,
  },

  data() {
    return {
      user: user,
    };
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

    