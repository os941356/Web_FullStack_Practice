<template>
  <nav class="flex justify-between items-center w-[92%] bg-[#00873a] h-12">
    <div>
      <a href="#"
        ><img class="w-16" src="../assets/球版01_files/logo.png" alt=""
      /></a>
    </div>

    <div class="">
      <ul class="flex items-center gap-[4vw]">
        <li><a class="{{liStyle}}" href="">現場轉播0</a></li>
        <li><a class="hover:text-gray-500 text-white" href="">即時比分</a></li>
        <li><a class="hover:text-gray-500 text-white" href="">賽果</a></li>
        <li><a class="hover:text-gray-500 text-white" href="">規則</a></li>
        <li>
          <a class="hover:text-gray-500 text-yellow-400" href="">評分紀錄</a>
        </li>
      </ul>
    </div>
    <div>
      <button><img src="" alt="" /></button>
      <button><img src="" alt="" /></button>
      <button><img src="" alt="" /></button>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      liStyle: "hover:text-gray-500 text-white",
    };
  },
};
</script>
