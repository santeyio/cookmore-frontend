<template>
  <div id="page-wrap">
    <Header></Header>
    <div class="container">
      <h1> {{ title }} </h1>
      <div class="days" v-for="day in getDays()">
        <b-card
          :header="day"
        >
          <b-card-text>Breakfast | Lunch | Dinner</b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/nav/Header.vue';

export default {
  name: 'nav-page',
  components: {
    Header,
  },
  data() {
    return {
      title: "What's Cookin'",
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

.days {
  font: 200;
}
</style>
