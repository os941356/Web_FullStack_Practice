<template>
  <BallGameInfoTitle
    :title="title"
    :bgcolor="bgcolor"
    @open="toggleBallGameInfoSeriesAndGames"
  />
  <BallGameInfoSeriesAndGames
    v-for="(SeriesAndGames, index) in SeriesAndGames"
    :key="index"
    :series="series"
    :class="isSeriesAndGamesHidden ? '' : 'hidden'"
  />
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
    bgcolor: {
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
