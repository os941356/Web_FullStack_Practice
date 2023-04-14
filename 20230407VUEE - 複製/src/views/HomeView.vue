<script setup lang="ts">
import SideBar1 from "@/components/SideBar1.vue";
import SideBar2 from "@/components/SideBar2.vue";
import MainContent from "@/components/MainContent.vue";
</script>

<template>
  <main class="grid grid-cols-12">
    <SideBar1 class="col-span-2" />
    <MainContent class="col-span-8" />
    <SideBar2 class="col-span-2" />
  </main>
</template>
