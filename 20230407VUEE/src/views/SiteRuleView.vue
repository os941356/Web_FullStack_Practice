<template>
  <main class="flex">
    <SideBarGameRule class="w-[13%]" @toggle-sidebar="toggleSideBar" />
    <div class="w-[1px] border"></div>
    <div class="w-[77%]">
      <SiteRuleMain />
    </div>

    <div class="w-[1px] border"></div>
    <SideBar2 class="w-[15%]" />
  </main>
</template>

<script>
import SideBarGameRule from "@/components/SideBarGameRule.vue";
import SideBar2 from "@/components/SideBar2.vue";
import SiteRuleMain from "@/components/SiteRule/SiteRuleMain.vue";

export default {
  name: "HomeView",
  components: { SideBarGameRule, SideBar2, SiteRuleMain },

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
