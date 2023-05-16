<template>
  <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
    讓球
  </div>
  <div class="bg-whtie h-7 text-sm flex">
    <div
      v-for="n in 2"
      :key="n"
      class="w-[50%] flex h-full w-full border-r justify-between items-center"
    >
      <div class="mx-4">主-3.5</div>
      <div class="mx-4 text-blue-500">0.96</div>
    </div>
  </div>
</template>
