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
          <button>
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
    <div>
      <div>
        <ul class="h-full">
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/收藏夾.png"
                alt=""
              />
              收藏夾
            </div>
            <div
              class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
            >
              2
            </div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/即時賽事.png"
                alt=""
              />
              即時賽事
            </div>
            <div
              class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
            >
              31
            </div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/轉播賽事.png"
                alt=""
              />
              轉播賽事
            </div>
            <div
              class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
            >
              2
            </div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/歐洲盃.png"
                alt=""
              />
              歐洲盃
            </div>
            <div
              class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
            >
              5
            </div>
          </button>
          <!--  -->
          <li>
            <button
              class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
              @click="openmenu"
            >
              <div class="flex h-full items-center">
                <img
                  class="h-[80%] ml-2 mr-4"
                  src="../assets/ICON/足球.png"
                  alt=""
                />
                足球
              </div>
              <div
                class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
              >
                113
              </div>
            </button>
            <div
              class="w-full h-10 border border-b bg-[#efefef] flex justify-between items-center"
              :class="bool ? '' : 'hidden'"
            >
              <div class="ml-14">全場/上半</div>
              <div
                class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
              >
                113
              </div>
            </div>
            <div
              class="w-full h-10 border border-b bg-[#efefef] flex justify-between items-center"
              :class="bool ? '' : 'hidden'"
            >
              <div class="ml-14">角球</div>
              <div
                class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
              >
                113
              </div>
            </div>
            <div
              class="w-full h-10 border border-b bg-[#efefef] flex justify-between items-center"
              :class="bool ? '' : 'hidden'"
            >
              <div class="ml-14">特定15分鐘</div>
              <div
                class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
              >
                2
              </div>
            </div>
            <div
              class="w-full h-10 border border-b bg-[#efefef] flex justify-between items-center"
              :class="bool ? '' : 'hidden'"
            >
              <div class="ml-14">波膽</div>
              <div
                class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
              >
                61
              </div>
            </div>
            <div
              class="w-full h-10 border border-b bg-[#efefef] flex justify-between items-center"
              :class="bool ? '' : 'hidden'"
            >
              <div class="ml-14">入球數</div>
              <div
                class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
              >
                61
              </div>
            </div>
            <div
              class="w-full h-10 border border-b bg-[#efefef] flex justify-between items-center"
              :class="bool ? '' : 'hidden'"
            >
              <div class="ml-14">半全場</div>
              <div
                class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
              >
                61
              </div>
            </div>
          </li>
          <!--  -->
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/籃球.png"
                alt=""
              />
              籃球
            </div>
            <div
              class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
            >
              2
            </div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/棒球.png"
                alt=""
              />
              棒球
            </div>
            <div
              class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
            >
              2
            </div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/網球.png"
                alt=""
              />
              網球
            </div>
            <div
              class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
            >
              61
            </div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/冰球.png"
                alt=""
              />
              冰球
            </div>
            <div
              class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
            >
              2
            </div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/排球.png"
                alt=""
              />
              排球
            </div>
            <div
              class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
            >
              2
            </div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/乒乓球.png"
                alt=""
              />
              乒乓球
            </div>
            <div
              class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
            >
              8
            </div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border-b"
          >
            <div class="flex h-full items-center text-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/電子競技.png"
                alt=""
              />
              電子競技
            </div>
            <div
              class="justify-end mr-4 flex items-center h-full w-[16%] text-green-600 text-center"
            >
              1
            </div>
          </button>
        </ul>
      </div>
      <!-- 使用 v-for 生成組件 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ButtonPicStyle: "h-[80%] ml-2 mr-4",
      bool: false,
    };
  },
  methods: {
    openmenu() {
      this.bool = !this.bool;
    },
  },
};
</script>
