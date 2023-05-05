<template>
  <button
    @click="onclick"
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
  methods: {
    onclick() {
      if (this.ballKindTitle === "NBA") {
        console.log(this.ballKindTitle);
      }
    },
  },
  props: {
    title: {
      type: String,
    },
    count: {
      type: Number,
    },
    ballKindTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
