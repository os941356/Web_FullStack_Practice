<template>
  <div
    class="flex justify-between items-center h-full w-[35%] border-b border-r"
  >
    <div class="w-[8%] flex flex-col ml-4 text-gray-400">
      <div>{{ date }}</div>
      <div>{{ time }}</div>
    </div>
    <div class="w-[70%] flex justify-start">
      <ul class="flex flex-col">
        <li>{{ team1 }}<span class="text-red-500">(中)</span></li>
        <li>{{ team2 }}</li>
        <li>{{ result }}</li>
      </ul>
    </div>
    <div class="w-[10%] flex flex-col justify-end">
      <img src="../assets/ICON/滾球數據-1.png" alt="" class="w-8 ml-2" />
      <img src="../assets/ICON/未收藏.png" alt="" class="w-8 ml-2" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    team1: {
      type: String,
    },
    team2: {
      type: String,
    },
    result: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
  },
};
</script>
