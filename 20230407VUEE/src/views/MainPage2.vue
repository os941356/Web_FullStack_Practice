<script setup lang="ts">
import SideBar1 from "@/components/SideBar1.vue";
import SideBar2 from "@/components/SideBar2.vue";
import MainContent2 from "@/components/MainContent2.vue";
</script>

<template>
  <main class="flex">
    <SideBar1 class="w-[13%]" />
    <MainContent2 class="w-[77%]" />
    <SideBar2 class="w-[15%]" />
  </main>
</template>
