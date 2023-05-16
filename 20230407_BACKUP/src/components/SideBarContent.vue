<template>
  <button
    @click="onclick"
    class="hover:bg-slate-300 w-full h-10 border border-b bg-[#efefef] flex justify-between items-center"
  >
    <div class="ml-14">{{ title }}</div>
    <div
      class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
    >
      {{ count }}
    </div>
  </button>
</template>

<script>
import { ref } from "vue";
import {
  useGameStore,
  useBallGameData,
  usePostData,
} from "@/stores/choosedgame";

import axios from "axios";

export default {
  props: {
    title: {
      type: String,
    },
    count: {
      type: Number,
    },
    ballKindTitle: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const gamesStore = useGameStore();
    const dataform = new FormData();
    const BallGameData = useBallGameData();
    const PostData = usePostData();
    const store = useGameStore();
    const gameTypeMap = new Map([
      ["NBA", 1],
      ["籃球", 2],
      ["美棒", 3],
      ["日棒", 4],
      ["台棒", 5],
      ["韓棒", 6],
      ["足球", 7],
      ["WBC經典賽", 8],
    ]);
    const gameRoundTypeMap = new Map([
      ["全場", 11],
      ["上半場", 12],
      ["下半場", 13],
      ["單節", 14],
    ]);

    const onclick = () => {
      gamesStore.chooseGameType = props.ballKindTitle;
      gamesStore.chooseGameRound = props.title;

      dataform.append("nDayRang", PostData.nDayRang);
      dataform.append("nSid", gameTypeMap.get(gamesStore.chooseGameType));
      dataform.append(
        "nRound",
        gameRoundTypeMap.get(gamesStore.chooseGameRound)
      );

      axios
        .post(
          "https://demo801.dtap000s3.com/Project/t_ball00/EndTest/api/client_use/getFixOdds.php",
          dataform
        )
        .then((response) => {
          BallGameData.allData = response.data;
          //console.log(BallGameData.allData.aData.aOdds, "打印allData");

          for (let n in BallGameData.allData.aData.aOdds) {
            //n=23,1,14,16
            for (let i in BallGameData.allData.aData.aOdds[n]) {
              //i=-1,0,1
              BallGameData.allData.aData.aOdds[n][i]["00"]["new"] = {
                nId: "",
                nHdp: "",
                sHdp: "",
                nOdds: "",
                nOnline: "",
                nShow: 0,
              };
              BallGameData.allData.aData.aOdds[n][i]["01"]["new"] = {
                nId: "",
                nHdp: "",
                sHdp: "",
                nOdds: "",
                nOnline: "",
                nShow: 0,
              };
              if (
                !Object.prototype.hasOwnProperty.call(
                  BallGameData.allData.aData.aOdds[n][i],
                  "03"
                )
              ) {
                BallGameData.allData.aData.aOdds[n][i]["03"] = {};
              }

              console.log(
                BallGameData.allData.aData.aOdds[n][i]["00"]["1"],
                "new"
              );
            }
            // BallGameData.allData.aData.aOdds[n]["1"]["00"]["4"] = {
            //   nId: "",
            //   nHdp: "",
            //   sHdp: "",
            //   nOdds: "",
            //   nOnline: "",
            //   nShow: 0,
            // };
            console.log(BallGameData.allData.aData.aOdds[n]);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      onclick,
    };
  },
};
</script>
