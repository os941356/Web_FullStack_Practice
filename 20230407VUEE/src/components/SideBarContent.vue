<template>
  <button
    class="hover:bg-slate-300 w-full h-10 border border-b bg-[#efefef] flex justify-between items-center"
  >
    <div class="ml-14">{{ title }}</div>
    <div
      class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
    >
      {{ count }}
    </div>
  </button>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>
