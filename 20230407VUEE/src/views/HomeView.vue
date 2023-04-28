<template>
  <main class="flex">
    <SideBar1 :class="[sideBarClass]" @toggle-sidebar="toggleSideBar" />
    <div class="w-[1px] border"></div>
    <MainContent class="w-[77%]" />
    <div class="w-[1px] border"></div>
    <SideBar2 class="w-[15%]" />
  </main>
</template>

<script>
import SideBar1 from "@/components/SideBar1.vue";
import SideBar2 from "@/components/SideBar2.vue";
import MainContent from "@/components/MainContent.vue";

export default {
  name: "HomeView",
  components: { SideBar1, SideBar2, MainContent },
  data() {
    return {
      sideBarClass: "w-[13%]",
    };
  },
  methods: {
    toggleSideBar() {
      this.sideBarClass =
        this.sideBarClass === "w-[13%]" ? "w-[3%]" : "w-[13%]";
    },
  },
};
</script>
