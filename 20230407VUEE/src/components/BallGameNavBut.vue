<template>
  <header>
    <headerbut>
      <nav class="bg-[#00873a] flex h-10">
        <div class="flex w-[13%] justify-around items-center">
          <div class="text-base text-white">07-07</div>
          <div class="text-base text-white">14:30:55</div>
          <div class="flex justify-between items-center h-full">
            <button class="flex h-full items-center">
              <img src="../assets/ICON/SUN-1.png" alt="" class="h-[80%]" />
            </button>
            <button class="flex h-full items-center">
              <img src="../assets/ICON/MOON-2.png" alt="" class="h-[80%]" />
            </button>
          </div>
        </div>
        <div class="w-[77%] flex justify-between items-center">
          <div class="text-white flex items-center">
            <button
              class="bg-[#005825] text-sm w-24 h-7 flex items-center justify-center"
            >
              <div class="material-symbols-outlined">refresh</div>
              <div>更新資料</div>
            </button>
            每<button class="bg-[#005825] text-sm w-8 h-7">00</button>秒自動更新
          </div>
          <div>
            <div class="flex items-center">
              <div class="px-4 text-sm text-white border-r flex items-center">
                <label for="a" class="flex items-center">
                  <p class="mr-2">自動接收最佳賠率</p>
                  <div class="bg-[#005825] w-[24px] h-[24px]">
                    <span class="material-symbols-outlined" v-if="isAuto">
                      done
                    </span>
                  </div>
                </label>
                <input type="checkbox" class="hidden" id="a" v-model="isAuto" />
              </div>

              <div class="px-4 text-sm text-white border-r" ref="foo">
                聯盟選擇
              </div>
              <div class="flex px-4 text-sm text-white border-r items-center">
                <div>不含本金</div>
                <button>
                  <svg
                    class="ml-1 scale-[.8]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    :class="['h-6 w-6', 'transition-all', 'rotate-']"
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
              <div class="flex px-4 text-sm text-white border-r items-center">
                <div>熱門排序</div>
                <button>
                  <svg
                    class="ml-1 scale-[.8]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    :class="['h-6 w-6', 'transition-all', 'rotate-']"
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
        </div>
        <div class="w-[15%] text-white flex items-center justify-end">
          <p>快速投注</p>
          <input
            type="text"
            class="w-24 ml-2 h-6 bg-[#005825] placeholder-white"
            placeholder="輸入金額"
            @click="toggle"
            :class="{ hidden: !isshow }"
          />
          <div class="relative ml-[14px] mr-12" @click="toggle">
            <div
              class="px-[12px] rounded-full"
              :class="isshow ? 'bg-yellow-400' : 'bg-red-600'"
            >
              <p :class="isshow ? 'right-1' : 'left-1'">
                {{ isshow ? "on" : "off" }}
              </p>
              <div
                class="bg-white border border-white/50 rounded-full absolute h-full w-[50%] top-0"
                :class="
                  !isshow
                    ? '-translate-x-1/4 left-0'
                    : 'translate-x-1/4 right-0'
                "
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </headerbut>
  </header>
</template>
<script setup lang="ts">
import { ref } from "vue";

const foo = ref(null);
const isshow = ref<boolean>(false);

const toggle = () => {
  isshow.value = !isshow.value;
  console.log(foo.value);
};

const isAuto = ref<boolean>(false);
</script>
<style></style>
<!-- //h-8可以綁定 -->
