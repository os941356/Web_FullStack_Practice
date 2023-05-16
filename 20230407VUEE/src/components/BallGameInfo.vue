<template>
  <BallGameInfoTitle :title="title" @open="toggleBallGameInfoSeriesAndGames" />
  <BallGameInfoSeriesAndGames
    v-for="(value, key) in 2"
    :key="value"
    :series="key"
    :games="value"
  />
  <!-- :class="isSeriesAndGamesHidden ? '' : 'hidden'" -->
</template>

<script>
import BallGameInfoTitle from "./BallGameInfoTitle.vue";
import BallGameInfoSeriesAndGames from "./BallGameInfoSeriesAndGames.vue";
export default {
  data() {
    return {
      isSeriesAndGamesHidden: true,
    };
  },
  methods: {
    toggleBallGameInfoSeriesAndGames() {
      this.isSeriesAndGamesHidden = !this.isSeriesAndGamesHidden;
      console.log("父組件methods調用了");
    },
  },

  props: {
    title: {
      type: String,
    },
    series: {
      type: String,
    },

    SeriesAndGames: {
      type: Object,
    },
  },
  components: {
    BallGameInfoTitle,
    BallGameInfoSeriesAndGames,
  },
};
</script>
