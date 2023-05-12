<template>
  <div class="bg-[#29a75e] h-10">
    <div
      class="h-full flex justify-around items-center text-white justify-center"
    >
      <button
        class="w-[28%] h-full hover:bg-[#53b97f] text-center"
        @click="select(1)"
        :class="POSTPHP.nDayRang === 1 ? 'bg-[#53b97f]' : ''"
      >
        今日
      </button>
      <button
        class="w-[28%] h-full hover:bg-[#53b97f] text-center"
        @click="select(0)"
        :class="POSTPHP.nDayRang === 0 ? 'bg-[#53b97f]' : ''"
      >
        滾球
      </button>
      <button
        class="w-[28%] h-full hover:bg-[#53b97f] text-center"
        @click="select(2)"
        :class="POSTPHP.nDayRang === 2 ? 'bg-[#53b97f]' : ''"
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
import { ref, onMounted, getCurrentInstance, defineComponent } from "vue";
import axios from "axios";
import { usePostData } from "@/stores/choosedgame";
import SideBarMenuButton from "@/components/SideBarMenuButton.vue";

export default {
  components: { SideBarMenuButton },

  setup(_, { emit }) {
    const POSTPHP = usePostData();
    const PHPdata = ref(null);
    const ButtonPicStyle = "h-[80%] ml-2 mr-4";
    const bool = ref(false);
    const isChangeWidth = ref(false);
    const dataform = new FormData();

    const select = (value) => {
      POSTPHP.nDayRang = value;
      dataform.append("nDayRang", POSTPHP.nDayRang);
      axios
        .post(
          "https://demo801.dtap000s3.com/Project/t_ball01/EndTest/api/client_use/getSportBar.php",
          dataform
        )
        .then((response) => {
          PHPdata.value = response.data;
          console.log(PHPdata.value.nDayRang);
          console.log("PHPData");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const openmenu = () => {
      bool.value = !bool.value;
    };

    const changeWidth = () => {
      isChangeWidth.value = !isChangeWidth.value;
      emit("toggle-sidebar"); // 触发父组件的事件
    };

    onMounted(() => {
      axios
        .get(
          "https://demo801.dtap000s3.com/Project/t_ball01/EndTest/api/client_use/getSportBar.php"
        )
        .then((response) => {
          PHPdata.value = response.data;
          // console.log(PHPdata.value);
        });
    });

    return {
      POSTPHP,
      PHPdata,
      ButtonPicStyle,
      bool,
      isChangeWidth,
      select,
      openmenu,
      changeWidth,
    };
  },
};
</script>
