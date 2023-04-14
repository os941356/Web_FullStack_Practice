<template>
  <div>
    <div class="bg-[#29a75e] h-8">
      <ul class="flex h-full items-center">
        <li class="text-white w-[35%] text-small">足球</li>
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
        <li class="text-white w-[5%] text-small border-r text-center">更多</li>
      </ul>
    </div>
    <div class="bg-slate-200 h-8">亞足冠軍聯賽</div>
    <!--  -->
    <div class="">
      <div v-for="index in 8" :key="index">
        <div class="flex h-24">
          <div
            class="flex justify-center items-center h-full w-[35%] border-b border-r"
          >
            <ul class="flex flex-col items-center">
              <li>大阪飛腳(中)</li>
              <li>淡濱尼流浪隊</li>
              <li>和局</li>
            </ul>
          </div>

          <template v-for="index in 2" :key="index">
            <div class="bg-white h-full w-[10%] border-b border-r">
              <table class="h-full w-full">
                <tr class="">
                  <td class="flex justify-around text-center">
                    <span>0</span>
                    <span>0.82</span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b border-t border-solid text-center">
                    <span>0</span>
                    <span>0.82</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">1111</td>
                </tr>
              </table>
            </div>
            <div class="bg-white h-full w-[10%] border-b border-r">
              <table class="h-full w-full">
                <tr class="">
                  <td class="text-center">大 0.82</td>
                </tr>
                <tr>
                  <td class="border-b border-t border-solid text-center">
                    小 0.82
                  </td>
                </tr>
                <tr>
                  <td class="text-center">1111</td>
                </tr>
              </table>
            </div>
            <div class="bg-white h-full w-[10%] border-b border-r">
              <table class="h-full w-full">
                <tr class="">
                  <td class="text-center">大 0.82</td>
                </tr>
                <tr>
                  <td class="border-b border-t border-solid text-center">
                    小 0.82
                  </td>
                </tr>
                <tr>
                  <td class="text-center">111</td>
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
