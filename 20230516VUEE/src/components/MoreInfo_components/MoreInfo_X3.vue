<template>
  <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
    獨贏
  </div>
  <div>
    <div class="bg-white h-7 flex justify-between items-center text-sm">
      <div
        class="w-[33%] flex h-full w-full border-r justify-between items-center"
        v-for="n in 3"
        :key="n"
      >
        <div class="mx-2">主</div>
        <div class="mx-2 text-blue-500">0.0010</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
