<template>
  <div>
    <div class="bg-[#29a75e] h-10">
      <ul class="flex h-full items-center">
        <div class="text-white w-[32.5%] flex">
          <div class="mx-2">
            <svg
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
          </div>
          <div>足球</div>
        </div>
        <li class="text-white w-[13.1%] border-l border-r text-center">
          全場讓球
        </li>
        <li class="text-white w-[13.1%] border-l border-r text-center">
          全場大小
        </li>
        <li class="text-white w-[13.1%] border-l border-r text-center">
          全場獨贏
        </li>
        <li class="text-white w-[13%] border-l text-center">更多</li>
      </ul>
    </div>

    <div class="flex">
      <!--  -->
      <div class="w-[75%]">
        <div class="overflow-auto">
          <div v-for="index in 8" :key="index">
            <div class="bg-slate-200 h-8 flex items-center">
              <div class="mx-2">
                <svg
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
              </div>
              <div>亞足冠軍聯賽</div>
            </div>
            <div class="flex h-24">
              <div
                class="flex justify-between items-center h-full w-[50%] border-b border-r"
              >
                <div class="w-[10%] flex flex-col text-gray-400">
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
                    class="w- ml-2"
                  />
                  <img
                    src="../assets/ICON/未收藏.png"
                    alt=""
                    class="w-8 ml-2"
                  />
                </div>
              </div>

              <template v-for="index in 3" :key="index">
                <div class="border-r bg-white h-full w-[20%]">
                  <table class="h-full w-full">
                    <tr class="border-b">
                      <td class="h-full flex justify-between items-center">
                        <div class="mx-8 flex justify-start">0</div>
                        <div class="mx-8 text-blue-500 flex justify-end">
                          0.82
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td class="h-full flex justify-between">
                        <div class="mx-8 flex justify-start"></div>
                        <div class="mx-8 text-blue-500 flex justify-end">
                          0.82
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td class="h-full text-center flex justify-center">_</td>
                    </tr>
                  </table>
                </div>
              </template>

              <div
                class="flex flex-col border-r border-b bg-white h-full w-[5%] items-center justify-center gap-[1em]"
              >
                <div class="flex w-full justify-around">
                  <img
                    class="h-5"
                    src="../assets/ICON/開放滾球及現場轉播.png"
                    alt=""
                  />
                  <img class="h-5" src="../assets/ICON/賽事數據.png" alt="" />
                </div>
                <div>8 >></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="w-[25%]">
        <div class="bg-[#4bc27e] h-8">
          <div class="flex h-full justify-center">
            <img src="../assets/ICON/滾球數據-2.png" alt="" />
            <img src="../assets/ICON/數據(50趴).png" alt="" class="" />
          </div>
        </div>
        <img class="w-full" src="../assets/ICON/開球時間.png" alt="" />
        <div class="flex bg-[#29a75e] h-10 w-full justify-around">
          <button>
            <img
              class="h-full align-middle"
              src="../assets/ICON/滾球數據-2.png"
              alt=""
            />
          </button>
          <button>
            <img class="h-full w-full" src="../assets/ICON/對戰.png" alt="" />
          </button>
          <button>
            <img class="h-full" src="../assets/ICON/排名.png" alt="" />
          </button>
          <button>
            <img class="h-full" src="../assets/ICON/陣容.png" alt="" />
          </button>
        </div>
        <div class="flex bg-[#4bc27e] h-8 text-white">
          <button>
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
          </button>
          <button class="">全部</button>
          <button class="ml-4">全場/上半</button>
          <button class="ml-4">角球/罰牌</button>
        </div>
        <div class="flex bg-[#d0fae2] h-8">
          <button>
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
            </svg></button
          ><button>全部</button>
        </div>
        <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
          獨贏
        </div>
        <div class="bg-white h-7 flex justify-between items-center text-sm">
          <div
            class="w-[33%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">主</div>
            <div class="mx-2 text-blue-500">0.0010</div>
          </div>
          <div
            class="w-[33%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">和</div>
            <div class="mx-2 text-blue-500">8.0010</div>
          </div>
          <div
            class="w-[33%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">和</div>
            <div class="mx-2 text-blue-500">18.685</div>
          </div>
        </div>
        <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
          讓球
        </div>
        <div class="bg-whtie h-7 text-sm flex">
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-4">主-3.5</div>
            <div class="mx-4 text-blue-500">0.96</div>
          </div>
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">客+3.5</div>
            <div class="mx-2 text-blue-500">0.96</div>
          </div>
        </div>
        <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
          大小
        </div>
        <div class="flex bg-white h-7 text-sm">
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-4">大4</div>
            <div class="mx-4 text-blue-500">1.05</div>
          </div>
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">小4</div>
            <div class="mx-2 text-blue-500">0.87</div>
          </div>
        </div>
        <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
          單双
        </div>
        <div class="flex bg-white h-7 text-sm">
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-4">單</div>
            <div class="mx-4 text-blue-500">1.05</div>
          </div>
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">双</div>
            <div class="mx-2 text-blue-500">0.87</div>
          </div>
        </div>
        <div class="flex bg-[#d0fae2] h-8">
          <button class="w-8">
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
          </button>
          <button>全場-角球數</button>
        </div>
        <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
          大小
        </div>
        <div class="flex bg-white h-7 text-sm">
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-4">大</div>
            <div class="mx-4 text-blue-500">9.5</div>
          </div>
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">小</div>
            <div class="mx-2 text-blue-500">0.87</div>
          </div>
        </div>
        <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
          單双
        </div>
        <div class="flex bg-white h-7 text-sm">
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-4">單</div>
            <div class="mx-4 text-blue-500">1.05</div>
          </div>
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">双</div>
            <div class="mx-2 text-blue-500">0.87</div>
          </div>
        </div>
        <div class="flex bg-[#d0fae2] h-8">
          <button class="w-8">
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
          </button>
          <button>上半場-角球數</button>
        </div>
        <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
          大小
        </div>
        <div class="flex bg-white h-7 text-sm">
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-4">大</div>
            <div class="mx-4 text-blue-500">9.5</div>
          </div>
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">小</div>
            <div class="mx-2 text-blue-500">0.87</div>
          </div>
        </div>
        <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
          單双
        </div>
        <div class="flex bg-white h-7 text-sm">
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-4">單</div>
            <div class="mx-4 text-blue-500">1.05</div>
          </div>
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">双</div>
            <div class="mx-2 text-blue-500">0.87</div>
          </div>
        </div>
        <div class="flex bg-[#d0fae2] h-8">
          <button class="w-8">
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
          </button>
          <button>上半場-角球數</button>
        </div>
        <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
          大小
        </div>
        <div class="flex bg-white h-7 text-sm">
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-4">大</div>
            <div class="mx-4 text-blue-500">9.5</div>
          </div>
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">小</div>
            <div class="mx-2 text-blue-500">0.87</div>
          </div>
        </div>
        <div class="bg-[#e8e8e8] h-7 text-sm flex items-center justify-center">
          單双
        </div>
        <div class="flex bg-white h-7 text-sm">
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-4">單</div>
            <div class="mx-4 text-blue-500">1.05</div>
          </div>
          <div
            class="w-[50%] flex h-full w-full border-r justify-between items-center"
          >
            <div class="mx-2">双</div>
            <div class="mx-2 text-blue-500">0.87</div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>

    <!--  -->
  </div>
</template>

<script setup lang="ts"></script>
