<template>
  <div id="page-wrap">
    <Header></Header>
    <div class="container">
      <h1> {{ title }} </h1>
      <div v-for="day in getDays()">
        <b-card
          :title="day"
        >
          <Menu></Menu>
          <!-- <div class="meal-container">
            <b-card class="meal" v-if="Breakfast" header='Breakfast'>
              <b-button href='/recipes' variant="secondary">Placeholder recipe name</b-button>
            </b-card>
            <b-card class="meal" v-if="Lunch" header='Lunch'>
              <b-button href='/recipes' variant="secondary">Placeholder recipe name</b-button>
            </b-card>
            <b-card class="meal" v-if="Dinner" header='Dinner'>
              <b-button href='/recipes' variant="secondary">Placeholder recipe name</b-button>
            </b-card>
          </div> -->
        </b-card>
      </div>
    </div> -->
  </div>
</template>

<script>
import Header from '@/components/nav/Header.vue';
import Menu from '@/components/nav/Menu.vue';

export default {
  name: 'nav-page',
  components: {
    Header,
    Menu,
  },
  data() {
    return {
      title: "What's Cookin'",
      // Breakfast: true,
      // Lunch: true,
      // Dinner: true,
      // days: [
      //   {
      //     dayId: 1,
      //     day: 'Monday',
      //     // breakfast: 0,
      //     // lunch: 1,
      //     // dinner: 1,
      //   },
      //   {
      //     dayId: 2,
      //     day: 'Tuesday',
      //     // breakfast: 0,
      //     // lunch: 1,
      //     // dinner: 1,
      //   },
      //   {
      //     dayId: 3,
      //     day: 'Wednesday',
      //   },
      //   {
      //     dayId: 4,
      //     day: 'Thursday',
      //   },
      //   {
      //     dayId: 5,
      //     day: 'Friday',
      //   },
      //   {
      //     dayId: 6,
      //     day: 'Saturday',
      //   },
      //   {
      //     dayId: 7,
      //     day: 'Sunday',
      //   },
      // ],
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
  color: pink;
}

.meal-container {
  display:flex;
  justify-content: space-around;
  flex-wrap:wrap;
}

.meal {
}
</style>
