<template>
    <div>
        <b-card class="container" :title="RecipeModalTitle">
            <b-card-sub-title>{{ user.username }}</b-card-sub-title>
            <b-row class="description">
                <RecipeModalDescription />
            </b-row>
            <b-row>
                <RecipeFormInfo />
            </b-row>
            <b-row class="recipe-instructions">
                <b-col>
                    <RecipeModalIngredients />
                </b-col>
                <b-col cols="8">
                    <RecipeModalDirections />
                </b-col>
            </b-row>
            <b-row>
                <b-card
                title="Equipment"
                >
                <b-card-text>
                    <RecipeModalEquipment />
                </b-card-text>
                </b-card>
                <b-card title="Recipe Notes">
                <b-card-text>
                    <RecipeModalNotes />
                </b-card-text>
                </b-card>
            </b-row>
        </b-card>
    </div>
</template>    

<script>
import { user } from '@/exampleData.js';
import RecipeModalTitle from '@/components/recipes/RecipeModalTitle.vue';
import RecipeModalDescription from '@/components/recipes/RecipeModalDescription.vue';
import RecipeModalDirections from '@/components/recipes/RecipeModalDirections.vue';
import RecipeModalIngredients from '@/components/recipes/RecipeModalIngredients.vue';
import RecipeModalEquipment from '@/components/recipes/RecipeModalEquipment.vue';
import RecipeModalNotes from '@/components/recipes/RecipeModalNotes.vue';
import RecipeFormInfo from '@/components/recipes/RecipeFormInfo.vue';

export default {
  name: 'RecipeModal',
  components: {
      RecipeModalTitle,
      RecipeModalDescription,
      RecipeModalDirections,
      RecipeModalIngredients,
      RecipeModalEquipment,
      RecipeModalNotes,
      RecipeFormInfo,
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

    