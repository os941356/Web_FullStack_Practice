<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import BallGameNav from "./components/BallGameNav.vue";
import BallGameNavTop from "./components/BallGameNavTop.vue";
import BallGameNavBut from "./components/BallGameNavBut.vue";
</script>

<template>
  <header>
    <BallGameNavTop></BallGameNavTop>
    <hr />
    <BallGameNavBut></BallGameNavBut>
  </header>
  <RouterView />
</template>

<style scoped></style>
