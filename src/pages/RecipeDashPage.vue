<template>
  <div>
    <RecipeDash>
    </RecipeDash>
  </div>
</template>

<script>
import RecipeDash from '@/components/recipes/RecipeDash.vue';

export default {
  name: 'RecipeDashPage',
  components: {
    RecipeDash,
  },
};
</script>

<style scoped>
h1 {
  color: pink;
}
</style>
