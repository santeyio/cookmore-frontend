<template>
  <div class="container">
    <div>
        <dl class="info-header">Yield</dl>
        <dl>{{ recipeYield }}</dl>
    </div>
    <div>
        <dl class="info-header">Active Time</dl>
        <dl>{{ activeTime }}</dl>
    </div>
    <div>
        <dl class="info-header">Total Time</dl>
        <dl>{{ totalTime }}</dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeFormInfo',
  data() {
    return {
      recipeYieldMin: '4',
      recipeYieldMax: '6',
      activeTime: ' 30 ',
      cookingTime: '45',
    };
  },
  computed: {
    recipeYield() {
      return `Serves ${this.recipeYieldMin} to ${this.recipeYieldMax}`;
    },
    totalTime() {
      return parseInt(this.activeTime, 10) + parseInt(this.cookingTime, 10);
    },
  },
};
</script>

<style scoped>
h1 {
  color: pink;
}
.container {
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.info-header {
  font-size: 1.1rem;
}
</style>
