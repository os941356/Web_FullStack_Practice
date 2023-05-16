<template>
  <div
    class="flex flex-col border-r border-b bg-white h-full w-[5%] items-center justify-center gap-[1em] ml-auto"
  >
    <div class="flex w-full justify-around">
      <button>
        <img class="h-7" src="../assets/ICON/開放滾球及現場轉播.png" alt="" />
      </button>
      <button @click="triggerMore">
        <img class="h-7" src="../assets/ICON/賽事數據.png" alt="" />
      </button>
    </div>
    <div>8 >></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMoreOpen: false,
    };
  },
  methods: {},
};
</script>
