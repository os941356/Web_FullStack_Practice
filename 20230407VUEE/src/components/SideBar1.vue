<template>
  <div>
    <div class="bg-[#29a75e] h-10">
      <div class="h-full flex justify-around items-center text-white">
        <div
          class="w-[28%] bg-[#53b97f] h-full flex justify-center items-center"
        >
          今日
        </div>
        <div class="w-[28%] text-center">滾球</div>
        <div class="w-[28%] text-center">早盤</div>
        <div class="w-[16%] flex justify-center items-center">
          <button @click="changeWidth">
            <svg
              class=""
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              :class="['h-6 w-6', 'transition-all', 'rotate-90']"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- 以下為手風琴選單 -->
    <div>
      <div>
        <ul class="h-full">
          <SideBarMenuButton
            :src="'/src/assets/ICON/收藏夾.png'"
            :title="'收藏夾'"
            :count="112"
            :contents="3"
            @click="openmenu"
          />
          <SideBarMenuButton
            :src="'/src/assets/ICON/足球.png'"
            :title="'足球'"
            :count="123"
            :contents="4"
          />

          <!--  -->

          <!--  -->
        </ul>
      </div>
      <!-- 使用 v-for 生成組件 -->
    </div>
  </div>
</template>

<script>
import SideBarMenuButton from "./SideBarMenuButton.vue";

export default {
  data() {
    return {
      ButtonPicStyle: "h-[80%] ml-2 mr-4",
      bool: false,
      isChangeWidth: false,
    };
  },
  methods: {
    openmenu() {
      this.bool = !this.bool;
    },
    changeWidth() {
      this.isChangeWidth = !this.isChangeWidth;
      this.$emit("toggle-sidebar");
    },
  },
  components: { SideBarMenuButton },
};
</script>
