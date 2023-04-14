<template>
  <div>
    <div class="bg-[#29a75e] h-8">
      <ul class="flex justify-between items-center text-white">
        <li>今日</li>
        <li>滾球</li>
        <li>早盤</li>
        <li><button></button></li>
      </ul>
    </div>
    <div>
      <!-- <SideBarTopic v-for="index in 5" :key="index" /> -->
      <div>
        <ul>
          <li class="border" v-for="(bool, index) in isshow" :key="index">
            <button
              class="w-full h-full hover:bg-gray-50"
              @click="click(index)"
            >
              選項
            </button>
            <div
              class="w-full h-full text-center"
              :class="bool ? '' : 'hidden'"
            >
              內容
            </div>
          </li>
        </ul>
      </div>
      <!-- 使用 v-for 生成組件 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isshow = ref<boolean[]>([false, false, false, false, false]);
const click = (index: number) => {
  isshow.value[index] = !isshow.value[index];
  console.log("clicked", isshow.value[index]);
};
</script>
