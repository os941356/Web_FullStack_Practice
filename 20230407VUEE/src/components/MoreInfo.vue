<template>
  <div class="w-[35%]">
    <MoreinfoStartTime />
    <div class="flex bg-[#4bc27e] h-8 text-white justify-between">
      <ArrowPic class="" @click="trigger" />
      <button class="mx-4">全部</button>
      <button class="mx-4">全場/上半</button>
      <button class="mx-4">角球/罰牌</button>
    </div>
    <div :class="isopen ? '' : 'hidden'">
      <MoreInfoTimes />
    </div>
  </div>
</template>
<script>
import MoreinfoStartTime from "./MoreInfo_components/MoreinfoStartTime.vue";
import MoreInfoTimes from "./MoreInfo_components/MoreInfoTimes.vue";
import ArrowPic from "./ArrowPic.vue";
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
  components: { MoreinfoStartTime, MoreInfoTimes, ArrowPic },
};
</script>
