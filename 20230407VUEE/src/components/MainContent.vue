<template>
  <div class="w-full">
    <BallGameInfo
      v-for="gameData in gameDatas || []"
      :key="gameData"
      :SeriesAndGames="SeriesAndGamesPost"
      :title="title"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";
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
    const oddDatas = ref(null);
    const SeriesAndGamesPost = ref(null);
    const title = ref("");
    const store = useGameStore();
    const storeGameTable = useBallGameInfoTable();
    const BallGameData = useBallGameData();

    // 進入網站刷新nba;
    axios.get("https://yuanspeed.com/aaa.php").then((response) => {
      console.log(response.data);
      gameDatas.value = response.data;
      oddDatas.value = gameDatas.value.aData.aOdds;
      title.value = "NBA";
      SeriesAndGamesPost.value = gameDatas.value.aData.aFixtures;
      storeGameTable.aOdds = gameDatas.value.aData.aOdds;
    });

    // watch(
    //   () => BallGameData.allData,
    //   (newVal) => {
    //     oddDatas.value = gameDatas.value.aData.aOdds;
    //     title.value = store.chooseGameType;
    //     SeriesAndGamesPost.value = gameDatas.value.aData.aFixtures;
    //     storeGameTable.aOdds = gameDatas.value.aData.aOdds;
    //   }
    // );

    return { gameDatas, title, store, SeriesAndGamesPost, oddDatas };
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
