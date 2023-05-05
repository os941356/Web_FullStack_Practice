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
    v-for="n in quaters"
    :key="n"
    :title="n.sName0"
    :count="n.nCount"
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
    },
    src: {
      type: String,
    },
    count: {
      type: Number,
    },
    quaters: {
      type: Object,
    },
  },
  created: function () {
    // 在这里执行初始化操作
  },
  components: { SideBarContent },
};
</script>
