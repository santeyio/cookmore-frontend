<template>
  <div id="page-wrap">
    <Header></Header>
    <div class="container">
      <h1> {{ title }} </h1>
      <div v-for="day in days" :key="day.dayId">
        <section>{{ day.day }}</section>
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
      days: [
        {
          dayId: 1,
          day: 'Monday',
          // breakfast: 0,
          // lunch: 1,
          // dinner: 1,
        },
        {
          dayId: 2,
          day: 'Tuesday',
          // breakfast: 0,
          // lunch: 1,
          // dinner: 1,
        },
        {
          dayId: 3,
          day: 'Wednesday',
        },
        {
          dayId: 4,
          day: 'Thursday',
        },
        {
          dayId: 5,
          day: 'Friday',
        },
        {
          dayId: 6,
          day: 'Saturday',
        },
        {
          dayId: 7,
          day: 'Sunday',
        },
      ],
    };
  },
  methods: {
    getDays() {
      const date = new Date();
      const weekday = new Array(7);
      weekday[0] = 'Sunday';
      weekday[1] = 'Monday';
      weekday[2] = 'Tuesday';
      weekday[3] = 'Wednesday';
      weekday[4] = 'Thursday';
      weekday[5] = 'Friday';
      weekday[6] = 'Saturday';

      let today = date.getDay();
      const display = new Array(7);
      display[0] = weekday[today];

      for (let i = 0; i < 7; i += 1) {
        today += 1;
        const nextDay = today % 7;
        display[i + 1] = weekday[nextDay];
        console.log(display);
      }
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
