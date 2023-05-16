<template>
  <div class="bg-[#29a75e] h-10">
    <div class="flex h-full items-center ml-6 text-white">項目</div>
    <!-- 以下為手風琴選單 -->
    <div>
      <SideBarMenuButton
        :src="null"
        :title="'會員中心'"
        :count="null"
        :contents="3"
        @click="openmenu"
      />
      <SideBarMenuButton
        :title="'帳務紀錄'"
        :count="null"
        :contents="3"
        @click="openmenu"
      />
      <SideBarMenuButton
        :src="null"
        :title="'投注紀錄'"
        :count="null"
        :contents="3"
        @click="openmenu"
      />
      <SideBarMenuButton
        :src="'/src/assets/ICON/收.png'"
        :title="'公告'"
        :count="null"
        :contents="3"
        @click="openmenu"
      />
    </div>
  </div>
</template>

<script>
import SideBarMenuButton from "./SideBarMenuButton.vue";
import axios from "axios";

export default {
  components: { SideBarMenuButton },
};
</script>
