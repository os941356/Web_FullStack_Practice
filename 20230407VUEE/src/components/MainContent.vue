<template>
  <div class="w-full">
    <BallGameInfo
      v-for="nbaData in nbaDatas?.aData || []"
      :key="nbaData"
      :SeriesAndGames="null"
      :title="null"
      :series="null"
      :bgcolor="'bg-[#29a75e]'"
    />
    <!-- <BallGameInfo
      v-if="nbaTitle" //
      :title="nbaTitle"
      :series="'NBA冠軍聯賽'"
      :bgcolor="'bg-[#29a75e]'"
    />
    <BallGameInfo
      v-if="afcTitle"
      :title="nbaTitle"
      :series="'亞足冠軍聯賽'"
      :bgcolor="'bg-[#29a75e]'"
    /> -->
  </div>
</template>

<script>
import BallGameInfo from "./BallGameInfo.vue";
import axios from "axios";

export default {
  provide: {
    title: "123",
  },

  data() {
    return {
      nbaDatas: null,
    };
  },

  mounted() {
    axios
      .post(
        "https://demo801.dtap000s3.com/Project/t_ball00/EndTest/api/client_use/getFixOdds.php",
        {
          nSid: 1,
        }
      )
      .then((response) => {
        this.nbaDatas = response.data;
        console.log(this.nbaDatas.aData);
      });
    // ffffffffff
    // axios.get(
    //   "https://demo801.dtap000s3.com/Project/t_ball00/EndTest/api/client_use/getFixOdds.php?nSid=1"
    // );
    // .then((response) => {
    //   this.nbaDatas = response.data;
    //   console.log(this.nbaDatas);
    // });},
  },
  components: { BallGameInfo },
};
</script>
