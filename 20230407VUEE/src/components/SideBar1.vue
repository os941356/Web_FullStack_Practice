<template>
  <div class="border-r-2">
    <div class="bg-[#29a75e] h-8">
      <ul class="h-full flex justify-around items-center text-white">
        <li>今日</li>
        <li>滾球</li>
        <li>早盤</li>
        <li><button></button></li>
      </ul>
    </div>
    <div>
      <div>
        <ul class="h-full">
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/收藏夾.png"
                alt=""
              />
              收藏夾
            </div>
            <div class="h-full w-12 text-green-600">2</div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/即時賽事.png"
                alt=""
              />
              即時賽事
            </div>
            <div class="h-full w-12 text-green-600">2</div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/轉播賽事.png"
                alt=""
              />
              轉播賽事
            </div>
            <div class="h-full w-12 text-green-600">2</div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/歐洲盃.png"
                alt=""
              />
              歐洲盃
            </div>
            <div class="h-full w-12 text-green-600">5</div>
          </button>
          <!--  -->
          <li>
            <button
              class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
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
              <div class="h-full w-12 text-green-600">5</div>
            </button>
            <div
              class="w-full h-10 text-center border border-b bg-[#efefef]"
              :class="bool ? '' : 'hidden'"
            >
              全場/上半
            </div>
            <div
              class="w-full h-10 text-center border border-b bg-[#efefef]"
              :class="bool ? '' : 'hidden'"
            >
              角球
            </div>
            <div
              class="w-full h-8 text-center border border-b bg-[#efefef]"
              :class="bool ? '' : 'hidden'"
            >
              特定15分鐘
            </div>
            <div
              class="w-full h-8 text-center border border-b bg-[#efefef]"
              :class="bool ? '' : 'hidden'"
            >
              波膽
            </div>
            <div
              class="w-full h-8 text-center border border-b bg-[#efefef]"
              :class="bool ? '' : 'hidden'"
            >
              入球數
            </div>
            <div
              class="w-full h-8 text-center bg-[#efefef]"
              :class="bool ? '' : 'hidden'"
            >
              半全場
            </div>
          </li>
          <!--  -->
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/籃球.png"
                alt=""
              />
              籃球
            </div>
            <div class="h-full w-12 text-green-600">2</div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/棒球.png"
                alt=""
              />
              棒球
            </div>
            <div class="h-full w-12 text-green-600">2</div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/網球.png"
                alt=""
              />
              網球
            </div>
            <div class="h-full w-12 text-green-600">61</div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/冰球.png"
                alt=""
              />
              冰球
            </div>
            <div class="flex items-center h-full w-8 text-green-600">2</div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/排球.png"
                alt=""
              />
              排球
            </div>
            <div class="flex items-center h-full w-8 text-green-600">2</div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
          >
            <div class="flex h-full items-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/乒乓球.png"
                alt=""
              />
              乒乓球
            </div>
            <div class="flex items-center h-full w-8 text-green-600">8</div>
          </button>
          <button
            class="w-full h-10 hover:bg-gray-50 flex items-center justify-between border border-b"
          >
            <div class="flex h-full items-center text-center">
              <img
                class="h-[80%] ml-2 mr-4"
                src="../assets/ICON/電子競技.png"
                alt=""
              />
              電子競技
            </div>
            <div class="flex items-center h-full w-8 text-green-600">1</div>
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
