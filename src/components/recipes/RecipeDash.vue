<template>
  <div>
    <Header></Header>
    <h1> {{ title }} </h1>
    <div>
      <b-button v-b-modal.modal-1 class="action-button">
        <i class="fas fa-plus fa-3x align-middle"></i>
        Create
      </b-button>

      <b-modal id="modal-1"
        size="xl"
        ok-title="Publish" ok-variant="outline-success"
        cancel-variant="outline-danger">

        <template v-slot:modal-title v-if="editable">
          <b-form-input v-model="text" placeholder="Recipe Name"></b-form-input>
        </template>
        <template v-slot:modal-title v-else>
          Test
        </template>
        <RecipeModalEdit v-if="editable" />
        <RecipeModal v-else/>
      </b-modal>
      <!-- search button is a place-holder for the search bar -->
      <b-button class="action-button">
        <i class="fas fa-search fa-3x align-middle"></i>
        Search
      </b-button>
    </div>
    <recipeDashCard />
  </div>
</template>

<script>
// import { mdbContainer, mdbRow, mdbCol } from 'mdbvue';
import Header from '@/components/nav/Header.vue';
import RecipeDashCard from '@/components/recipes/RecipeDashCard.vue';
import RecipeModal from '@/components/recipes/RecipeModal.vue';
import RecipeModalEdit from '@/components/recipes/RecipeModalEdit.vue';

export default {
  name: 'RecipeDash',
  components: {
    Header,
    RecipeDashCard,
    RecipeModal,
    RecipeModalEdit,
    // mdbContainer,
    // mdbRow,
    // mdbCol,
  },
  data() {
    return {
      title: 'Welcome to the Lab',
      // edit: true,
    };
  },
  computed: {
    editable() {
      return this.$store.state.modalDisplay.editable;
    },
  },
  // methods: {
  //   publish() {
  //     this.$modalDisplay.commit('publish');
  //   },
  //   edit() {
  //     this.$modalDisplay.commit('edit');
  //   },
  // },
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
