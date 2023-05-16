<script setup>
import { RouterLink, RouterView } from "vue-router";

import BallGameNavTop from "./components/BallGameNavTop.vue";
import BallGameNavBut from "./components/BallGameNavBut.vue";

import { useBallGameData } from "@/stores/choosedgame";
import { ref } from "vue";
import axios from "axios";

const BallGameData = useBallGameData();

const selectednRound = ref("1");
const change = () => {
  console.log(selectednRound, "111");
  axios
    .get(
      `https://demo801.dtap000s3.com/Project/t_ball00/EndTest/api/client_use/getFixOdds.php?nSid=3&nRound=${selectednRound.value}`
    )
    .then((response) => {
      BallGameData.allData = response.data;
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>

<template>
  <header>
    <BallGameNavTop></BallGameNavTop>
    <hr />
    <BallGameNavBut></BallGameNavBut>
  </header>
  <RouterView />
  {{ selectednRound }}
  <select
    @change="change"
    v-model="selectednRound"
    class="h-6 w-20 bg-[#29a75e]"
  >
    <option class="text-whtie" value="1">第一局</option>
    <option class="text-whtie" value="2">第二局</option>
    <option class="text-whtie" value="3">第三局</option>
    <option class="text-whtie" value="4">第四局</option>
    <option class="text-whtie" value="5">第五局</option>
    <option class="text-whtie" value="6">第六局</option>
    <option class="text-whtie" value="7">第七局</option>
    <option class="text-whtie" value="8">第八局</option>
    <option class="text-whtie" value="9">第九局</option>
  </select>
</template>
