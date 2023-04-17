<script setup lang="ts">
import SideBar1 from "@/components/SideBar1.vue";
import SideBar2 from "@/components/SideBar2.vue";
import MainContentReadyToStart from "@/components/MainContentReadyToStart.vue";
</script>

<template>
  <main class="flex">
    <SideBar1 class="w-[13%]" />
    <div class="w-[1px] border"></div>
    <MainContentReadyToStart class="w-[77%]" />
    <div class="w-[1px] border"></div>
    <SideBar2 class="w-[15%]" />
  </main>
</template>
