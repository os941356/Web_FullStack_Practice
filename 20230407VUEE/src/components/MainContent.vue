<template>
  <div>
    <div class="bg-[#29a75e] h-10">
      <ul class="flex h-full items-center">
        <li class="text-white w-[35%] text-small flex">
          <svg
            class="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            :class="['h-6 w-6', 'transition-all', 'rotate-180']"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <div>足球</div>
        </li>
        <li class="text-white w-[10%] text-small border-l border-r text-center">
          全場讓球
        </li>
        <li class="text-white w-[10%] text-small border-r text-center">
          全場大小
        </li>
        <li class="text-white w-[10%] text-small border-r text-center">
          全場獨贏
        </li>
        <li class="text-white w-[10%] text-small border-r text-center">
          上半讓球
        </li>
        <li class="text-white w-[10%] text-small border-r text-center">
          上半大小
        </li>
        <li class="text-white w-[10%] text-small border-r text-center">
          上半獨贏
        </li>
        <li class="text-white w-[5%] text-small text-center">更多</li>
      </ul>
    </div>
    <div class="bg-slate-200 h-10 flex items-center">
      <svg
        class="mx-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        :class="['h-6 w-6', 'transition-all', 'rotate-180']"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <div>亞足冠軍聯賽</div>
    </div>
    <!--  -->
    <div class="">
      <div v-for="index in 8" :key="index">
        <div class="flex h-24">
          <div
            class="flex justify-between items-center h-full w-[35%] border-b border-r"
          >
            <div class="w-[10%] flex flex-col mr-0 text-gray-400">
              <div>07-07</div>
              <div>18:00</div>
            </div>
            <div class="w-[70%] flex justify-start">
              <ul class="flex flex-col">
                <li>大阪飛腳<span class="text-red-500">(中)</span></li>
                <li>淡濱尼流浪隊</li>
                <li>和局</li>
              </ul>
            </div>
            <div class="w-[10%] flex flex-col justify-end">
              <img
                src="../assets/ICON/滾球數據-1.png"
                alt=""
                class="w-8 ml-2"
              />
              <img src="../assets/ICON/未收藏.png" alt="" class="w-8 ml-2" />
            </div>
          </div>

          <template v-for="index in 2" :key="index">
            <div class="border-r bg-white h-full w-[10%]">
              <table class="h-full w-[10%]">
                <tr class="border-b w-full">
                  <td class="h-full w-full flex justify-between items-center">
                    <div class="ml-4 flex justify-start">0</div>
                    <div class="mx-8 text-blue-500 flex justify-end">0.82</div>
                  </td>
                </tr>
                <tr class="border-b">
                  <td class="h-full flex justify-between">
                    <div class="mx-8 flex justify-start"></div>
                    <div class="mx-8 text-blue-500 flex justify-end">0.82</div>
                  </td>
                </tr>
                <tr class="border-b">
                  <td class="h-full text-center flex justify-center">_</td>
                </tr>
              </table>
            </div>
            <div class="bg-white h-full w-[10%] border-r">
              <table class="h-full w-full">
                <tr class="border-b">
                  <td class="h-full flex justify-between items-center">
                    <div class="ml-4 flex justify-start">0</div>
                    <div class="mx-8 flex justify-end">
                      <span class="text-red-500"></span>
                      <span class="text-blue-500">0.82</span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b">
                  <td class="h-full flex justify-between">
                    <div class="mx-8 flex justify-start"></div>
                    <div class="mx-8 flex justify-end">0.82</div>
                  </td>
                </tr>
                <tr class="border-b">
                  <td class="h-full text-center flex justify-center">_</td>
                </tr>
              </table>
            </div>
            <div class="bg-white h-full w-[10%] border-r">
              <table class="h-full w-full">
                <tr class="border-b">
                  <td class="h-full flex justify-between items-center">
                    <div class="ml-4 flex justify-start">0</div>
                    <div class="mx-8 text-blue-500 flex justify-end">0.82</div>
                  </td>
                </tr>
                <tr class="border-b">
                  <td class="h-full flex justify-between">
                    <div class="mx-8 flex justify-start"></div>
                    <div class="mx-8 text-blue-500 flex justify-end">0.82</div>
                  </td>
                </tr>
                <tr class="border-b">
                  <td class="h-full text-center flex justify-center">_</td>
                </tr>
              </table>
            </div>
          </template>

          <div
            class="flex flex-col border-r border-b bg-white h-full w-[5%] items-center justify-center"
          >
            <div class="flex w-full justify-around">
              <img
                class="h-7"
                src="../assets/ICON/開放滾球及現場轉播.png"
                alt=""
              />
              <img class="h-7" src="../assets/ICON/賽事數據.png" alt="" />
            </div>
            <div>8 >></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
