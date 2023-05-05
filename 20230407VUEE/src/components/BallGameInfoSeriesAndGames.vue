<template>
  <div>
    <!-- part2 -->
    <div class="bg-slate-200 h-10 flex items-center">
      <ArrowPic @click="open" />
      <div>{{ series }}</div>
    </div>
    <!-- part3 -->

    <div v-for="index in 3" :key="index">
      <div class="flex h-24" :class="ishidden ? 'hidden' : ''">
        <BallGameInfoTeams />
        <BallGameInfoTable v-for="index in 6" :key="index" />
        <BallGameinfoMore />
      </div>
    </div>
  </div>
</template>

<script>
import ArrowPic from "./ArrowPic.vue";
import BallGameInfoTable from "./BallGameInfoTable.vue";
import BallGameInfoTeams from "./BallGameInfoTeams.vue";
import BallGameinfoMore from "./BallGameinfoMore.vue";
export default {
  data() {
    return {
      ishidden: false,
      topics: [
        { id: 2, content: "全場大小" },
        { id: 3, content: "全場獨贏" },
        { id: 4, content: "上半讓球" },
        { id: 5, content: "上半大小" },
        { id: 6, content: "上半獨贏" },
      ],
    };
  },
  methods: {
    open() {
      this.ishidden = !this.ishidden;
      console.log(this.ishidden);
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
  },

  components: {
    ArrowPic,
    BallGameInfoTable,
    BallGameInfoTeams,
    BallGameinfoMore,
  },
};
</script>
