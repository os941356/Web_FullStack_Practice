<template>
  <div class="h-10" :class="bgcolor">
    <ul class="flex h-full items-center">
      <li class="text-white w-[35%] text-small flex">
        <ArrowPic @click="$emit('open')" />
        <div>{{ title }}</div>
      </li>
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
import ArrowPic from "./ArrowPic.vue";

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
  data() {
    return {
      topics: [
        { id: 2, content: "大小" },
        { id: 3, content: "獨贏" },
        { id: 4, content: "單雙" },
      ],
    };
  },
  components: {
    ArrowPic,
  },
};
</script>
