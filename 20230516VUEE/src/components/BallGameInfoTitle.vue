<template>
  <div class="h-10" :class="bgcolor">
    <ul class="flex h-full items-center">
      <li class="text-white w-[35%] text-small flex">
        <ArrowPic @click="$emit('open')" />
        <div>{{ GameStore.chooseGameType }}</div>
      </li>
      <div class="flex" v-if="GameStore.chooseGameType === 'NBA'">
        <ArrowPic />
        <select
          v-model="selectednRound"
          class="appearance-none h-6 w-20"
          :class="bgcolor"
        >
          <option class="text-whtie" value="1">第一局</option>
          <option class="text-whtie" value="11">第二局</option>
          <option class="text-whtie" value="3">第三局</option>
          <option class="text-whtie" value="4">第四局</option>
          <option class="text-whtie" value="5">第五局</option>
          <option class="text-whtie" value="6">第六局</option>
          <option class="text-whtie" value="7">第七局</option>
          <option class="text-whtie" value="8">第八局</option>
          <option class="text-whtie" value="9">第九局</option>
        </select>
      </div>
      <li class="text-white w-[15%] text-small border-l border-r text-center">
        讓球
      </li>
      <li
        v-for="topic in topics"
        :key="topic"
        class="text-white w-[15%] text-small border-r text-center"
      >
        {{ topic.content }}
      </li>
      <li class="text-white w-[5%] text-small text-center">更多</li>
    </ul>
  </div>
</template>
<script>
import { ref, onMounted, watch } from "vue";
import ArrowPic from "./ArrowPic.vue";
import axios from "axios";
import {
  useBallGameData,
  usePostData,
  useGameStore,
} from "@/stores/choosedgame";

export default {
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
  },
  emits: ["open"],

  setup(props) {
    const GameStore = useGameStore();
    const selectednRound = ref("1");
    const BallGameData = useBallGameData();
    const PostData = usePostData();
    watch(selectednRound, (newValue) => {
      console.log("Selected Value Changed:", newValue);
      const dataform = new FormData();
      dataform.append("nRound", newValue);
      axios.get("https://yuanspeed.com/aaa.php").then((response) => {
        BallGameData.allData = response.data;
        console.log(BallGameData.allData);
      });
    });

    const topics = ref([
      { id: 2, content: "大小" },
      { id: 3, content: "獨贏" },
      { id: 4, content: "單雙" },
    ]);

    onMounted(() => {});

    return {
      topics,
      selectednRound,
      GameStore,
    };
  },
  components: {
    ArrowPic,
  },
};
</script>
