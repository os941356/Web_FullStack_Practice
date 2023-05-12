<template>
  <main class="flex">
    <SideBar1 :class="[sideBarClass]" @toggle-sidebar="toggleSideBar" />
    <div class="w-[1px] border"></div>
    <div class="w-[77%] flex">
      <MainContent />
      <!-- <MoreInfo :class="isMoreOpen ? 'hidden' : ''" /> -->
    </div>

    <div class="w-[1px] border"></div>
    <SideBar2 class="w-[15%]" />
  </main>
</template>

<script>
import SideBar1 from "@/components/SideBar1.vue";
import SideBar2 from "@/components/SideBar2.vue";
import MainContent from "@/components/MainContent.vue";
import MoreInfo from "@/components/MoreInfo.vue";

export default {
  name: "HomeView",
  components: { SideBar1, SideBar2, MainContent, MoreInfo },

  data() {
    return {
      sideBarClass: "w-[13%]",
      chooseGameType: null,
    };
  },

  methods: {
    toggleSideBar() {
      this.sideBarClass =
        this.sideBarClass === "w-[13%]" ? "w-[3%]" : "w-[13%]";
      console.log(this.chooseGameType);
    },
  },
};
</script>
