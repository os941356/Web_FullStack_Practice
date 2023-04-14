<template>
  <div>
    <div class="bg-[#29a75e] h-8">
      <ul class="flex h-full items-center">
        <li class="text-white w-[35%] text-small">足球</li>
        <li class="text-white w-[10%] text-small border-l border-r text-center">
          全場讓球
        </li>
        <li class="text-white w-[10%] text-small border-l border-r text-center">
          全場大小
        </li>
        <li class="text-white w-[10%] text-small border-l border-r text-center">
          全場獨贏
        </li>
        <li class="text-white w-[5%] text-small border-l text-center">更多</li>
      </ul>
    </div>

    <div class="grid grid-cols-12">
      <!--  -->
      <div class="col-span-9">
        <div class="overflow-auto">
          <div v-for="index in 8" :key="index">
            <div class="bg-slate-200 h-8">亞足冠軍聯賽</div>
            <div class="flex h-24">
              <div
                class="flex justify-center items-center bg-slate-50 h-full w-[35%] border border-solid border-slate-400"
              >
                <ul class="flex flex-col items-center">
                  <li>大阪飛腳(中)</li>
                  <li>淡濱尼流浪隊</li>
                  <li>和局</li>
                </ul>
              </div>

              <template v-for="index in 3" :key="index">
                <div
                  class="border border-solid border-slate-400 bg-white h-full w-[20%]"
                >
                  <table class="h-full w-full">
                    <tr class="">
                      <td
                        class="border-b border-solid border-slate-400 text-center"
                      >
                        大 0.82
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="border-b border-solid border-slate-400 text-center"
                      >
                        小 0.82
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">1111</td>
                    </tr>
                  </table>
                </div>
              </template>

              <div
                class="border border-solid border-slate-400 bg-white h-full w-[5%]"
              >
                <img src="../assets/ICON/開放滾球及現場轉播.png" alt="" />
                <img src="../assets/ICON/賽事數據.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="col-span-3">
        <div class="bg-[#4bc27e] h-8">
          <div class="flex h-full">
            <img
              class="flex h-full"
              src="../assets/ICON/滾球數據-2.png"
              alt=""
            />
            <img src="../assets/ICON/數據%2850%25%29.png" alt="" />
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
          <button class="w-12">全部</button>
          <button class="w-20">全場/上半</button>
          <button class="w-20">角球/罰牌</button>
        </div>
        <div class="flex bg-[#d0fae2] h-8">
          <button>
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
            </svg></button
          ><button>全部</button>
        </div>
        <div
          class="bg-[#e8e8e8] h-7 text-[5px] flex items-center justify-center"
        >
          獨贏
        </div>
        <div class="bg-white h-7 text-[5px] flex justify-around items-center">
          <div>主-3.5</div>
          <div>和</div>
          <div>客+3.5</div>
        </div>
        <div
          class="bg-[#e8e8e8] h-7 text-[5px] flex items-center justify-center"
        >
          讓球
        </div>
        <div class="bg-whtie h-7 text-[5px]">主 客</div>
        <div
          class="bg-[#e8e8e8] h-7 text-[5px] flex items-center justify-center"
        >
          大小
        </div>
        <div class="flex bg-white h-7 text-[8px]">
          <button class="flex-1 border-r">大4</button>
          <button class="flex-1">小4</button>
        </div>
        <div
          class="bg-[#e8e8e8] h-7 text-[5px] flex items-center justify-center"
        >
          單双
        </div>
        <div class="flex bg-white h-7 text-[8px]">
          <button class="flex-1 border-r">單 0.959</button>
          <button class="flex-1">双 0.949</button>
        </div>
        <div class="flex bg-[#d0fae2] h-8">
          <button class="w-8">
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
          </button>
          <button>全場-角球數</button>
        </div>
        <div
          class="bg-[#e8e8e8] h-7 text-[5px] flex items-center justify-center"
        >
          大小
        </div>
        <div class="flex bg-white h-7 text-[8px]">
          <button class="flex-1 border-r">大9.5 0.89</button>
          <button class="flex-1">小9.5 1.00</button>
        </div>
        <div
          class="bg-[#e8e8e8] h-7 text-[5px] flex items-center justify-center"
        >
          單双
        </div>
        <div class="flex bg-white h-7 text-[8px]">
          <button class="flex-1 border-r">單 0.959</button>
          <button class="flex-1">双 0.949</button>
        </div>
        <div class="flex bg-[#d0fae2] h-8">
          <button class="w-8">
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
          </button>
          <button>上半場-角球數</button>
        </div>
        <div
          class="bg-[#e8e8e8] h-7 text-[5px] flex items-center justify-center"
        >
          大小
        </div>
      </div>
      <!--  -->
    </div>

    <!--  -->
  </div>
</template>

<script setup lang="ts"></script>
