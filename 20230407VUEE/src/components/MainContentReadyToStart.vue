<template>
  <div>
    <div class="這是足球區塊">
      <div class="bg-[#29a75e] h-8">
        <ul class="flex h-full text-[5px]">
          <li class="text-white w-[35%] flex items-center">足球</li>
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
      <div class="bg-slate-200 h-8">亞足冠軍聯賽</div>
      <!--  -->
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

        <template v-for="index in 6" :key="index">
          <div
            class="border border-solid border-slate-400 bg-white h-full w-[10%]"
          >
            <table class="h-full w-full">
              <tr class="">
                <td class="border-b border-solid border-slate-400 text-center">
                  大 0.82
                </td>
              </tr>
              <tr>
                <td class="border-b border-solid border-slate-400 text-center">
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
    <div class="這是藍球區塊">
      <div class="bg-[#764c24] h-8">
        <ul class="flex h-full text-[5px]">
          <li class="text-white w-[35%] flex items-center">籃球</li>
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
      <div class="bg-slate-200 h-8">亞足冠軍聯賽</div>
      <!--  -->
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

        <template v-for="index in 6" :key="index">
          <div
            class="border border-solid border-slate-400 bg-white h-full w-[10%]"
          >
            <table class="h-full w-full">
              <tr class="">
                <td class="border-b border-solid border-slate-400 text-center">
                  大 0.82
                </td>
              </tr>
              <tr>
                <td class="border-b border-solid border-slate-400 text-center">
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
    <div class="這是棒球區塊">
      <div class="bg-[#464646] h-8">
        <ul class="flex h-full text-[5px]">
          <li class="text-white w-[35%] flex items-center">棒球</li>
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
      <div class="bg-slate-200 h-8">亞足冠軍聯賽</div>
      <!--  -->
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

        <template v-for="index in 6" :key="index">
          <div
            class="border border-solid border-slate-400 bg-white h-full w-[10%]"
          >
            <table class="h-full w-full">
              <tr class="">
                <td class="border-b border-solid border-slate-400 text-center">
                  大 0.82
                </td>
              </tr>
              <tr>
                <td class="border-b border-solid border-slate-400 text-center">
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
    <div class="這是網球區塊">
      <div class="bg-[#464646] h-8">
        <ul class="flex h-full text-[5px]">
          <li class="text-white w-[35%] flex items-center">棒球</li>
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
      <div class="bg-slate-200 h-8">亞足冠軍聯賽</div>
      <!--  -->
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

        <template v-for="index in 6" :key="index">
          <div
            class="border border-solid border-slate-400 bg-white h-full w-[10%]"
          >
            <table class="h-full w-full">
              <tr class="">
                <td class="border-b border-solid border-slate-400 text-center">
                  大 0.82
                </td>
              </tr>
              <tr>
                <td class="border-b border-solid border-slate-400 text-center">
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
    <div class="這是電子競技區塊">
      <div class="bg-[#7b49a0] h-8">
        <ul class="flex h-full text-[5px]">
          <li class="text-white w-[35%] flex items-center">棒球</li>
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
      <div class="bg-slate-200 h-8">亞足冠軍聯賽</div>
      <!--  -->
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

        <template v-for="index in 6" :key="index">
          <div
            class="border border-solid border-slate-400 bg-white h-full w-[10%]"
          >
            <table class="h-full w-full">
              <tr class="">
                <td class="border-b border-solid border-slate-400 text-center">
                  大 0.82
                </td>
              </tr>
              <tr>
                <td class="border-b border-solid border-slate-400 text-center">
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
  <!--  -->
</template>

<script setup lang="ts"></script>
