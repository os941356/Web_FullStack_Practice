<template>
  <div class="w-full">
    <BallGameInfo
      v-for="gameData in BallGameData.allData || []"
      :key="gameData"
      :SeriesAndGames="SeriesAndGamesPost"
      :title="title"
      :bgcolor="'bg-[#29a75e]'"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import {
  useGameStore,
  useBallGameInfoTable,
  useBallGameData,
} from "@/stores/choosedgame";
import BallGameInfo from "./BallGameInfo.vue";
import axios from "axios";

export default {
  components: { BallGameInfo },
  setup() {
    const gameDatas = ref(null);
    const SeriesAndGamesPost = ref(null);
    const title = ref("");
    const store = useGameStore();
    const storeGameTable = useBallGameInfoTable();
    const BallGameData = useBallGameData();

    // 進入網站刷新nba;
    // axios.get("https://yuanspeed.com/aaaa.php").then((response) => {
    //   console.log(response.data);
    //   title.value = "NBA";
    //   BallGameData.allData = response.data; //用pinia循環ballgameinfo
    //   SeriesAndGamesPost.value = BallGameData.allData.aData.aFixtures;
    //   storeGameTable.aOdds = BallGameData.allData.aData.aOdds;
    // });

    return {
      gameDatas,
      title,
      store,
      SeriesAndGamesPost,

      BallGameData,
    };
  },
};
</script>

<!-- option APi -->
<!-- <script>
import BallGameInfo from "./BallGameInfo.vue";
import axios from "axios";
import { useGameStore } from "@/stores/choosedgame";
const store = useGameStore;
export default {
  watch:{
    store.chooseGameType:{
      
    }
  },
  data() {
    return {
      nbaDatas: null,
    };
  },
  provide: {
    title: "123",
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
</script> -->
