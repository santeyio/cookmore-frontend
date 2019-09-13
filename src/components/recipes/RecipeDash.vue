<template>
  <div>
    <Header></Header>
    <h1> {{ title }} </h1>
    <mdb-container>
      <mdb-col md="4">
        <RecipeCard></RecipeCard>
        <RecipeForm></RecipeForm>
      </mdb-col>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbCol } from 'mdbvue';
import Header from '@/components/nav/Header.vue';
import RecipeCard from '@/components/recipes/RecipeCard.vue';
import RecipeForm from '@/components/recipes/RecipeForm.vue';

export default {
  name: 'RecipeDash',
  components: {
    Header,
    RecipeCard,
    RecipeForm,
    mdbContainer,
    mdbCol,
  },
  data() {
    return {
      title: 'Welcome to the Lab',
    };
  },
};


</script>

<style scoped>
h1 {
  color: pink;
}
