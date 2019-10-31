<template>
  <div>
    <Header></Header>
    <h1> {{ title }} </h1>
    <div>
      <!-- currently treating create and search as two buttons with the same settings "action-button", but search should become a search bar -->
      <b-button class="action-button"><i class="fas fa-plus fa-3x align-middle"></i> Create</b-button>
      <b-button class="action-button"><i class="fas fa-search fa-3x align-middle"></i> Search</b-button>
    </div>

    <recipeDashCard />
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue';
import Header from '@/components/nav/Header.vue';
import RecipeDashCard from '@/components/recipes/RecipeDashCard.vue';

export default {
  name: 'RecipeDash',
  components: {
    Header,
    RecipeDashCard,
    mdbContainer,
    mdbRow,
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
  color: #E85A4F;
}

.action-button {
  background-color:#E85A4F;
}
</style>
