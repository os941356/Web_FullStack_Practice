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

import axios from "axios";
import {
  useBallGameData,
  useGameStore,
  usePostData,
} from "@/stores/choosedgame";

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
      //nSid
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
      //nRound
      ["全場", 11],
      ["上半場", 12],
      ["下半場", 13],
      ["單節", 14],
    ]);

    const onclick = () => {
      gamesStore.chooseGameType = props.ballKindTitle;
      gamesStore.chooseGameRound = props.title;
      PostData.nSid = gameTypeMap.get(gamesStore.chooseGameType);
      dataform.append("nDayRang", PostData.nDayRang);
      dataform.append("nSid", PostData.nSid);
      dataform.append(
        "nRound",
        gameRoundTypeMap.get(gamesStore.chooseGameRound)
      );

      axios
        .post("https://yuanspeed.com/aaaa.php", dataform)
        .then((response) => {
          BallGameData.allData = response.data;
          //console.log(BallGameData.allData.aData.aOdds, "打印allData");
          if (gamesStore.chooseGameType === "足球") {
            for (let n in BallGameData.allData.aData.aOdds) {
              //n=23,1,14,16
              const obj = BallGameData.allData.aData.aOdds[n];

              // 交换属性位置
              const temp = obj["0"];
              obj["0"] = obj["1"];
              obj["1"] = temp;

              //將-1,0,1改成 0,1,
              for (let i in BallGameData.allData.aData.aOdds[n]) {
                //i=-1,0,1

                BallGameData.allData.aData.aOdds[n][i]["00"]["new"] = {
                  nId: "",
                  nHdp: "",
                  sHdp: "",
                  nOdds: "",
                  nOnline: "",
                };
                BallGameData.allData.aData.aOdds[n][i]["01"]["new"] = {
                  nId: "",
                  nHdp: "",
                  sHdp: "",
                  nOdds: "",
                  nOnline: "",
                };
                if (
                  !Object.prototype.hasOwnProperty.call(
                    BallGameData.allData.aData.aOdds[n][i],
                    "02"
                  )
                ) {
                  BallGameData.allData.aData.aOdds[n][i]["02"] = {
                    1: {
                      nHdp: "",
                      sHdp: "",
                      nOdds: "",
                    },
                    2: {
                      nHdp: "",
                      sHdp: "",
                      nOdds: "",
                    },
                    3: {
                      nHdp: "",
                      sHdp: "",
                      nOdds: "",
                    },
                  };
                  console.log(BallGameData.allData.aData.aOdds[n][i]);
                }
                if (
                  Object.prototype.hasOwnProperty.call(
                    BallGameData.allData.aData.aOdds[n][i],
                    "03"
                  )
                ) {
                  BallGameData.allData.aData.aOdds[n][i]["03"]["new"] = {
                    nId: "",
                    nHdp: "",
                    sHdp: "",
                    nOdds: "",
                    nOnline: "",
                  };
                }
                if (
                  !Object.prototype.hasOwnProperty.call(
                    BallGameData.allData.aData.aOdds[n][i],
                    "03"
                  )
                ) {
                  BallGameData.allData.aData.aOdds[n][i]["03"] = {
                    1: {
                      nHdp: "",
                      sHdp: "",
                      nOdds: "",
                    },
                    2: {
                      nHdp: "",
                      sHdp: "",
                      nOdds: "",
                    },
                    3: {
                      nHdp: "",
                      sHdp: "",
                      nOdds: "",
                    },
                  };
                }
              }
            }
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
