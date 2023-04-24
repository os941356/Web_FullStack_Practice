<template>
  <div>
    <div class="這是足球區塊">
      <div class="bg-[#006837] h-10">
        <ul class="flex h-full text-sm">
          <div class="text-white w-[35%] flex items-center">
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
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-l border-r text-center">全場讓球</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">全場大小</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">全場獨贏</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半讓球</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半大小</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半獨贏</span>
          </li>
          <li class="text-white w-[5%] h-full flex items-center justify-center">
            <span class="w-full text-center">更多</span>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="bg-slate-200 h-10 flex items-center">
        <div>
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
        </div>
        <div>亞足冠軍聯賽</div>
      </div>
      <!--  -->
      <div class="flex h-24">
        <div
          class="flex justify-between items-center h-full w-[35%] border-b border-r"
        >
          <div class="w-[8%] flex flex-col ml-4 text-gray-400">
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
            <img src="../assets/ICON/滾球數據-1.png" alt="" class="w-8 ml-2" />
            <img src="../assets/ICON/未收藏.png" alt="" class="w-8 ml-2" />
          </div>
        </div>

        <template v-for="index in 6" :key="index">
          <div class="border bg-white h-full w-[10%]">
            <table class="h-full w-full">
              <tr class="">
                <td
                  class="h-8 border-b text-center flex justify-between items-center"
                >
                  <div class="ml-8">0</div>
                  <div class="mr-8 text-blue-500">0.82</div>
                </td>
              </tr>
              <tr></tr>
              <tr class="">
                <td
                  class="h-8 border-b text-center flex justify-between items-center"
                >
                  <div class="ml-8"></div>
                  <div class="mr-8 text-blue-500">0.82</div>
                </td>
              </tr>
              <tr class="">
                <td class="h-8 border-b text-center flex justify-between"></td>
              </tr>
            </table>
          </div>
        </template>
        <div
          class="flex flex-col border-r border-b bg-white h-full w-[5%] items-center justify-center gap-[1em]"
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
    <div class="這是藍球區塊">
      <div class="bg-[#764c24] h-10">
        <ul class="flex h-full text-sm">
          <div class="text-white w-[35%] flex items-center">
            <div class="flex">
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
              <div>籃球</div>
            </div>
          </div>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-l border-r text-center">全場讓球</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">全場大小</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">全場獨贏</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半讓球</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半大小</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半獨贏</span>
          </li>
          <li class="text-white w-[5%] h-full flex items-center justify-center">
            <span class="w-full text-center">更多</span>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="bg-slate-200 h-10 flex items-center">
        <div>
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
        </div>
        <div>亞足冠軍聯賽</div>
      </div>
      <!--  -->
      <div class="flex h-24">
        <div
          class="flex justify-between items-center h-full w-[35%] border-b border-r"
        >
          <div class="w-[8%] flex flex-col ml-4 text-gray-400">
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
            <img src="../assets/ICON/滾球數據-1.png" alt="" class="w-8 ml-2" />
            <img src="../assets/ICON/未收藏.png" alt="" class="w-8 ml-2" />
          </div>
        </div>

        <template v-for="index in 6" :key="index">
          <div class="border bg-white h-full w-[10%]">
            <table class="h-full w-full">
              <tr class="">
                <td
                  class="h-8 border-b text-center flex justify-between items-center"
                >
                  <div class="ml-8">0</div>
                  <div class="mr-8 text-blue-500">0.82</div>
                </td>
              </tr>
              <tr></tr>
              <tr class="">
                <td
                  class="h-8 border-b text-center flex justify-between items-center"
                >
                  <div class="ml-8"></div>
                  <div class="mr-8 text-blue-500">0.82</div>
                </td>
              </tr>
              <tr class="">
                <td class="h-8 border-b text-center flex justify-between"></td>
              </tr>
            </table>
          </div>
        </template>
        <div
          class="flex flex-col border-r border-b bg-white h-full w-[5%] items-center justify-center gap-[1em]"
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
    <div class="這是棒球區塊">
      <div class="bg-[#464646] h-10">
        <ul class="flex h-full text-sm">
          <div class="text-white w-[35%] flex items-center">
            <div class="flex">
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
              <div>棒球</div>
            </div>
          </div>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-l border-r text-center">全場讓球</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">全場大小</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">全場獨贏</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半讓球</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半大小</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半獨贏</span>
          </li>
          <li class="text-white w-[5%] h-full flex items-center justify-center">
            <span class="w-full text-center">更多</span>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="bg-slate-200 h-10 flex items-center">
        <div>
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
        </div>
        <div>亞足冠軍聯賽</div>
      </div>
      <!--  -->
      <div class="flex h-24">
        <div
          class="flex justify-between items-center h-full w-[35%] border-b border-r"
        >
          <div class="w-[8%] flex flex-col ml-4 text-gray-400">
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
            <img src="../assets/ICON/滾球數據-1.png" alt="" class="w-8 ml-2" />
            <img src="../assets/ICON/未收藏.png" alt="" class="w-8 ml-2" />
          </div>
        </div>

        <template v-for="index in 6" :key="index">
          <div class="border bg-white h-full w-[10%]">
            <table class="h-full w-full">
              <tr class="">
                <td
                  class="h-8 border-b text-center flex justify-between items-center"
                >
                  <div class="ml-8">0</div>
                  <div class="mr-8 text-blue-500">0.82</div>
                </td>
              </tr>
              <tr></tr>
              <tr class="">
                <td
                  class="h-8 border-b text-center flex justify-between items-center"
                >
                  <div class="ml-8"></div>
                  <div class="mr-8 text-blue-500">0.82</div>
                </td>
              </tr>
              <tr class="">
                <td class="h-8 border-b text-center flex justify-between"></td>
              </tr>
            </table>
          </div>
        </template>
        <div
          class="flex flex-col border-r border-b bg-white h-full w-[5%] items-center justify-center gap-[1em]"
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
    <div class="這是網球區塊">
      <div class="bg-[#29a75e] h-10">
        <ul class="flex h-full text-sm">
          <div class="text-white w-[35%] flex items-center">
            <div class="text-white w-[35%] flex items-center">
              <div class="flex">
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
                <div>網球</div>
              </div>
            </div>
          </div>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-l border-r text-center">全場讓球</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">全場大小</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">全場獨贏</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半讓球</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半大小</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半獨贏</span>
          </li>
          <li class="text-white w-[5%] h-full flex items-center justify-center">
            <span class="w-full text-center">更多</span>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="bg-slate-200 h-10 flex items-center">
        <div>
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
        </div>
        <div>亞足冠軍聯賽</div>
      </div>
      <!--  -->
      <div class="flex h-24">
        <div
          class="flex justify-between items-center h-full w-[35%] border-b border-r"
        >
          <div class="w-[8%] flex flex-col ml-4 text-gray-400">
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
            <img src="../assets/ICON/滾球數據-1.png" alt="" class="w-8 ml-2" />
            <img src="../assets/ICON/未收藏.png" alt="" class="w-8 ml-2" />
          </div>
        </div>

        <template v-for="index in 6" :key="index">
          <div class="border bg-white h-full w-[10%]">
            <table class="h-full w-full">
              <tr class="">
                <td
                  class="h-8 border-b text-center flex justify-between items-center"
                >
                  <div class="ml-8">0</div>
                  <div class="mr-8 text-blue-500">0.82</div>
                </td>
              </tr>
              <tr></tr>
              <tr class="">
                <td
                  class="h-8 border-b text-center flex justify-between items-center"
                >
                  <div class="ml-8"></div>
                  <div class="mr-8 text-blue-500">0.82</div>
                </td>
              </tr>
              <tr class="">
                <td class="h-8 border-b text-center flex justify-between"></td>
              </tr>
            </table>
          </div>
        </template>

        <div
          class="flex flex-col border-r border-b bg-white h-full w-[5%] items-center justify-center gap-[1em]"
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
    <div class="這是電子競技區塊">
      <div class="bg-[#7b49a0] h-10">
        <ul class="flex h-full text-sm">
          <div class="text-white w-[35%] flex items-center">
            <div class="text-white w-[35%] flex items-center">
              <div class="text-white w-[35%] flex items-center">
                <div class="flex">
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
                  <div class="w-16">電子競技</div>
                </div>
              </div>
            </div>
          </div>

          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-l border-r text-center">全場讓球</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">全場大小</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">全場獨贏</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半讓球</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半大小</span>
          </li>
          <li
            class="text-white w-[10%] h-full flex items-center justify-center"
          >
            <span class="w-full border-r text-center">上半獨贏</span>
          </li>
          <li class="text-white w-[5%] h-full flex items-center justify-center">
            <span class="w-full text-center">更多</span>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="bg-slate-200 h-10 flex items-center">
        <div>
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
        </div>
        <div>亞足冠軍聯賽</div>
      </div>
      <!--  -->
      <div class="flex h-24">
        <div
          class="flex justify-between items-center h-full w-[35%] border-b border-r"
        >
          <div class="w-[8%] flex flex-col ml-4 text-gray-400">
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
            <img src="../assets/ICON/滾球數據-1.png" alt="" class="w-8 ml-2" />
            <img src="../assets/ICON/未收藏.png" alt="" class="w-8 ml-2" />
          </div>
        </div>

        <template v-for="index in 6" :key="index">
          <div class="border bg-white h-full w-[10%]">
            <table class="h-full w-full">
              <tr class="">
                <td
                  class="h-8 border-b text-center flex justify-between items-center"
                >
                  <div class="ml-8">0</div>
                  <div class="mr-8 text-blue-500">0.82</div>
                </td>
              </tr>
              <tr></tr>
              <tr class="">
                <td
                  class="h-8 border-b text-center flex justify-between items-center"
                >
                  <div class="ml-8"></div>
                  <div class="mr-8 text-blue-500">0.82</div>
                </td>
              </tr>
              <tr class="">
                <td class="h-8 border-b text-center flex justify-between"></td>
              </tr>
            </table>
          </div>
        </template>
        <div
          class="flex flex-col border-r border-b bg-white h-full w-[5%] items-center justify-center gap-[1em]"
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
  <!--  -->
</template>

<script setup lang="ts"></script>
