<template variant="light">
  <div id="page-wrap" variant ="light">
    <Header></Header>
    <div class="container">
      <h1> {{ title }} </h1>
      <div v-for="day in getDays()">
        <b-card
          :title="day"
        >
          <div class="meal-container">
            <b-card class="meal" v-if="Breakfast" header='Breakfast'>
              <b-button href='/recipe' variant="light">Placeholder recipe name</b-button>
            </b-card>
            <b-card class="meal" v-if="Lunch" header='Lunch'>
              <b-button href='/recipe' variant="light">Placeholder recipe name</b-button>
            </b-card>
            <b-card class="meal" v-if="Dinner" header='Dinner'>
              <b-button href='/recipe' variant="light">Placeholder recipe name</b-button>
            </b-card>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/nav/Header.vue';
// import Menu from '@/components/nav/Menu.vue';

export default {
  name: 'nav-page',
  components: {
    Header,
    // Menu,
  },
  data() {
    return {
      title: "What's Cookin'",
      Breakfast: false,
      Lunch: false,
      Dinner: true,
    };
  },
  methods: {
    getDays() {
      const date = new Date();
      const week = [];
      const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];

      let today = date.getDay();
      week[0] = weekday[today];

      for (let i = 0; i < 6; i += 1) {
        today += 1;
        const nextDay = today % 7;
        week.push(weekday[nextDay]);
      }
      return week;
    },
  },
};


</script>

<style scoped>
h1 {
  color: #d57030;
}

.meal-container {
  display:flex;
  justify-content: space-around;
  flex-wrap:wrap;
}

</style>
