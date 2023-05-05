<script>
import { RouterLink, RouterView } from "vue-router";

import BallGameNavTop from "./components/BallGameNavTop.vue";
import BallGameNavBut from "./components/BallGameNavBut.vue";

export default {
  components: { BallGameNavTop, BallGameNavBut },
};
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
