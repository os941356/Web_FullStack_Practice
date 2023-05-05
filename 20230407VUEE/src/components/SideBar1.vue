<template>
  <div class="bg-[#29a75e] h-10">
    <div
      class="h-full flex justify-around items-center text-white justify-center"
    >
      <button
        class="w-[28%] h-full hover:bg-[#53b97f] text-center"
        @click="select(0)"
        :class="selected === 0 ? 'bg-[#53b97f]' : ''"
      >
        今日
      </button>
      <button
        class="w-[28%] h-full hover:bg-[#53b97f] text-center"
        @click="select(1)"
        :class="selected === 1 ? 'bg-[#53b97f]' : ''"
      >
        滾球
      </button>
      <button
        class="w-[28%] h-full hover:bg-[#53b97f] text-center"
        @click="select(2)"
        :class="selected === 2 ? 'bg-[#53b97f]' : ''"
      >
        早盤
      </button>
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
    <!-- 以下為手風琴選單 -->
    <div>
      <SideBarMenuButton
        :src="'/src/assets/ICON/收藏夾.png'"
        :title="'收藏夾'"
        :count="112"
        :contents="3"
        @click="openmenu"
      />
      <SideBarMenuButton
        v-for="(n, key) in PHPdata"
        :key="key"
        :src="'/src/assets/ICON/' + n.sName0 + '.png'"
        :title="n.sName0"
        :count="n.nCount"
        :quaters="n.aGroup"
      />
    </div>
  </div>
</template>

<script>
import SideBarMenuButton from "./SideBarMenuButton.vue";
import axios from "axios";

export default {
  data() {
    return {
      selected: 0,
      PHPdata: null,
      ButtonPicStyle: "h-[80%] ml-2 mr-4",
      bool: false,
      isChangeWidth: false,
    };
  },
  methods: {
    select(value) {
      this.selected = value;
      axios
        .post(
          "https://demo801.dtap000s3.com/Project/t_ball01/EndTest/api/client_use/getSportBar.php",
          {
            nDayRang: this.selected,
          }
        )
        .then((response) => {
          this.PHPdata = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openmenu() {
      this.bool = !this.bool;
    },
    changeWidth() {
      this.isChangeWidth = !this.isChangeWidth;
      this.$emit("toggle-sidebar");
    },
  },
  created() {
    axios
      .get(
        "https://demo801.dtap000s3.com/Project/t_ball01/EndTest/api/client_use/getSportBar.php"
      )
      .then((response) => {
        this.PHPdata = response.data;
        //console.log(this.PHPdata);
      });
  },
  components: { SideBarMenuButton },
};
</script>
