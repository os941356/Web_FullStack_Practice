<template>
  <div
    class="bg-[#29a75e] h-10 flex items-center justify-around text-white mb-4"
  >
    <button
      @click="ChangeButStat1"
      class="flex h-full w-[33%] items-center hover:bg-[#53b97f] justify-center"
      :class="ButtonSatus === 1 ? 'hidden' : ''"
    >
      投注資訊
    </button>
    <button
      @click="ChangeButStat2"
      class="flex h-full w-[33%] items-center justify-center hover:bg-[#53b97f]"
    >
      最新注單
    </button>
    <div class="h-[80%] w-[33%] flex justify-center">
      <img src="../../assets/ICON/計算機.png" alt="" class="" />
      <img src="../../assets/ICON/設定.png" alt="" class= />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ButtonSatus: null,
    };
  },
  methods: {
    ChangeButStat1() {
      this.buttonstatus = 1;
      this.$emit("status-changed", this.buttonstatus);
      //console.log(this.buttonstats);u
    },
    ChangeButStat2() {
      this.buttonstatus = 2;
      this.$emit("status-changed", this.buttonstatus);
      //console.log(this.buttonstatus);
    },
  },
};
</script>
