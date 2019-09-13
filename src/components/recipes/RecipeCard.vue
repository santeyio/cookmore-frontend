<template>
  <div class="container">
    <!-- <mdb-container>
      <mdb-col md="4"> -->
        <mdb-card>
          <mdb-card-image src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          alt ="Card image cap" target="_blank"></mdb-card-image>
          <mdb-card-body>
            <mdb-card-title>Basic Recipe</mdb-card-title>
            <mdb-card-text>Quick description of basic recipe</mdb-card-text>
            <mdb-stretched-link href="/recipe" class="stretched-link"></mdb-stretched-link>
          </mdb-card-body>
        </mdb-card>
      <!-- </mdb-col>
    </mdb-container> -->
  </div>
</template>

<script>
import {
  mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbStretchedLink,
} from 'mdbvue';

export default {
  name: 'RecipeCard',
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

    };
  },
};


</script>

<style scoped>
h1 {
  color: pink;
}
