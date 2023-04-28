<template>
  <nav class="flex justify-between items-center bg-[#00873a] h-20">
    <div class="w-[13%]">
      <a href="#"
        ><img class="h-12" src="../assets/球版01_files/logo.png" alt=""
      /></a>
    </div>

    <div class="w-[77%] justify-center ml-20">
      <div class="flex items-center gap-[3vw] justify-center">
        <div>
          <a :class="topicStyle" href="">現場轉播</a>
        </div>
        <div>
          <a :class="topicStyle" href="">即時比分</a>
        </div>
        <div>
          <a :class="topicStyle" href="">賽果</a>
        </div>
        <div>
          <a :class="topicStyle" href="">規則</a>
        </div>
        <div>
          <a :class="topicStyle" href="">投注紀錄</a>
        </div>
      </div>
    </div>

    <div class="flex text-white w-[15%] justify-end">
      <p class="mr-4">尊123456789</p>
      <p class="mx-1">$0</p>
      <button class="ml-4">
        <img src="../assets/ICON/轉帳.png" alt="" class="h-7" />
      </button>
      <button><img src="../assets/ICON/客服.png" alt="" class="h-7" /></button>
      <button><img src="../assets/ICON/公告.png" alt="" class="h-7" /></button>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      topicStyle: "hover:text-gray-500 text-white text-base",
    };
  },
};
</script>
