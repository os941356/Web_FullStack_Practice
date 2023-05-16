<template>
  <!-- part2 -->
  <div class="bg-slate-200 h-10 flex items-center">
    <ArrowPic @click="open" />
    <div>{{ series }}</div>
  </div>
  <!-- part3 -->

  <div v-for="(game, key) in games" :key="game">
    <div
      class="flex h-24"
      :class="ishidden ? 'hidden' : ''"
      v-for="(gamedish, gamedishkey) in aOdds[key]"
      :key="gamedishkey"
    >
      <!-- -------------------- -->
      <BallGameInfoTeams
        :key="gamedish"
        :team1="game.sTeam1"
        :team2="game.sTeam2"
        :date="game.sStartTime.substring(5, 10)"
        :time="game.sStartTime.substring(11, 16)"
      />
      <!--  -->

      <!-- -------------生成4表格-------------------------------------------- -->
      <div
        class="border-r bg-white h-full w-[15%]"
        v-for="gameplay in aOdds[key][gamedishkey]"
        :key="gameplay"
      >
        <!-- v-for="gameplay in aOdds[key][0]" -->
        <table class="h-full w-full">
          <!-- 迴圈生成橫向表格 -->
          <template v-for="table in gameplay" :key="table">
            <tr class="border-b h-7">
              <td class="flex justify-between items-center h-full">
                <div class="flex mx-4 w-[50%] justify-center items-center">
                  {{ table.sHdp }}
                </div>
                <button
                  @click="ClickBet(game)"
                  class="flex mx-4 text-blue-500 hover:bg-slate-300 w-[50%] justify-center items-center h-full"
                >
                  {{ table.nOdds }}
                </button>
              </td>
            </tr>
          </template>
        </table>
      </div>

      <!-- ------------------------------------------------------------------ -->
      <BallGameinfoMore />
    </div>
  </div>
</template>
<script>
import ArrowPic from "./ArrowPic.vue";
import {
  useBallGameInfoTable,
  useClickBetInfo,
  useBallGameData,
} from "@/stores/choosedgame";
import BallGameInfoTeams from "./BallGameInfoTeams.vue";
import BallGameinfoMore from "./BallGameinfoMore.vue";
import { ref, onMounted } from "vue";

export default {
  props: {
    title: {
      type: Object,
    },
    series: {
      type: String,
    },
    bgcolor: {
      type: String,
    },
    games: {
      type: Object,
    },
  },

  components: {
    ArrowPic,
    BallGameInfoTeams,
    BallGameinfoMore,
  },

  setup() {
    onMounted(() => {
      //console.log(aOdds);
    });
    const BallGameInfoTable = useBallGameInfoTable();

    const aOdds = BallGameInfoTable.aOdds;
    const ClickBetInfo = useClickBetInfo();
    const ishidden = ref(false);

    const ClickBet = (game) => {
      ClickBetInfo.league = game.sLeague;
      ClickBetInfo.team1 = game.sTeam1;
      ClickBetInfo.team2 = game.sTeam2;
      ClickBetInfo.dateandtime = game.sStartTime.substring(5, 10);
      ClickBetInfo.time = game.sStartTime.substring(11, 16);
      console.log(ClickBetInfo.date);
    };

    function open() {
      ishidden.value = !ishidden.value;
      console.log(ishidden.value);
    }

    return {
      ishidden,
      open,
      aOdds,
      ClickBet,
    };
  },
};
</script>
