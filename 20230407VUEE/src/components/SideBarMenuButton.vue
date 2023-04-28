<template>
  <button
    @click="toggleMenu"
    class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
  >
    <div class="flex h-full items-center">
      <img class="h-[80%] ml-2 mr-4" :src="src" alt="" />
      {{ title }}
    </div>
    <div
      class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
    >
      {{ count }}
    </div>
  </button>

  <SideBarContent
    v-for="n in contents"
    :title="'全場/上半'"
    :count="10"
    :key="n"
    :class="menuIsOpen ? '' : 'hidden'"
  />
</template>
<script>
import SideBarContent from "./SideBarContent.vue";

// const porps = defineProps({
//     src: { type: String }
// })

export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    contents: {
      type: Number,
      required: true,
    },
  },
  created: function () {
    // 在这里执行初始化操作
  },
  components: { SideBarContent },
};
</script>
