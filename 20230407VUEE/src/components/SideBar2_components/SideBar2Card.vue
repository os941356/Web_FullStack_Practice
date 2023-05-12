<template>
  <div class="bg-slate-200 h-[350px] flex flex-col justify-around mx-1">
    <div class="h-[5%]">孟非斯輝雄</div>
    <div class="賽示資訊 h-[40%] border-white border-t border-b">
      <p>NBA-全場-讓球</p>
      <p>date:{{ betInfo.date }}</p>
      <p>time:{{ betInfo.time }}</p>
      <p>league:{{ betInfo.league }}</p>
      <p>{{ betInfo.team1 }}vs{{ betInfo.team2 }}</p>
    </div>
    <div class="投注金 h-[40%]">
      <p>投注限額 <span>100-10000</span></p>
      <p>
        投注金額 <span><input type="text" class="w-[150px]" /></span>
      </p>
      <p>可贏金額 <span>0.00</span></p>
      <div class="h-16">
        <button class="w-[20%]">
          <img src="../../assets/球版01_files/100.png" alt="" class="h-full" />
        </button>
        <button class="w-[20%]">
          <img src="../../assets/球版01_files/500.png" alt="" class="h-full" />
        </button>

        <button class="w-[20%]">
          <img src="../../assets/球版01_files/1000.png" alt="" class="h-full" />
        </button>
        <button class="w-[20%]">
          <img src="../../assets/球版01_files/2000.png" alt="" class="h-full" />
        </button>
        <button class="w-[20%]">
          <img src="../../assets/球版01_files/5000.png" alt="" class="h-full" />
        </button>
      </div>
    </div>
    <div class="flex justify-around h-[10%] items-center">
      <button class="bg-[#53b97f] w-[40%] h-full">確認下注</button>
      <button class="bg-[#53b97f] w-[40%] h-full">取消</button>
    </div>
  </div>
</template>
<script>
import { ref, watchEffect } from "vue";
import { useClickBetInfo } from "@/stores/choosedgame";

export default {
  setup() {
    const ClickBetInfo = useClickBetInfo();
    const betInfo = ref({
      league: null,
      team1: null,
      team2: null,
      date: null,
      time: null,
    });
    watchEffect(() => {
      betInfo.value = {
        league: ClickBetInfo.league,
        team1: ClickBetInfo.team1,
        team2: ClickBetInfo.team2,
        date: ClickBetInfo.date,
        time: ClickBetInfo.time,
      };
    });

    return {
      betInfo,
    };
  },
};
</script>
