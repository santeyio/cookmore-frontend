<template>
    <div class="meal-container">
        <b-card class="meal" v-if="Breakfast" header='Breakfast'>
            <b-button href='/recipes' variant="secondary">Placeholder recipe name</b-button>
        </b-card>
        <b-card class="meal" v-if="Lunch" header='Lunch'>
            <b-button href='/recipes' variant="secondary">Placeholder recipe name</b-button>
        </b-card>
        <b-card class="meal" v-if="Dinner" header='Dinner'>
            <b-button href='/recipes' variant="secondary">Placeholder recipe name</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  name: 'menu',
  components: {
  },
  data() {
    return {
      breakfast: true,
      lunch: true,
      dinner: true,
    };
  },
};


</script>

<style scoped>
.meal-container {
  display:flex;
  justify-content: space-around;
}

.meal {
}
</style>
