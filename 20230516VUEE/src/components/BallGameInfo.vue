<template>
  <BallGameInfoTitle
    :title="title"
    :bgcolor="bgcolor"
    @open="toggleBallGameInfoSeriesAndGames"
  />
  <BallGameInfoSeriesAndGames
    v-for="(value, key) in SeriesAndGames"
    :key="value"
    :series="key"
    :games="value"
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
    toggleBallGameInfoSeriesAndGames() {},
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
