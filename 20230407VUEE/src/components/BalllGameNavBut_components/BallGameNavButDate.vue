<template>
  <div class="flex w-[13%] justify-around items-center">
    <div class="text-base text-white">{{ currentDate }}</div>
    <div class="text-base text-white">{{ currentTime }}</div>
    <div class="flex justify-between items-center h-full">
      <button class="flex h-full items-center">
        <img src="../../assets/ICON/SUN-1.png" alt="" class="h-[80%]" />
      </button>
      <button class="flex h-full items-center">
        <img src="../../assets/ICON/MOON-2.png" alt="" class="h-[80%]" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: "",
      currentTime: "",
    };
  },
  mounted() {
    this.getCurrentDate();
    setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      this.currentTime = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  },
  methods: {
    getCurrentDate() {
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      this.currentDate = `${month}-${day}`;
    },
  },
};
</script>
