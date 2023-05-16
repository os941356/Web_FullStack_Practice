<template>
  <div class="flex bg-[#d0fae2] h-8">
    <ArrowPic @click="trigger" />
    <button>全部</button>
  </div>
  <div :class="isopen ? '' : 'hidden'">
    <MoreInfo_X3 />
    <MoreInfo_X2 />
  </div>
</template>
<script>
import ArrowPic from "../ArrowPic.vue";
import MoreInfo_X3 from "./MoreInfo_X3.vue";
import MoreInfo_X2 from "./MoreInfo_X2.vue";
export default {
  data() {
    return {
      isopen: true,
    };
  },
  methods: {
    trigger() {
      this.isopen = !this.isopen;
    },
  },
  components: {
    MoreInfo_X3,
    MoreInfo_X2,
    ArrowPic,
  },
};
</script>
